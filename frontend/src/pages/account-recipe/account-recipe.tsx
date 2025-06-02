import React from 'react';
import CardRecipes from '../../features/recipie/ui/card-recipes/card-recipes';
import meal from '../../features/cookbook/assets/meal.jpg';

function AccountRecipe() {
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-8 ">
        {arr.map(item => (
          <CardRecipes {...item} />
        ))}
      </ul>
    </div>
  );
}

export default AccountRecipe;

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo non ac eros, velit dapibus consequat vestibulum sapien pharetra. Bibendum vel sollicitudin at purus egestas tincidunt. Vulputate ac, ullamcorper etiam interdum vitae semper.';

const arr = [
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    description,
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
    description,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    numberLikes: 233,
    numberComments: 333,
    description,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
    numberLikes: 233,
    numberComments: 333,
    description,
  },
];
