import express, { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { AppErorr } from './shared/infra/error/AppError';
import { ensureAuthentication } from './shared/infra/http/middlewares/ensureAuthentication';
import { errorMessage } from './shared/infra/http/middlewares/errorMessage';

const app = express();

app.use(express.json());

interface ICourse {
  id?: string;
  name: string;
  description: string;
  active: boolean;
}

const courses: ICourse[] = [];

app.use(ensureAuthentication);

app.post('/courses', (request, response) => {
  const { name, description } = request.body;

  const course: ICourse = {
    id: uuid(),
    name,
    description,
    active: true,
  };

  courses.push(course);

  return response.status(201).json(course);
});

app.get('/courses', (request, response) => {
  const { active } = request.query;

  let resultCourses: ICourse[];

  if (active !== 'true' && active !== 'false') {
    resultCourses = courses;
  } else {
    resultCourses = courses.filter((c) => String(c.active) === active);
  }

  const result = {
    courses: resultCourses,
  };

  return response.json(result);
});

app.get('/courses/:id', (request, response) => {
  const { id } = request.params;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    throw new AppErorr('Course not found!', 404);
  }

  return response.json(course);
});

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  const { name, description, active } = request.body;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    throw new AppErorr('Course not found!', 404);
  }

  Object.assign(course, {
    name,
    description,
    active,
  });

  return response.json(course);
});

app.delete('/courses/:id', (request, response) => {
  const { id } = request.params;

  const indexCourse = courses.findIndex((c) => c.id === id);

  if (indexCourse === -1) {
    throw new AppErorr('Course not found!', 404);
  }

  courses.splice(indexCourse, 1);

  return response.status(204).send();
});

app.use(errorMessage);

app.listen(3000, () => {
  console.log('Server is running!');
});
