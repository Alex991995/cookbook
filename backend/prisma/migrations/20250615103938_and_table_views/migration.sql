/*
  Warnings:

  - You are about to drop the column `views` on the `cookbook` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cookbook" DROP COLUMN "views";

-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "views";

-- CreateTable
CREATE TABLE "views_recipe" (
    "user_id" TEXT NOT NULL,
    "recipe_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "views_cookbook" (
    "user_id" TEXT NOT NULL,
    "cookbook_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "views_recipe_user_id_recipe_id_key" ON "views_recipe"("user_id", "recipe_id");

-- CreateIndex
CREATE UNIQUE INDEX "views_cookbook_user_id_cookbook_id_key" ON "views_cookbook"("user_id", "cookbook_id");

-- AddForeignKey
ALTER TABLE "views_recipe" ADD CONSTRAINT "views_recipe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views_recipe" ADD CONSTRAINT "views_recipe_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views_cookbook" ADD CONSTRAINT "views_cookbook_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views_cookbook" ADD CONSTRAINT "views_cookbook_cookbook_id_fkey" FOREIGN KEY ("cookbook_id") REFERENCES "cookbook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
