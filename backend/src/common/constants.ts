export const SALT = process.env.SALT ? +process.env.SALT : 10;

export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'mySecret',
  alg: process.env.JWT_ALG || 'HS384',
};
