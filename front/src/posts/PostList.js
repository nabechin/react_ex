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
      <div>
        <div class="ui inverted segment">
          <div class="ui inverted relaxed divided list">
            {this.renderPostList()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
