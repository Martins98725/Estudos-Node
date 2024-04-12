import { app } from "./app";
import { prisma } from "./lib/prisma"; 
import { authorRoutes } from "./routes/author";
import { bookRoutes } from "./routes/book";


const server = app.listen(3333, () => console.log("HTTP Server Running😊"))


app.use(authorRoutes)
app.use(bookRoutes)

process.on("SIGINT", () => {
    server.close()
    console.log("app encerrado :/")
})

