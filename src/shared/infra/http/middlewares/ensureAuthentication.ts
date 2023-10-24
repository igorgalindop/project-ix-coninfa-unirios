import { NextFunction, Request, Response } from 'express';
import { AppErorr } from '../../../error/AppError';

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization || authorization !== '123456') {
    throw new AppErorr('Not authorized!', 401);
  }

  next();
}
