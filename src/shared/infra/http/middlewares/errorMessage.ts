import { NextFunction, Request, Response } from 'express';
import { AppErorr } from '../../../error/AppError';

export function errorMessage(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppErorr) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error.' });
}
