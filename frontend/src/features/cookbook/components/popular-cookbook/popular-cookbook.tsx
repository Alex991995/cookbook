import Card from '../../ui/card/card';
import ButtonSecondary from 'components/button-secondary';
import { useNavigate } from 'react-router';
import { useGetPopularCookbooksQuery } from 'store/api/api';

//  margin-top: 10px;
//  display: grid;
//  grid-template-columns: repeat(auto-fill, 350px);
//  gap: 10px

function PopularCookbook() {
  const { data: allCookbook } = useGetPopularCookbooksQuery();
  const navigate = useNavigate()
  return (
    <section className="flex flex-col items-center gap-14 mb-5 container mx-auto">
      <h2 className="text-4xl mt-24">Most Popular Cookbooks</h2>
      <ul className="w-full grid grid-cols-[repeat(auto-fit,_350px)] mt-2.5 justify-center gap-3">
        {allCookbook?.data.map(item => (
          <Card key={item.id}  {...item} />
        ))}
      </ul>
      <ButtonSecondary handleClick={() =>navigate('/cookbook')} text="Show More" maxWidth="169px" />
    </section>
  );
}

export default PopularCookbook;
