import React from 'react';
import PropTypes from 'prop-types';
import './timer.css';

function leftPad(n) {
  return n < 10 ?  `0${n}` : n;
}

function formatTime(sec) {
  const minutes = parseInt(sec / 60, 10);
  const second = parseInt(sec % 60, 10);
  return `${leftPad(minutes)} : ${leftPad(second)}`;
}

const Timer = (props) => (
  <div className="Timer">
    <p>
      <span>{formatTime(props.currentTime)} / {formatTime(props.duration)}</span>
    </p>
  </div>
);

export default Timer;
