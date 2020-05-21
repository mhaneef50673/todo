import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

export default class Modal extends React.Component {

  render() {
    const { title, isVisible } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <div className="modal" id="modal">
        <h4>{title}</h4>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string,
};