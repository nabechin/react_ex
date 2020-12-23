import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../posts/PostList";
import PostCreate from "../posts/PostCreate";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div class="ui container" style={{ padding: "10px" }}>
          <Route path="/" exact component={PostList} />
          <Route path="/post" exact component={PostCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
