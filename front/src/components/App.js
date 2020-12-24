import React from "react";
import { Route, Router } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../posts/PostList";
import PostCreate from "../posts/PostCreate";
import history from "../history";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div class="ui container" style={{ padding: "10px" }}>
          <Route path="/" exact component={PostList} />
          <Route path="/post" exact component={PostCreate} />
        </div>
      </Router>
    </div>
  );
};

export default App;
