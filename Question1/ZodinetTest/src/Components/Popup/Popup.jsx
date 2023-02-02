import React from "react";
import PropTypes from "prop-types";
import "./Popup.scss";
const Popup = ({ isOpen, body, title, user, id, handleChangeOpen }) => {
  return isOpen ? (
    <div className="popup">
      <div className="popup__container">
        <div className="popup__exit">
          <svg
            style={{ cursor: "pointer" }}
            onClick={handleChangeOpen}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="close">
              <path
                id="x"
                d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
              />
            </g>
          </svg>
        </div>
        <div className="popup__title">User: {user}</div>
        <div className="popup__title">Post ID: {id}</div>
        <div className="popup__title">Title: {title}</div>
        <p className="popup__body">Body: {body}</p>
      </div>
    </div>
  ) : null;
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  body: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.number,
  id: PropTypes.number,
  handleChangeOpen: PropTypes.func,
};
Popup.defaultProps = {
  isOpen: false,
  body: "",
  title: "",
  user: 0,
  id: 0,
  handleChangeOpen: () => {},
};
export default Popup;
