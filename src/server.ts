import express, { NextFunction, Request, Response, response } from 'express';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(express.json());

interface ICourse {
  id?: string;
  name: string;
  description: string;
  active: boolean;
}

const courses: ICourse[] = [];
let access_token: string;

// Middlewares
function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization || authorization !== access_token) {
    return response.status(401).json({ error: 'Not authorized!' });
  }

  next();
}
//----------

app.get('/token', (request, response) => {
  access_token = uuid();

  return response.json({
    access_token,
  });
});

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
    return response.status(404).json({ error: 'Course not found!' });
  }

  return response.json(course);
});

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  const { name, description, active } = request.body;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return response.status(404).json({ error: 'Course not found!' });
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
    return response.status(404).json({ error: 'Course not found!' });
  }

  courses.splice(indexCourse, 1);

  return response.status(204).send();
});

app.listen(3000, () => {
  console.log('Server is running!');
});
