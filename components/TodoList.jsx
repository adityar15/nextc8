import React from 'react'

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
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
