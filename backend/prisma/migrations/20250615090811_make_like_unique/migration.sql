/*
  Warnings:

  - A unique constraint covering the columns `[user_id,cookbook_id]` on the table `cookbook_likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,recipe_id]` on the table `recipe_likes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cookbook_likes_user_id_cookbook_id_key" ON "cookbook_likes"("user_id", "cookbook_id");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_likes_user_id_recipe_id_key" ON "recipe_likes"("user_id", "recipe_id");
