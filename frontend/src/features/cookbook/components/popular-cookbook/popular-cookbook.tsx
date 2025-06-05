
import Card from '../../ui/card/card';
import meal from '../../assets/meal.jpg';
import ButtonSecondary from 'components/button-secondary';

function PopularCookbook() {
  return (
    <section className='flex flex-col items-center gap-14 mb-5'>
      <h2 className="text-4xl mt-24">Most Popular Cookbooks</h2>
      <ul className='flex gap-8 flex-wrap justify-center'>
        {arr.map(item => (
          <Card width='215px' {...item} />
        ))}
      </ul>
      <ButtonSecondary text='Show More' maxWidth='169px'/>
    </section>
  );
}

export default PopularCookbook;

const arr = [
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
];
