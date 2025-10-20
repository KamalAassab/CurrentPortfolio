"use client";
import { useState, useEffect } from "react";
import { monaSans } from "../fonts/monaSans";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
      <span className={`${monaSans.className} text-[#e4ded7] text-xl font-bold tracking-wider`}>
        {formatTime(time)}
      </span>
    </div>
  );
};

export default DigitalClock;
