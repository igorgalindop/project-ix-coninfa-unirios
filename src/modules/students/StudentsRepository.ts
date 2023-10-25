import { PrismaClient, Student } from '@prisma/client';
import { AppErorr } from '../../shared/error/AppError';

interface ICreateStudentDTO {
  name: string;
  age?: number;
  courseId: string;
}

interface IUpdateStudentDTO {
  id: string;
  name?: string;
  age?: number;
  courseId?: string;
}

class StudentsRepository {
  constructor(private prisma = new PrismaClient()) {}

  async create({ name, age, courseId }: ICreateStudentDTO): Promise<Student> {
    if (!name) {
      throw new AppErorr('Name is required');
    }

    const student = await this.prisma.student.create({
      data: {
        name,
        age,
        courseId,
      },
    });

    return student;
  }

  async listAll(): Promise<Student[]> {
    const students = await this.prisma.student.findMany();

    return students;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.student.delete({
      where: {
        id,
      },
    });
  }

  async update({
    id,
    name,
    age,
    courseId,
  }: IUpdateStudentDTO): Promise<Student> {
    const student = await this.prisma.student.update({
      where: {
        id,
      },
      data: {
        name,
        age,
        courseId,
      },
    });

    return student;
  }

  async findById(id: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({
      where: {
        id,
      },
      include: {
        course: true,
      },
    });

    return student;
  }
}

export { StudentsRepository };
