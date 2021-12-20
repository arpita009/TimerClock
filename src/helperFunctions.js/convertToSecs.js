const convertToSecs = (formData) => {
    const {days, hours, minutes, seconds} = formData
    return   (days * 24 * 3600) + (hours * 3600) + (minutes * 60) + (seconds *1)
    // if (unit === "days") {
    //   seconds = inputNum * 24 * 3600;
    // } else if (unit === "hours") {
    //   seconds = inputNum * 3600;
    // } else if (unit === "minutes") {
    //   seconds = inputNum * 60;
    // } else if (unit === "seconds") {
    //   seconds = inputNum;
    // }
    // return seconds;
  };
  export default convertToSecs;
  