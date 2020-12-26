import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPostList = () => {
    return this.props.posts.map((post) => {
      return (
        <div class="item">
          <div className="right floated content">
            <button class="ui secondary basic button">Edit</button>
            <button class="ui secondary basic button">Delete</button>
          </div>
          <div class="content">
            <div class="header">{post.title}</div>
            {post.content}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="ui middle aligned divided list">
        {this.renderPostList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // {1: {}, 2:{}} -> [{}, {}]
    posts: Object.values(state.posts),
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
