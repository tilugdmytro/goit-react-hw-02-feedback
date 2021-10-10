import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options, onFeedback } = this.props;
    return (
      <div className={s.feedbackList}>
        {options.map((option) => {
          return (
            <button
              key={option}
              type="button"
              className={s.feedbackBtn}
              onClick={() => onFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
