import Button from 'components/button';
import RecipeDetailInfo from 'features/recipie/recipe-detail-info/recipe-detail-info';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useCreateRecipePostMutation, useGetUniqueRecipeByIDQuery } from 'store/api/api';

function SingleRecipe() {
  const { id } = useParams();
  const [createPost, result] = useCreateRecipePostMutation();
  const { data } = useGetUniqueRecipeByIDQuery(id || '');
  const [value, setValue] = useState('');

  const numberOfComments = data?._count.comment || 0;

  function handleClick() {
    createPost({ description: value, recipe_id: id! });
  }
  console.log(result)

  return (
    <section>
      <RecipeDetailInfo recipe={data} />
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 mt-24">
          <h1 className="font-semibold text-4xl">Comments ({numberOfComments})</h1>
          <div className="flex w-full justify-between gap-3.5">
            <input
              onChange={e => setValue(e.target.value)}
              className="w-full bg-white rounded-lg p-2.5"
              type="text"
              placeholder="Express yourself..."
            />
            <Button text="Post" maxWidth="134px" color="black" handleClick={handleClick} />
          </div>
          <div>Comments</div>
        </div>
      </div>
    </section>
  );
}

export default SingleRecipe;
