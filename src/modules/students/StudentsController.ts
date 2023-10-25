import { NextFunction, Request, Response } from 'express';
import { StudentsRepository } from './StudentsRepository';
import { AppErorr } from '../../shared/error/AppError';
import { Student } from '@prisma/client';

class StudentsController {
  async handleCreate(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const { name, age, courseId } = request.body;

    const studentsRepository = new StudentsRepository();

    let student: Student;

    try {
      student = await studentsRepository.create({
        name,
        age,
        courseId,
      });

      return response.status(201).json(student);
    } catch (err) {
      console.log(err);
      next(err);
    }
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

  async handleFindById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const studentsRepository = new StudentsRepository();

    const student = await studentsRepository.findById(id);

    return response.status(200).json(student);
  }
}

export { StudentsController };
