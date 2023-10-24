import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { AppErorr } from '../../shared/error/AppError';

const coursesRoutes = Router();
const courses: ICourse[] = [];

interface ICourse {
  id?: string;
  name: string;
  description: string;
  active: boolean;
}

coursesRoutes.post('/courses', (request, response) => {
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

coursesRoutes.get('/courses', (request, response) => {
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

coursesRoutes.get('/courses/:id', (request, response) => {
  const { id } = request.params;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    throw new AppErorr('Course not found!', 404);
  }

  return response.json(course);
});

coursesRoutes.put('/courses/:id', (request, response) => {
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

coursesRoutes.delete('/courses/:id', (request, response) => {
  const { id } = request.params;

  const indexCourse = courses.findIndex((c) => c.id === id);

  if (indexCourse === -1) {
    throw new AppErorr('Course not found!', 404);
  }

  courses.splice(indexCourse, 1);

  return response.status(204).send();
});

export { coursesRoutes };
