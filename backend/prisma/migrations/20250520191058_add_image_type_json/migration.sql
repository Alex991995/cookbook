/*
  Warnings:

  - Changed the type of `image` on the `cookbook` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `image` on the `recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cookbook" DROP COLUMN "image",
ADD COLUMN     "image" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "image",
ADD COLUMN     "image" JSONB NOT NULL;
