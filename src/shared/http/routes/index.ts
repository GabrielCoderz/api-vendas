import productsRouter from '@modules/products/routes/products.routes';
import { Router, Response, Request } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req: Request, res: Response) => {
  return res.json(
    {
      message: 'hello BRO!'
    }
  )
})

export default routes;