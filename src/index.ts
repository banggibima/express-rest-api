import express from 'express';
import { createServer } from 'http';

import Todo from './routes/todo-route';

const app = express();
const port = 5000;

const main = async () => {
  await new Promise<void>((resolve) => {
    createServer(app).listen(port, resolve);
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/todos', Todo);

  console.log(`Endpoint: http://localhost:${port}`);
};

main();
