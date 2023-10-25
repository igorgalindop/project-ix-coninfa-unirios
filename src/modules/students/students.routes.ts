import { Router } from 'express';
import { StudentsController } from './StudentsController';

const studentsRoutes = Router();

const studentsController = new StudentsController();

studentsRoutes.post('/', studentsController.handleCreate);

studentsRoutes.get('/', studentsController.handleListAll);

studentsRoutes.delete('/:id', studentsController.handleRemove);

studentsRoutes.patch('/:id', studentsController.handleUpdate);

studentsRoutes.get('/:id', studentsController.handleFindById);

export { studentsRoutes };
