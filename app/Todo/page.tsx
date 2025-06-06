'use client';

import { useState } from 'react';

export default function TodoPage() {
  const [tasks,setTasks]=useState<{text:string;completed:boolean}[]>([]);
  const [input,setInput]=useState('');

  const handleAdd=()=>{
    if(input){
      setTasks((prev)=>[...prev,{text:input,completed:false}]);
      setInput('');
    }
  };

  const toggleCheckbox=(index:number)=>{
    setTasks((prev)=>prev.map((task,i) =>
      i==index ? {...task,completed:!task.completed} : task
      )
    );
  };

  const handleDelete=(index:number)=>{
    setTasks((prev)=>prev.filter((_,i)=>i!=index));
  };

  return (
    <main className="text-center p-16">
      <h1 className="text-5xl mb-6">To-Do List</h1>

      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          className="border rounded-lg px-4 py-2 w-64"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="max-w-md mx-auto space-y-4">
        {tasks.map((task,index)=>(
          <li
            key={index}
            className="flex items-center justify-between bg-[#3b1e53] p-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={()=>toggleCheckbox(index)}
              />
              <span
                className={`text-lg ${task.completed ? 'line-through opacity-60' : ''}`}>
                {task.text}
              </span>
            </div>
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
