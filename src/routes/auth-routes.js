import { AsyncTryCatch, router as AuthRouter } from '@/utils';
import { validateRequest } from '@/app/middlewares/handlers';
import { authValidators } from '@/app/middlewares/validators';
import { login, register } from '@/app/controllers';

const url = '/users';
const appendUrl = (segment) => `${url}/${segment}`;

AuthRouter.post(appendUrl('register'), AsyncTryCatch(register));

AuthRouter.post(
  appendUrl('login'),
  authValidators.login, // validation schema
  validateRequest, // common middleware for validating schema
  AsyncTryCatch(login)
);

export default AuthRouter;
