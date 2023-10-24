import { Router } from 'express';
import { coursesRoutes } from '../../../../modules/courses/courses.routes';

const routes = Router();

routes.use(coursesRoutes);

export { routes };
