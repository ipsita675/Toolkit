'use client';

import { useEffect, useState } from 'react';

export default function StopwatchPage() {
  const [time,setTime]=useState({min:0,sec:0});
  const [isRunning,setIsRunning]=useState(false);
  const [laps,setLaps]=useState<{min:number; sec:number}[]>([]);

  useEffect(()=>{
    let interval:NodeJS.Timeout|null=null;

    if(isRunning){
      interval=setInterval(()=>{
        setTime(({min,sec})=>{
          if(sec==59){
            return{min:min+1,sec:0};
          }
          return {min,sec:sec+1};
        });
      },1000);
    }

    return ()=>{
      if(interval)clearInterval(interval);
    };
  },[isRunning]);

  const handleStart=()=>setIsRunning(true);
  const handleStop=()=>setIsRunning(false);
  const handleReset=()=>{
    setIsRunning(false);
    setTime({min:0,sec:0});
    setLaps([]);
  };
  const handleLap =()=>{
    if(isRunning)setLaps((prev)=>[...prev,time]);
  };

  const formatTime=(num:number)=>num.toString().padStart(2,'0');

  return (
    <main className="text-center p-16">
      <h1 className="text-5xl">Stopwatch</h1>

      <h2 className="text-3xl m-[1rem]">
        {formatTime(time.min)}:{formatTime(time.sec)}
      </h2>

      <div className="flex gap-4 justify-center flex-wrap">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>

      {laps.length>0 && (
        <div className="mt-4">
          <h2 className='bold text-xl'>Laps</h2>
          <ul className="p-0">
            {laps.map(({min,sec},index)=>(
              <li key={index}>
                Lap-{index+1}:  {formatTime(min)}:{formatTime(sec)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
