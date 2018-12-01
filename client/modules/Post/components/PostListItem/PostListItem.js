import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";

import styles from "./PostListItem.css";

function PostListItem(props) {
  return (
    <div className={styles["single-post"]}>
      <h3 className={styles["post-title"]}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`}>
          {props.post.title}
        </Link>
      </h3>
      <p className={styles["author-name"]}>
        <FormattedMessage id="by" /> {props.post.name}
      </p>
      <p className={styles["post-desc"]}>{props.post.content}</p>
      <p className={styles["post-action"]}>Votes: {props.post.vote}</p>
      <p className={styles["post-action"]}>
        <a href="#" onClick={props.onDelete}>
          <FormattedMessage id="deletePost" />
        </a>
        <a href="javascript:;" onClick={props.likePost}>
          <FormattedMessage id="likePost" />
        </a>
        <a href="javascript:;" onClick={props.dislikePost}>
          <FormattedMessage id="dislikePost" />
        </a>
      </p>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
  dislikePost: PropTypes.func.isRequired
};

export default PostListItem;
