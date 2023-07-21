import React from 'react'
import { useMainContext } from '../context';
import { AiOutlinePlusCircle } from "react-icons/Ai";

export default function Todo() {
    const { text, setText, handleTodoInput, todo } = useMainContext();
    return (
        <div className='flex flex-col bg-[#24273d] w-[500px] h-[700px] justify-center items-center'>
            <h1>Todo</h1>
            <div className='flex w-[500px] h-[5rem] justify-around items-center gap-20 p-10 flex-col bg-red-600' >
                <button onClick={handleTodoInput} style={{ color: 'white' }}><AiOutlinePlusCircle /></button>
                <input type='text' value={text} placeholder='Create a new Todo' onChange={(e) => setText(e.target.value)} />
            </div>

            {todo.map((todo: string) => {
                return <h2>{todo}</h2>
            })}
        </div>
    )
}
