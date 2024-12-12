import { Express, Request, Response } from 'express'
import routerDiagram from './diagrams/diagram'
import routerToken from './token/token'
const setRoutePaths = (app: Express) => {
    app.get('/', (req: Request, res: Response) => {
        res.send('Check README.md file to be aware of API Contract')
    })

    app.use('/api/token', routerToken)
    app.use('/api/diagrams', routerDiagram)
}
export default setRoutePaths
