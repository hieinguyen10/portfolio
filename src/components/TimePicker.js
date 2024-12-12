
import React, { useEffect, useState } from 'react'

const TimePicker = () => {
    const [time,setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    },[]);

    const formatTime = () => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    }
  return (
    <div>{formatTime()}</div>
  )
}

export default TimePicker