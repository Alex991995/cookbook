/*
  Warnings:

  - You are about to drop the column `number_likes` on the `cookbook_likes` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `cookbook_likes` table. All the data in the column will be lost.
  - You are about to drop the column `number_likes` on the `recipe_likes` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `recipe_likes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cookbook_likes" DROP COLUMN "number_likes",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "recipe_likes" DROP COLUMN "number_likes",
DROP COLUMN "updated_at";
