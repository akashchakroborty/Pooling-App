# Polling-App

> Pooling-App is a Single page application that lets users vote through the Polls API. It uses browser **Poll API** to fetch the data

## Demo

If you want to check the application, go to the online demo by clicking [here](https://pooling-app-live.herokuapp.com/).

### Prerequisites

**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### Installing

Steps to get a development env running:

- Make a local copy doing:

```
git clone https://github.com/akashchakroborty/Pooling-App.git
```

- Run npm install:

```
npm install
```

- Run start:

```
npm start
```

- Then open http://localhost:3000/ to see the app.

The application list's all the Questions on the initial page (Questions List page). On clicking on "Vote Now" in one of them you will be redirected to Question Details Page and can access the description and you can vote one of the choices, just select the right one and then click on "Save Vote".
Also, in the Questions List page, you can create a New Question by clicking on "Add New Question".

**Important Note**: Please follow the format on the text area description to save all the choices. The Choices must be Coma Separated value.

## Running the tests

To run the automated tests please run

```
npm test
```

## Technologies used

- [React](https://github.com/facebook/create-react-app) - The web Library.
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps.
- [Redux-Saga](https://github.com/redux-saga/redux-saga) - To manage application side effects.
- [axios](https://github.com/axios/axios) - As HTTP client.
- [JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language.
- [Jest](https://jestjs.io/en/) - Testing Framework.
- [Enzyme](https://github.com/airbnb/enzyme) - To test React components.
- [Styled-Components](https://github.com/styled-components/styled-components) - CSS in JS to style components.
- [Reselect](https://github.com/reduxjs/reselect) - Selector library for Redux.
- [Heroku](https://dashboard.heroku.com/) - Cloud application hosting platform.

## Authors

- **Akash Chakroborty** - [akashchakroborty](https://github.com/akashchakroborty)
