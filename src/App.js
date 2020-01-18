import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import QuestionsList from "./components/questions-list/questions-list.component";
import QuestionDetails from "./components/question-details/question-details.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route exact path="/" render={() => <Redirect to="/questions" />} />
      <Switch>
        <Route path="/questions/:questionId" component={QuestionDetails} />
        <Route path="/questions" component={QuestionsList} />
      </Switch>
    </div>
  );
}

export default App;
