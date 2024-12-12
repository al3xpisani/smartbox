import express from "express"
import setRoutePaths from "./routes"
import "dotenv/config"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(cors())
const port = process.env.EXPRESS_PORT
setRoutePaths(app)

export const setBodyParser2Json = () => {
    return app.use(bodyParser.json())
}

// app.listen(port, () => {
//      console.log(`Express is listening at http://localhost:${port}`)
// })

export default app