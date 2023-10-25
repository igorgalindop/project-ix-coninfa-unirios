import { Router } from 'express';
import { coursesRoutes } from '../../../../modules/courses/courses.routes';

const routes = Router();

routes.use('/courses', coursesRoutes);

export { routes };
