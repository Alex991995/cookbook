/*
  Warnings:

  - You are about to drop the column `recipe_id` on the `cookbook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cookbook" DROP COLUMN "recipe_id";

-- CreateTable
CREATE TABLE "_CookbookToRecipe" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CookbookToRecipe_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CookbookToRecipe_B_index" ON "_CookbookToRecipe"("B");

-- AddForeignKey
ALTER TABLE "_CookbookToRecipe" ADD CONSTRAINT "_CookbookToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "cookbook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CookbookToRecipe" ADD CONSTRAINT "_CookbookToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
