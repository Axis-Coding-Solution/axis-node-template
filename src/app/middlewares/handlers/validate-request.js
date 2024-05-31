import { validationResult } from 'express-validator';

export function validateRequest(req) {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const extractedErrors = errors.array().map((err) => ({
    [err.path]: err.msg,
  }));

  return res.status(422).json({
    errors: extractedErrors,
  });
}
