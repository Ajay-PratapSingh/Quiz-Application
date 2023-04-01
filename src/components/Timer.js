import React, { useEffect, useState } from 'react'

export default function Timer(props) {
    const [seconds, setSeconds] = useState(props.time*60);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);

  return (
    <div>
        {seconds>0 && <h1>Timer:{Math.floor(seconds/60)}:{seconds%60}</h1>}
        {seconds === 0 && <h1>Time is up</h1>}
    </div>

   
  )
}
