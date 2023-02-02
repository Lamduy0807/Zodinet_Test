import React from "react";
import { useState } from "react";
import { getPost } from "../../Funtions/API";
import Post from "../Post/Post";
import "./FetchPost.scss";
import PropTypes from "prop-types";

const FetchPost = ({ viewDetailPost }) => {
  const [posts, setPosts] = useState([]);

  /**
   * fetch all posts from server
   * @param {} none
   */
  const _fetchPost = () => {
    getPost().then((response) => {
      setPosts(response);
    });
  };
  return (
    <div className="fetch-post">
      <div className="fetch-post__button">
        <button
          onClick={() => {
            _fetchPost();
          }}
        >
          Fetch Post
        </button>
      </div>
      <div className="fetch-post__grid">
        {posts.map((item, index) => {
          return (
            <div key={index} className="fetch-post__grid__item">
              <Post
                title={item.title}
                handleOpenPopup={() => viewDetailPost(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
FetchPost.propTypes = {
  viewDetailPost: PropTypes.func,
};
FetchPost.defaultProps = {
  viewDetailPost: () => {},
};
export default FetchPost;
