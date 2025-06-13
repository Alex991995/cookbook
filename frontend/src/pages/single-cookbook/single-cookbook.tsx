import CookbookDetailInfo from 'features/cookbook/components/cookbook-detail-info/cookbook-detail-info';
import CardRecipes from 'features/recipie/ui/card-recipes/card-recipes';
import { useParams } from 'react-router';
import { useGetUniqueCookbookByIDQuery } from 'store/api/api';

function SingleCookbook() {
  const { id } = useParams();
  const { data: cookbook } = useGetUniqueCookbookByIDQuery(id || '');
  console.log(cookbook?.recipes);
  return (
    <section className="container mx-auto">
      <CookbookDetailInfo data={cookbook} />
      <ul className='flex flex-col gap-8'>
        {cookbook?.recipes.map(item => (
          <CardRecipes route={location.pathname} key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default SingleCookbook;
