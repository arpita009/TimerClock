import React from "react";
import splitTime from "../helperFunctions.js/splitTime";

const TimerDisplay = (props) => {
  const {allSecs} = props
  return (
    <div>
      <p>Your time starts now!</p>
      <p> Time left now is {splitTime(allSecs)} </p>
    </div>
  );
};
export default TimerDisplay;
