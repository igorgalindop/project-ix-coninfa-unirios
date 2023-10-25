import { Router } from 'express';
import { coursesRoutes } from '../../../../modules/courses/courses.routes';
import { studentsRoutes } from '../../../../modules/students/students.routes';

const routes = Router();

routes.use('/courses', coursesRoutes);
routes.use('/students', studentsRoutes);

export { routes };
