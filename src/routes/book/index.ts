import { Router } from "express";
import { prisma } from "../../lib/prisma";

export const bookRoutes = Router()

bookRoutes.post("/book", async (request, response) =>{
    const { title, description, authorId } = request.body

    const book = await prisma.book.create({
        data:{
            title,
            description,
            authorId
        }
    })
    return response.status(201).send(book)
})

bookRoutes.get("/book", async (request, response) =>{
    const book = await prisma.book.findMany()

    return response.status(201).send(book)
})

bookRoutes.put("/book/:id", async (request, response) =>{
    const { title, description } = request.body

    const { id } = request.params

    const updateBook = await prisma.book.update({
        data: {
            title,
            description,     
        },
        where:{
            id
        }
    })

    return response.status(200).send(updateBook)
})

bookRoutes.get("/book/:id", async (request,response) =>{
    const { id } = request.params

    const findeOneBook = await prisma.book.findMany({
        where: {
            id,
        },
    })

    return response.status(200).send(findeOneBook)
})

