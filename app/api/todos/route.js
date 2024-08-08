import { prisma } from "@/server/database"

export async function GET(request) {
 
    const data = await prisma.todo.findMany()
    // select * from Todo;
   
    return Response.json(data)
  }