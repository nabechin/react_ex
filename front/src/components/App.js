import React from "react";
import { Route, Router } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../posts/PostList";
import PostCreate from "../posts/PostCreate";
import PostEdit from "../posts/PostEdit";
import history from "../history";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div class="ui container" style={{ padding: "10px" }}>
          <Route path="/" exact component={PostList} />
          <Route path="/posts" exact component={PostCreate} />
          <Route path="/post/:id" exact component={PostEdit} />
        </div>
      </Router>
    </div>
  );
};

export default App;
