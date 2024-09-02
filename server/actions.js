"use server"

import { revalidateTag } from "next/cache"
import { prisma } from "./database"


export async function deleteTodo(todoId)
{
    
    const data = await prisma.todo.delete({
        where: {
            id: todoId
        }
    })
    
    // Delete from Todo where id = todoId;

    revalidateTag('todos')

}