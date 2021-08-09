import { useEffect, useState } from "react";

function Timer ()  {
    
    const [seconds, setSeconds]= useState(0);

    useEffect (() => {
        const interval = setInterval(
            () => setSeconds(seconds+1),
            1000);
        return ()=> {clearInterval(interval)};
    },[seconds]);
 
    return (
            <>
                <h1>Timer App</h1>
                <div>Seconds Elapsed : {seconds}</div>
            </>
        )
}

export default Timer;