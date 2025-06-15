import Modal from 'components/modal';
import FormUpdateRecipe from 'features/recipie/form-update-recipe/form-update-recipe';
import CardRecipes from 'features/recipie/ui/card-recipes/card-recipes';
import { useState } from 'react';
import { useLocation } from 'react-router';

import { useGetAllUserRecipesQuery } from 'store/api/api';
import type { Recipe } from 'types';

function AccountRecipe() {
  const { data: recipes } = useGetAllUserRecipesQuery();
  const [openModel, setOpenModel] = useState(false);
  const [recipeForUpdate, setRecipeForUpdate] = useState<Recipe>();
   const location = useLocation();

console.log(recipes)
  function updateRecipe(recipe: Recipe) {
    setOpenModel(true);
    setRecipeForUpdate(recipe);
  }

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-8 ">
        {recipes?.data.map(item => (
          <CardRecipes route={location.pathname}  updateRecipe={updateRecipe} key={item.id} {...item} />
        ))}
      </ul>
      <Modal onClose={() => setOpenModel(false)} isOpened={openModel}>
        <FormUpdateRecipe recipe={recipeForUpdate!} />
      </Modal>
    </div>
  );
}

export default AccountRecipe;
