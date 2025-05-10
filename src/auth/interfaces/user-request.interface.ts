import { Request } from 'express';
import { JwtPayloadInterface } from './jwt-payload.interface';
export interface UserRequestInterface extends Request {
  user: JwtPayloadInterface;
}
