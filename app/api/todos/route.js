import { prisma } from "@/server/database"

export async function GET(request) {

  const data = await prisma.todo.findMany()
  // select * from Todo;

  return Response.json(data)
}


export async function DELETE(request) {

  const searchParams = request.nextUrl.searchParams
  const todoId = searchParams.get('todoId')


  const data = await prisma.todo.delete({
    where: {
      id: todoId
    }
  })

  // Delete from Todo where id = todoId;

  return Response.json(data)
}