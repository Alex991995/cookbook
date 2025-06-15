import Button from 'components/button';
import ListComments from 'components/list-comments';
import RecipeDetailInfo from 'features/recipie/recipe-detail-info/recipe-detail-info';
import { useState } from 'react';
import { useParams } from 'react-router';
import {
  useAddLikeToRecipeMutation,
  useCreateCommentRecipeMutation,
  useGetAllCommentRecipeQuery,
  useGetUniqueRecipeByIDQuery,
} from 'store/api/api';

function SingleRecipe() {
  const { id } = useParams();
  const [createComment] = useCreateCommentRecipeMutation();
  const { data, refetch } = useGetUniqueRecipeByIDQuery(id || '');
  const { data: comments, refetch: refetchComments } = useGetAllCommentRecipeQuery(id || '');
  const [addLike] = useAddLikeToRecipeMutation();
  const [value, setValue] = useState('');

  const numberOfComments = data?._count.comment || 0;

  function handleClick() {
    createComment({ description: value, recipe_id: id! });
    setValue('');
    refetch();
    refetchComments();
  }


  function handleClickLike(recipe_id?: string) {
    if (recipe_id) {
      addLike(recipe_id);
      refetch();
    }
  }

  

  return (
    <section>
      <RecipeDetailInfo handleClickLike={handleClickLike} recipe={data} />
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 mt-24 mb-24 ">
          <h1 className="font-semibold text-4xl">Comments ({numberOfComments})</h1>
          <div className="flex w-full justify-between gap-3.5">
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              className="w-full bg-white rounded-lg p-2.5"
              type="text"
              placeholder="Express yourself..."
            />
            <Button text="Post" maxWidth="134px" color="black" handleClick={handleClick} />
          </div>
          <div>
            <ul className="flex flex-col gap-11">
              {comments?.data.map(item => (
                <ListComments
                  key={item.id}
                  createdAt={item.createdAt}
                  image={item.recipe.user.image}
                  name={item.recipe.user.name}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleRecipe;
