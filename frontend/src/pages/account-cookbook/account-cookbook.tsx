
import Card from 'features/cookbook/ui/card/card';
import meal from 'features/cookbook/assets/meal.jpg';

function AccountCookbook() {
  return (
    <div>
      <ul className="flex gap-8 flex-wrap ">
        {arr.map(item => (
          <Card {...item} />
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
