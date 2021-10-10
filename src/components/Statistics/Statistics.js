import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={s.statList}>
        <li className={s.item}>
          <p>Good: {good}</p>
        </li>
        <li className={s.item}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={s.item}>
          <p>Bad: {bad}</p>
        </li>
        <li className={s.item}>
          <p>Total: {total}</p>
        </li>
        <li className={s.item}>
          <p>Positive feadback: {positivePercentage}%</p>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
