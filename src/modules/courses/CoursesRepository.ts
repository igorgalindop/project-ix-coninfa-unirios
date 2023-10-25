import { Course, PrismaClient } from '@prisma/client';

interface ICreateCourseDTO {
  name: string;
  description?: string;
}

class CoursesRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ name, description }: ICreateCourseDTO): Promise<Course> {
    const course = await this.prisma.course.create({
      data: {
        name,
        description,
      },
    });

    return course;
  }

  async listAll(): Promise<Course[]> {
    const courses = await this.prisma.course.findMany();

    return courses;
  }
}

export { CoursesRepository };
