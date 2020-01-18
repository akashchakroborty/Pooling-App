/**
 * Based on the Qty of votes calculate the percent
 * @param {number} votes
 * @param {number} totalvotes
 * @return {string} percevalue
 */
export const calculatePercent = (votes, choiseArray = []) => {
  let totalvotes = (function(choiseArray) {
    let sum = 0;
    for (let i = 0; i < choiseArray.length; i++) {
      sum += choiseArray[i].votes;
    }
    return sum;
  })(choiseArray);

  const percevalue = isNaN(
    parseInt((parseInt(votes, 10) * 100) / totalvotes, 10).toFixed(2)
  )
    ? 0
    : ((parseInt(votes, 10) * 100) / totalvotes).toFixed(2);
  return percevalue;
};
