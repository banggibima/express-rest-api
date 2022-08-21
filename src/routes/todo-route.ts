import { Router } from 'express';

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/todo-controller';

let Todo: Router;

Todo = Router();

Todo.route('').get(index);
Todo.route('').post(create);
Todo.route('/:id').get(show);
Todo.route('/:id').put(update);
Todo.route('/:id').delete(destroy);

export default Todo;
