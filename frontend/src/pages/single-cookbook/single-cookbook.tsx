import Button from 'components/button';
import Modal from 'components/modal';
import FormAddRecipeToMyCookbook from 'features/cookbook/components/form-add-recipe-to-my-cookbook/form-add-recipe-to-my-cookbook';

import ListComments from 'components/list-comments';
import CookbookDetailInfo from 'features/cookbook/components/cookbook-detail-info/cookbook-detail-info';
import CardRecipes from 'features/recipie/ui/card-recipes/card-recipes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  useAddExistedCookbookToUserMutation,
  useAddLikeToCookbookMutation,
  useAddViewsToCookbookMutation,
  useCreateCommentCookbookMutation,
  useGetAllCommentCookbookQuery,
  useGetAllUserCookbooksQuery,
  useGetUniqueCookbookByIDQuery,
} from 'store/api/api';
import type { Recipe } from 'types';

function SingleCookbook() {
  const { id } = useParams();
  const [addViews] = useAddViewsToCookbookMutation();
  const { data: userCookbooks } = useGetAllUserCookbooksQuery();
  const { data: cookbook, refetch: refetchCookbook } = useGetUniqueCookbookByIDQuery(id || '');
  const { data: comments, refetch: refetchComments } = useGetAllCommentCookbookQuery(id || '');
  const [createComment] = useCreateCommentCookbookMutation();
  const [addLike] = useAddLikeToCookbookMutation();
  const [addExistedCookbookToUser] = useAddExistedCookbookToUserMutation();
  const [value, setValue] = useState('');
  const [openModel, setOpenModel] = useState(false);
  const [recipeIDTooAddMyCookbook, setRecipeIDTooAddMyCookbook] = useState<string>('');

  const numberOfComments = cookbook?._count.commentCookbook || 0;

  function handleClick() {
    createComment({ description: value, cookbook_id: id! });
    setValue('');
    refetchCookbook();
    refetchComments();
  }

  function handleClickLike(cookbook_id?: string) {
    if (cookbook_id) {
      addLike(cookbook_id);
      refetchCookbook();
    }
  }

  function getCookbookToUser(id?: string) {
    if (id) {
      console.log(id)
      addExistedCookbookToUser(id);
    }
  }

  function handleClickOpenModel(recipe: Recipe) {
    setOpenModel(true);
    setRecipeIDTooAddMyCookbook(recipe.id);
  }

  useEffect(() => {
    addViews(id || '');
  }, [addViews, id]);

  return (
    <section className="container mx-auto">
      <CookbookDetailInfo
        data={cookbook}
        handleClickLike={handleClickLike}
        getCookbookToUser={getCookbookToUser}
      />
      <ul className="flex flex-col gap-8 mt-28">
        <h2 className="font-semibold text-4xl">Recipes</h2>
        {cookbook?.recipes.map(item => (
          <CardRecipes
            handleClickOpenModel={handleClickOpenModel}
            route={location.pathname}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
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
                image={item.cookbook.user.image}
                name={item.cookbook.user.name}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
      <Modal onClose={() => setOpenModel(false)} isOpened={openModel}>
        <FormAddRecipeToMyCookbook recipe_id={recipeIDTooAddMyCookbook} cookbooks={userCookbooks} />
      </Modal>
    </section>
  );
}

export default SingleCookbook;
