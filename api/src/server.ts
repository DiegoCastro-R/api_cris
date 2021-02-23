import 'reflect-metadata';
import express from 'express';

import './database';
import routes from './routes';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.get('/', async (request, response) => {
  response.json('Bem vindo a API do Cris !!! =D');
});

const DateNow = Date().toString();
app.listen(process.env.PORT, () => {
  console.log('⌚ Server starting');
  console.log(
    `🚀 Server started on ${process.env.HOST}${process.env.PORT} at ${DateNow}`,
  );
});
