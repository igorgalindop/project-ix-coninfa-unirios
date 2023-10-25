import { Request, Response } from 'express';
import { CoursesRepository } from './CoursesRepository';

class CoursesController {
  async handleCreate(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const coursesRepository = new CoursesRepository();

    const course = await coursesRepository.create({
      name,
      description,
    });

    return response.status(201).json(course);
  }

  async handleListAll(request: Request, response: Response): Promise<Response> {
    const coursesRepository = new CoursesRepository();

    const courses = await coursesRepository.listAll();

    const result = {
      courses,
    };

    return response.status(201).json(result);
  }

  async handleFindById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const coursesRepository = new CoursesRepository();

    const course = await coursesRepository.findById(id);

    return response.status(201).json(course);
  }
}

export { CoursesController };
