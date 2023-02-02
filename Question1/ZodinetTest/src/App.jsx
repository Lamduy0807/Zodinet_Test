import { useState } from "react";
import "./App.scss";
import Popup from "./Components/Popup/Popup";
import CreatePost from "./Components/CreatePost/CreatePost";
import FetchPost from "./Components/FetchPost/FetchPost";

function App() {
  const [open, setOpen] = useState(false);
  const [detailPost, setDetailPost] = useState();

  /**
   * open popup diplay details post and show information
   * @param {object} post
   */
  const _viewDetailPost = (post) => {
    setDetailPost(post);
    _handleChangeOpenPopup();
  };

  /**
   * set state for displaying popup
   * @param {} none
   */
  const _handleChangeOpenPopup = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <CreatePost viewDetailPost={_viewDetailPost} />
      <FetchPost viewDetailPost={_viewDetailPost} />
      <Popup
        isOpen={open}
        handleChangeOpen={_handleChangeOpenPopup}
        title={detailPost?.title}
        user={detailPost?.userId}
        id={detailPost?.id}
        body={detailPost?.body}
      />
    </div>
  );
}

export default App;
