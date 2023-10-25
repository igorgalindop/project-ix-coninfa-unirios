import { Request, Response } from 'express';
import { StudentsRepository } from './StudentsRepository';

class StudentsController {
  async handleCreate(request: Request, response: Response): Promise<Response> {
    const { name, age, courseId } = request.body;

    const studentsRepository = new StudentsRepository();

    const student = await studentsRepository.create({
      name,
      age,
      courseId,
    });

    return response.status(201).json(student);
  }

  async handleListAll(request: Request, response: Response): Promise<Response> {
    const studentsRepository = new StudentsRepository();

    const students = await studentsRepository.listAll();

    const result = {
      students,
    };

    return response.status(201).json(result);
  }

  async handleRemove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const studentsRepository = new StudentsRepository();

    await studentsRepository.remove(id);

    return response.status(204).send();
  }

  async handleUpdate(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, age, courseId } = request.body;

    const studentsRepository = new StudentsRepository();

    const student = await studentsRepository.update({
      id,
      name,
      age,
      courseId,
    });

    return response.status(200).json(student);
  }
}

export { StudentsController };
