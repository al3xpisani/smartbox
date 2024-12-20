import express, { Request, Response } from 'express'
// import { RequestHandler } from 'express'
import bodyParser from 'body-parser'
import {
    createDiagram,
    editDiagrams,
    listDiagrams,
    deleteDiagrams,
    listDiagramsById
} from '../../controllers/diagramController'
// import { checkValidToken } from '../../middleware/check-token'
import httpStatus from 'http-status'

const routerDiagram = express.Router()
// const midVerifyValidToken: RequestHandler = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     return checkValidToken(req, res, next)
// }

routerDiagram.post(
    '/',
    bodyParser.json(),
    async (req: Request, res: Response) => {
        try {
            const newCreatedDiagram = await createDiagram(req.body)
            res.status(httpStatus.CREATED).json({
                status: 'Diagram - Record created.',
                data: [newCreatedDiagram]
            })
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json({
                status: 'Error when creating new diagram ' + e
            })
        }
    }
)

routerDiagram.get('/', async (req: Request, res: Response) => {
    try {
        const allDiagrams = await listDiagrams()
        res.status(httpStatus.OK).json({
            status: 'Diagram - Listing ok.',
            data: allDiagrams
        })
    } catch (e) {
        res.status(httpStatus.BAD_REQUEST).json({
            status: 'Error when listing diagram ' + e
        })
    }
})

routerDiagram.get('/:diagramID', async (req: Request, res: Response) => {
    try {
        const { diagramID } = req.params
        const allDiagrams = await listDiagramsById('id', diagramID)
        res.status(httpStatus.OK).json({
            status: 'Diagram - Listing by ID ok.',
            data: allDiagrams
        })
    } catch (e) {
        res.status(httpStatus.BAD_REQUEST).json({
            status: 'Error when listing diagram ' + e
        })
    }
})

routerDiagram.delete(
    '/:diagramID',
    bodyParser.json(),
    async (req: Request, res: Response) => {
        try {
            const { diagramID } = req.params
            const responseRemove = await deleteDiagrams('id', diagramID)
            res.status(httpStatus.OK).json({
                status: 'Diagram - Record deleted.',
                data: [responseRemove]
            })
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json({
                status: 'Error when deleting diagram ' + e
            })
        }
    }
)

routerDiagram.put(
    '/:diagramID',
    bodyParser.json(),
    async (req: Request, res: Response) => {
        try {
            const { diagramID } = req.params
            const responseRemove = await editDiagrams('id', diagramID, req.body)
            res.status(httpStatus.NO_CONTENT).json(responseRemove)
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json({
                status: 'Error when deleting diagram ' + e
            })
        }
    }
)

export default routerDiagram
