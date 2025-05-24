/*
  Warnings:

  - The `recipe_id` column on the `cookbook` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "cookbook" DROP CONSTRAINT "cookbook_recipe_id_fkey";

-- AlterTable
ALTER TABLE "cookbook" DROP COLUMN "recipe_id",
ADD COLUMN     "recipe_id" TEXT[];
