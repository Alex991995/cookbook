import path from 'node:path';
import { __dirname } from '../../__dirname';
import dotenv from 'dotenv';

dotenv.config();

export const SALT = process.env.SALT ? +process.env.SALT : 10;
export const uploadsRecipesPath = path.join(__dirname, '/uploads/recipes');

export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'mySecret',
  alg: process.env.JWT_ALG || 'HS384',
};
