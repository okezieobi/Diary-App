import express from 'express';
import bodyParser from 'body-parser';
import getAllRouter from './routes/getAll';
import getOneRouter from './routes/getOne';
import createOneRouter from './routes/createOne';
import updateOneRouter from './routes/updateOne';
import deleteOneRouter from './routes/deleteOne';


const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use('/v1', getAllRouter);
app.use('/v1', getOneRouter);
app.use('/v1', createOneRouter);
app.use('/v1', deleteOneRouter);
app.use('/v1', updateOneRouter);

export default app;
