import React from 'react'
import { useMainContext } from '../context';
import { AiOutlinePlusCircle } from "react-icons/Ai";

export default function Todo() {
    const { text, setText, handleTodoInput, todo } = useMainContext();
    return (
        <>
            <h1 className='text-white font-bold text-3xl'>TODO</h1>
            <div className='flex flex-col  h-[500px]  mt-8'>
                <div className='relative flex w-[500px]  bg-[#24273d]' >
                    <button onClick={handleTodoInput} className='absolute text-white left-2.5 bottom-2.5'><AiOutlinePlusCircle size='30' /></button>
                    <input className="shadow appearance-none border bg-[#24273d]  rounded w-full py-3 px-3 pl-20 h-14 text-white leading-tight focus:outline-none focus:shadow-outline" type='text' value={text} placeholder='Create a new Todo' onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='flex flex-col w-[500px] bg-[#24273d] mt-16 divide-y rounded divide-white'>
                    {todo.map((todo: string) => {
                        return <div className='flex h-[60px] p-4'>
                            <input type='radio' className='checked:bg-gray-900 checked:border-transparent mr-4 w-6 h-6' />
                            <span className='text-white'> {todo}</span>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
