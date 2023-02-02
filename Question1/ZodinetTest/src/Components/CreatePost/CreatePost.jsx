import React from "react";
import { useState } from "react";
import Post from "../Post/Post";
import Input from "../Input/Input";
import { postPost } from "../../Funtions/API";
import "./CreatePost.scss";
import PropTypes from "prop-types";

const CreatePost = ({ viewDetailPost }) => {
  const [createTitle, setCreateTitle] = useState("");
  const [createUserID, setCreateUserID] = useState(1);
  const [createBody, setCreateBody] = useState("");
  const [createdSuccesPost, setCreatedSuccessPost] = useState();

  /**
   * Handle when input of title change
   * @param {string} title
   */
  const _handleChangeCreateTitle = (title) => {
    setCreateTitle(title);
  };

  /**
   * Handle when input of body change
   * @param {string} body
   */
  const _handleChangeCreateBody = (body) => {
    setCreateBody(body);
  };

  /**
   * Handle when input of user id change
   * @param {number} id
   */
  const _handleChangeCreateUserID = (id) => {
    setCreateUserID(id);
  };

  /**
   * Post a post to server
   * @param {} none
   * @returns none
   */
  const _createPost = () => {
    if (createTitle === "") {
      window.alert("Title must not be empty");
      return;
    }
    if (createBody === "") {
      window.alert("Body must not be empty");
      return;
    }
    postPost(createUserID, createTitle, createBody).then((res) => {
      if (res.status === 201) {
        window.alert("create success");
        setCreatedSuccessPost({
          userId: createUserID,
          title: createTitle,
          body: createBody,
          id: res.responseJson.id,
        });
      } else {
        window.alert("Fail to create");
      }
    });
  };

  return (
    <div className="create-post">
      <div className="create-post__child">
        <Input
          name="User ID:"
          placeholder="Enter User ID"
          type={"number"}
          value={createUserID}
          onChange={_handleChangeCreateUserID}
        />
        <Input
          name="Title:"
          placeholder="Enter Title"
          value={createTitle}
          onChange={_handleChangeCreateTitle}
        />
        <Input
          name="Body:"
          placeholder="Enter Body"
          value={createBody}
          onChange={_handleChangeCreateBody}
        />
        <div className="create-post__button">
          <button onClick={_createPost}>Create Post</button>
        </div>
      </div>
      <div className="create-post__child--right create-post__child">
        {createdSuccesPost ? (
          <Post
            title={createdSuccesPost.title}
            handleOpenPopup={() => viewDetailPost(createdSuccesPost)}
          />
        ) : null}
      </div>
    </div>
  );
};
CreatePost.propTypes = {
  viewDetailPost: PropTypes.func,
};
CreatePost.defaultProps = {
  viewDetailPost: () => {},
};
export default CreatePost;
