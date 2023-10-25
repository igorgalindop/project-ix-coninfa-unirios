import { Router } from 'express';
import { CoursesController } from './CoursesController';

const coursesRoutes = Router();

const coursesController = new CoursesController();

coursesRoutes.post('/', coursesController.handleCreate);

coursesRoutes.get('/', coursesController.handleListAll);

coursesRoutes.get('/:id', coursesController.handleFindById);

export { coursesRoutes };
