import { React, useState } from 'react'

export default function itemCounter() {

    const [count, setCount] = useState(1);
    const MIN = 1; 
    const MAX = 10;

    const handleAdd = () => {
        if (count < MAX){
            setCount(count + 1)
    }else{
        console.log("Ya llegaste al maximo")
    }
    }

    const handleSubstract = () => {
        if (count > MIN){
            setCount(count - 1)
    }else{
        console.log("Ya llegaste al minimo")
    }
    }

    

  return (
    <div className="flex items-center gap-4">
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={count === MAX}
        onClick ={handleAdd} >
            ➕
        </button>
        <span>{count}</span>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={count === MIN}
        onClick ={handleSubstract}>
            ➖
        </button>
    </div>
  )
}
