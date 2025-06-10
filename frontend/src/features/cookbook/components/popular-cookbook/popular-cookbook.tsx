import Card from '../../ui/card/card';
import ButtonSecondary from 'components/button-secondary';
import { useGetAllCookbooksQuery } from 'store/api/api';

function PopularCookbook() {
  const { data:allCookbook } = useGetAllCookbooksQuery();
  return (
    <section className="flex flex-col items-center gap-14 mb-5">
      <h2 className="text-4xl mt-24">Most Popular Cookbooks</h2>
      <ul className="flex gap-8 flex-wrap justify-center">
        {allCookbook?.data.map(item => (
          <Card width="215px" {...item} />
        ))}
      </ul>
      <ButtonSecondary text="Show More" maxWidth="169px" />
    </section>
  );
}

export default PopularCookbook;

