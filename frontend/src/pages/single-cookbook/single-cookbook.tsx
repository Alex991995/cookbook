import Button from 'components/button';
import ListComments from 'components/list-comments';
import CookbookDetailInfo from 'features/cookbook/components/cookbook-detail-info/cookbook-detail-info';
import CardRecipes from 'features/recipie/ui/card-recipes/card-recipes';
import { useState } from 'react';
import { useParams } from 'react-router';
import {
  useAddLikeToCookbookMutation,
  useCreateCommentCookbookMutation,
  useGetAllCommentCookbookQuery,
  useGetUniqueCookbookByIDQuery,
} from 'store/api/api';

function SingleCookbook() {
  const { id } = useParams();
  const { data: cookbook, refetch: refetchCookbook } = useGetUniqueCookbookByIDQuery(id || '');
  const { data: comments, refetch: refetchComments } = useGetAllCommentCookbookQuery(id || '');
  const [createComment] = useCreateCommentCookbookMutation();
  const [addLike] = useAddLikeToCookbookMutation()
  const [value, setValue] = useState('');

  const numberOfComments = cookbook?._count.commentCookbook || 0;

  function handleClick() {
    createComment({ description: value, cookbook_id: id! });
    setValue('');
    refetchCookbook();
    refetchComments();
  }
  console.log(cookbook)

   function handleClickLike(cookbook_id?: string) {
    if (cookbook_id) {
      addLike(cookbook_id);
      refetchCookbook();
    }
  }

  return (
    <section className="container mx-auto">
      <CookbookDetailInfo data={cookbook} handleClickLike={handleClickLike}/>
      <ul className="flex flex-col gap-8 mt-28">
        <h2 className="font-semibold text-4xl">Recipes</h2>
        {cookbook?.recipes.map(item => (
          <CardRecipes route={location.pathname} key={item.id} {...item} />
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
    </section>
  );
}

export default SingleCookbook;
