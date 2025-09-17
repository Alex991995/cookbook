-- AlterTable
ALTER TABLE "cookbook_likes" ADD COLUMN     "number_likes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "recipe_likes" ADD COLUMN     "number_likes" INTEGER NOT NULL DEFAULT 0;
