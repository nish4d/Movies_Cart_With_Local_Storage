import React, { useEffect, useState } from "react";

const ShowCart = ({ times }) => {
  const [time, getTimes] = useState(times);
  const [uptime, setUptime] = useState(0);
  const [displayTime, setDisplayTime] = useState(0)
  // console.log(times);
  useEffect(() => {
    const watchTimes = localStorage.getItem("watchTime");
    getTimes(watchTimes);
  }, [times]);
  
  
  const btn1 = (mTime) => {
    const totalTime = time - mTime;
    localStorage.setItem("breakTime", totalTime);
    const breakTime = localStorage.getItem("breakTime")
    setUptime(breakTime)
    
  };
  const btn2 = (mTime) => {
    const totalTime = time - mTime;
    localStorage.setItem("breakTime", totalTime);
    const breakTime = localStorage.getItem("breakTime")
    setUptime(breakTime)
  };
  const btn3 = (mTime) => {
    const totalTime = time - mTime;
    localStorage.setItem("breakTime", totalTime);
    const breakTime = localStorage.getItem("breakTime")
    setUptime(breakTime)
  };

  useEffect(() => {
    const breaksTimes = localStorage.getItem("breakTime");
    setDisplayTime(breaksTimes);
  },[uptime])
  

  return (
    <div className="mt-10">
      <h2>Movie Watch Time</h2>
      <p className="mt-8">Time: {time}</p>
      <div className="space-x-2 mt-8">
        <button onClick={() => btn1(15)} className="btn">
          15
        </button>
        <button onClick={() => btn2(20)} className="btn">
          20
        </button>
        <button onClick={() => btn3(30)} className="btn">
          30
        </button>
      </div>
      <h2 className="mt-8">Break time</h2>
      <p>Total Time: {displayTime}</p>
    </div>
  );
};

export default ShowCart;
