import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [search, setsearch] = useState("")

  const searchHandler = (event) => {
    setsearch(event.target.value)
  }

  let api = process.env.REACT_APP_NEWS_API
  return (
    <>
      <Router >
        <Navbar search={search} searchHandler={searchHandler}/>
        <Switch>
          <Route exact path="/">
            <News api={api} search={search} category="general"/>
          </Route>
          <Route exact path="/business">
            <News api={api} search={search} category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News api={api} search={search} category="entertainment"/>
          </Route>
          <Route exact path="/general">
            <News api={api} search={search} category="general"/>
          </Route>
          <Route exact path="/health">
            <News api={api} search={search} category="health"/>
          </Route>
          <Route exact path="/science">
            <News api={api} search={search} category="science"/>
          </Route>
          <Route exact path="/sports">
            <News api={api} search={search} category="sports"/>
          </Route>
          <Route exact path="/technology">
            <News api={api} search={search} category="technology"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
