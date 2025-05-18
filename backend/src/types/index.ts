import * as jose from 'jose';

export interface IResultPayload extends jose.JWTPayload {
  email: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      userEmail: string;
    }
  }
}