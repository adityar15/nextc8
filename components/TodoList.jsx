import React from 'react'
import TodoItem from './TodoItem'




export default async function TodoList() {

    const response = await fetch('http://localhost:3000/api/todos',{
        method: "GET",
        next: {
            tags: ['todos']
        }
    })

    const todos = await response.json()


    return (
        <div>
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))
                }
            </ul>
        </div>
    )
}
