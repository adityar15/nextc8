import React from 'react'
import Button from './Button'
import { prisma } from '@/server/database'
import { revalidateTag } from 'next/cache'

export default function TodoForm() {

 async function addTodo(formData)
 {
    "use server"

    const data = await prisma.todo.create({
        data: {
            title: formData.get('title'),
            status: false
        }
    })

   revalidateTag('todos')
    // do some logic
 } 


  return (
    <form action={addTodo} className="flex items-center">
        <input name='title' placeholder='Enter a todo title' className='p-2 border border-gray-500 flex-grow' />
        <Button>Add Todo</Button>
    </form>
  )
}
