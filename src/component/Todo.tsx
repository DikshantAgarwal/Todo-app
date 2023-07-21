import React from 'react'
import { useMainContext } from '../context'

export default function Todo() {
    const { text, setText, handleTodoInput, todo } = useMainContext();
    return (
        <div className='flex'>
            <div>Todo</div>
            <input type='text' value={text} placeholder='Create a new Todo' onChange={(e) => setText(e.target.value)} />
            <button onClick={handleTodoInput}>Submit</button>
            {todo.map((todo: string) => {
                return <h2>{todo}</h2>
            })}
        </div>
    )
}
