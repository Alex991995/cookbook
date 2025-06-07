/*
  Warnings:

  - You are about to drop the column `direction` on the `recipe` table. All the data in the column will be lost.
  - The `ingredients` column on the `recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "direction",
ADD COLUMN     "directions" TEXT[],
DROP COLUMN "ingredients",
ADD COLUMN     "ingredients" TEXT[];
