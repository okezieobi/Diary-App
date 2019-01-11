import express from 'express';
import bodyParser from 'body-parser';
import getAll from './routes/getAll';
import getOne from './routes/getOne';
import createOne from './routes/createOne';
import updateOne from './routes/updateOne';
import deleteOne from './routes/deleteOne';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use('/v1/', getAll, getOne, createOne, updateOne, deleteOne);

export default app;
