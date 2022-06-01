import "reflect-metadata"; // necessary to TYPEORM
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.use(cors());
app.use(express.json());

app.use(routes);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(PORT, HOST);
console.log(`Server running | PORT = ${PORT} | HOST = ${HOST}`);