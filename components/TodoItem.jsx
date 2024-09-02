"use client"
import { deleteTodo } from '@/server/actions'
// import { revalidateTag } from 'next/cache'

export default function TodoItem({todo}) {

    function handleDelete() {
        deleteTodo(todo.id)

        // fetch(`http://localhost:3000/api/todos?todoId=${todo.id}`, {
        //     method: "DELETE"
        // }).then(res => res.json())
        // .then(data => revalidateTag('todos'))
    }

    return (
        <li>
            <span> {todo.title} </span>
            <button className="text-red-400" onClick={handleDelete}> X </button>
        </li>
    )
}
