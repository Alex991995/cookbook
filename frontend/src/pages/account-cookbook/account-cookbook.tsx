import Card from 'features/cookbook/ui/card/card';
import meal from 'features/cookbook/assets/meal.jpg';

function AccountCookbook() {
  return (

    <div className='w-full'>
      <ul className="grid gap-4 justify-items-center grid-cols-[repeat(auto-fill,_minmax(310px,_1fr))] ">
        {arr.map(item => (
          <Card width="310px" {...item} />
        ))}
      </ul>
    </div>
  );
}

export default AccountCookbook;

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
