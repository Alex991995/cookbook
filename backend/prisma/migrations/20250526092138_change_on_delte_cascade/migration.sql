-- DropForeignKey
ALTER TABLE "cookbook_likes" DROP CONSTRAINT "cookbook_likes_cookbook_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_likes" DROP CONSTRAINT "recipe_likes_recipe_id_fkey";

-- AddForeignKey
ALTER TABLE "recipe_likes" ADD CONSTRAINT "recipe_likes_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookbook_likes" ADD CONSTRAINT "cookbook_likes_cookbook_id_fkey" FOREIGN KEY ("cookbook_id") REFERENCES "cookbook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
