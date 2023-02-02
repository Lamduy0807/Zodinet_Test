import React from "react";
import PropTypes from "prop-types";
import "./Post.scss";
const Post = ({ title, handleOpenPopup }) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      <div className="post__overlay">
        <div className="post__overlay__content">
          <p onClick={handleOpenPopup}>View details</p>
        </div>
      </div>
    </div>
  );
};
Post.propTypes = {
  title: PropTypes.string,
  handleOpenPopup: PropTypes.func,
};
Post.defaultProps = {
  title: "",
  handleOpenPopup: () => {},
};
export default Post;
