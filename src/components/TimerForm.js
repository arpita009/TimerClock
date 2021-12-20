import React, { useState } from "react";
import convertToSecs from "../helperFunctions.js/convertToSecs";
import TimerDisplay from "./TimerDisplay";

const TimerForm = (props) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [startClick, setStartClick] = useState(false);
    const [allSecs, setAllSecs] = useState(0)

    const handleChange = (e) => {
        const input = e.target.value;
        const attr = e.target.name;
        if (attr === "days") {
            setDays(input);
        } else if (attr === "hours") {
            setHours(input);
        } else if (attr === "minutes") {
            setMinutes(input);
        } else if (attr === "seconds") {
            setSeconds(input);
        }
    };
    const handleSubmit= (e) =>{
        e.preventDefault()
        const formData={
            days,
            hours,
            minutes,
            seconds
        }
        console.log('formData', formData)
        setStartClick(true);
        setAllSecs(convertToSecs(formData))
    }
  return(
      <form onSubmit={handleSubmit}>
        <label> Enter time</label>
        <input
            type="number"
            value={days}
            onChange={handleChange}
            name="days"
        />days
        <input
            type="number"
            value={hours}
            onChange={handleChange}
            name="hours"
        />hours
        <input
            type="number"
            value={minutes}
            onChange={handleChange}
            name="minutes"
        />minutes
        <input
            type="number"
            value={seconds}
            onChange={handleChange}
            name="seconds"
        />seconds
        <br/><br/><br/>
        {/* <button onClick={handleReset}>reset</button> */}
        <input type="submit" value="Start" />
        {startClick && <TimerDisplay allSecs={allSecs} />}
      </form>
  )
};
export default TimerForm;
