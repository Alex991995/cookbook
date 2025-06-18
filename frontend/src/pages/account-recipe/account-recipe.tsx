import Modal from 'components/modal';
import FormUpdateRecipe from 'features/recipie/form-update-recipe/form-update-recipe';
import CardRecipes from 'features/recipie/ui/card-recipes/card-recipes';
import { useState } from 'react';
import { useLocation } from 'react-router';

import { useDeleteRecipeMutation, useGetAllUserRecipesQuery } from 'store/api/api';
import type { Recipe } from 'types';

function AccountRecipe() {
  const { data: recipes } = useGetAllUserRecipesQuery();
  const [deleteRecipe] = useDeleteRecipeMutation();
  const [openModel, setOpenModel] = useState(false);
  const [recipeForUpdate, setRecipeForUpdate] = useState<Recipe>();
  const location = useLocation();

  function updateRecipe(recipe: Recipe) {
    setOpenModel(true);
    setRecipeForUpdate(recipe);
  }

  function getIdForDelete(id?: string) {
    if (id) {
      deleteRecipe(id);
    }
  }

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-8 ">
        {recipes?.data.map(item => (
          <CardRecipes
            route={location.pathname}
            updateRecipe={updateRecipe}
            getIdForDelete={getIdForDelete}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
      <Modal onClose={() => setOpenModel(false)} isOpened={openModel}>
        <FormUpdateRecipe recipe={recipeForUpdate!} />
      </Modal>
    </div>
  );
}

export default AccountRecipe;
