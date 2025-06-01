import React from 'react';
import Card from '../../ui/card/card';
import meal from '../../assets/meal.jpg';

function PopularCookbook() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className="text-4xl mt-24 mb-8">Most Popular Cookbooks</h2>
      <ul className='flex gap-8'>
        {arr.map(item => (
          <Card {...item} />
        ))}
      </ul>
    </section>
  );
}

export default PopularCookbook;

const arr = [
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreate: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreate: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreate: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreate: 'Jon',
    numberLikes: 233,
    numberComments: 333,
  },
];
