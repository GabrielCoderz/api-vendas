import { Router, Response, Request } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json(
    {
      message: 'hello BRO!'
    }
  )
})

export default routes;