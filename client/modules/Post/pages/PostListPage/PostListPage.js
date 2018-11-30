import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostList from "../../components/PostList";
import PostCreateWidget from "../../components/PostCreateWidget/PostCreateWidget";
import {
  addPostRequest,
  fetchPosts,
  deletePostRequest,
  likePost,
  dislikePost
} from "../../PostActions";
import { toggleAddPost } from "../../../App/AppActions";
import { getShowAddPost } from "../../../App/AppReducer";
import { getPosts } from "../../PostReducer";

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm("Do you want to delete this post")) {
      // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  handleDislikePost = post => {
    this.props.dispatch(dislikePost(post));
  };

  handleLikePost = post => {
    this.props.dispatch(likePost(post));
  };

  render() {
    return (
      <div>
        <PostCreateWidget
          addPost={this.handleAddPost}
          showAddPost={this.props.showAddPost}
        />
        <PostList
          handleDeletePost={this.handleDeletePost}
          handleLikePost={this.handleLikePost}
          handleDislikePost={this.handleDislikePost}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

PostListPage.need = [
  () => {
    return fetchPosts();
  }
];

function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state)
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

PostListPage.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(PostListPage);
