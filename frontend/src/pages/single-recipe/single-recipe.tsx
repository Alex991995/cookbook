import RecipeDetailInfo from 'features/recipie/recipe-detail-info/recipe-detail-info';
import { useParams } from 'react-router';
import { useGetUniqueRecipeByIDQuery } from 'store/api/api';

function SingleRecipe() {
  const { id } = useParams();
  const { data } = useGetUniqueRecipeByIDQuery(id || '');

  return (
    <section>
      <RecipeDetailInfo recipe={data} />
    </section>
  );
}

export default SingleRecipe;
