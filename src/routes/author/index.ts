import { Router } from "express"
import { prisma } from "../../lib/prisma"

export const authorRoutes = Router()

authorRoutes.post("/author", async (request, response) =>{
    const { name, email } = request.body
    const author = await prisma.author.create({
        data:{
            email,
            name
        }
    })
    return response.status(201).send({author})
})

authorRoutes.get("/author", async (request, response)=>{
    
    const author = await prisma.author.findMany()

    return response.status(200).send(author)
})

authorRoutes.delete("/author/:id", async (request, response) => {
        const { id } =  request.params

         await prisma.author.delete({
            where:{
                id,
            }
        })
        return response.status(200).send()
})

authorRoutes.get("/author/:id", async (request,response) =>{

    const { id } = request.params



    const authorToBooks =  await prisma.author.findMany({
        where: {
            id,
        },include:{
            book: true
        }
    })
    return response.status(200).send(authorToBooks)
})

authorRoutes.put("/author/:id", async (request, response) => {
    const { name, email } = request.body

    const { id } = request.params

    const updateAuthor = await prisma.author.update({

        data:{
            name,
            email,
        },
        where:{
            id,   
        },
    })
    return response.status(200).send(updateAuthor)

})








