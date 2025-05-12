import { Request } from 'express';
import { IJwtPayload } from './jwt-payload.interface';
export interface IUserRequest extends Request {
  user: IJwtPayload;
}
