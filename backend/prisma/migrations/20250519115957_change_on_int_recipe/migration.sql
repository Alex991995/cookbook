/*
  Warnings:

  - You are about to alter the column `views` on the `recipe` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `estimated_time` on the `recipe` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "recipe" ALTER COLUMN "views" SET DATA TYPE INTEGER,
ALTER COLUMN "estimated_time" SET DATA TYPE INTEGER;
