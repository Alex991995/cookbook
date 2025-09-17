/*
  Warnings:

  - Made the column `cookbook_id` on table `comment_cookbook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recipe_id` on table `comment_recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `cookbook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recipe_id` on table `cookbook` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cookbook_id` on table `cookbook_likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `cookbook_likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recipe_id` on table `recipe_likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `recipe_likes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "comment_cookbook" DROP CONSTRAINT "comment_cookbook_cookbook_id_fkey";

-- DropForeignKey
ALTER TABLE "comment_recipe" DROP CONSTRAINT "comment_recipe_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "cookbook" DROP CONSTRAINT "cookbook_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "cookbook" DROP CONSTRAINT "cookbook_user_id_fkey";

-- DropForeignKey
ALTER TABLE "cookbook_likes" DROP CONSTRAINT "cookbook_likes_cookbook_id_fkey";

-- DropForeignKey
ALTER TABLE "cookbook_likes" DROP CONSTRAINT "cookbook_likes_user_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe" DROP CONSTRAINT "recipe_user_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_likes" DROP CONSTRAINT "recipe_likes_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_likes" DROP CONSTRAINT "recipe_likes_user_id_fkey";

-- AlterTable
ALTER TABLE "comment_cookbook" ALTER COLUMN "cookbook_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "comment_recipe" ALTER COLUMN "recipe_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "cookbook" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "recipe_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "cookbook_likes" ALTER COLUMN "cookbook_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "recipe" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "recipe_likes" ALTER COLUMN "recipe_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_likes" ADD CONSTRAINT "recipe_likes_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_likes" ADD CONSTRAINT "recipe_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_recipe" ADD CONSTRAINT "comment_recipe_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookbook" ADD CONSTRAINT "cookbook_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookbook" ADD CONSTRAINT "cookbook_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookbook_likes" ADD CONSTRAINT "cookbook_likes_cookbook_id_fkey" FOREIGN KEY ("cookbook_id") REFERENCES "cookbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookbook_likes" ADD CONSTRAINT "cookbook_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_cookbook" ADD CONSTRAINT "comment_cookbook_cookbook_id_fkey" FOREIGN KEY ("cookbook_id") REFERENCES "cookbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
