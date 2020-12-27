import React from "react";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../actions";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

class PostList extends React.Component {
  state = { show: false, deletedPost: null };
  componentDidMount = () => {
    this.props.fetchPosts();
  };
  onModalClick = (post) => {
    this.setState({ show: true });
    this.setState({ deletedPost: post });
  };
  onClose = () => {
    this.setState({ show: false });
  };
  onDeleteSubmit = (id) => {
    this.props.deletePost(id);
    this.setState({ show: false });
  };
  renderModal = () => {
    if (this.state.show) {
      return (
        <div>
          <Modal
            onClose={() => {
              this.onClose();
            }}
            title={this.state.deletedPost.title}
            content={this.state.deletedPost.content}
            onSubmit={() => {
              this.onDeleteSubmit(this.state.deletedPost.id);
            }}
          ></Modal>
        </div>
      );
    }
  };
  renderPostList = () => {
    return this.props.posts.map((post) => {
      return (
        <div class="item">
          <div className="right floated content">
            <Link to={`post/${post.id}`} className="ui button secondary basic">
              Edit
            </Link>
            <button
              class="ui secondary basic button"
              onClick={() => {
                this.onModalClick(post);
              }}
            >
              Delete
            </button>
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
        {this.renderModal()}
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

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostList);
