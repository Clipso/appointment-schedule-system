import dotenv from 'dotenv';
import express, { Express } from 'express';
import rootRouter from './routes';
// import { errorMiddleware } from './middlewares/errors';

const app:Express = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', rootRouter);
// app.use(errorMiddleware);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});

