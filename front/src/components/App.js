import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../posts/PostList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div class="ui container" style={{ padding: "10px" }}>
          <Route path="/" component={PostList} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
