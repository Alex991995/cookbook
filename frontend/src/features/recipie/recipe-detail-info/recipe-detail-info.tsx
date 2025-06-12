import ReactionCounter from 'components/reaction-counter';
import React from 'react';
import type { Recipe } from 'types';

interface IRecipeDetailInfo {
  recipe?: Recipe;
}

function RecipeDetailInfo({ recipe }: IRecipeDetailInfo) {

  return (
    <div className="flex bg-white">
      <img
        className="w-[445px] h-[680px] object-cover justify-between"
        src={recipe?.image}
        alt="recipe-image"
      />
      <div className="w-full p-11 flex flex-col justify-between">
        <div>
          <h2 className='font-bold text-4xl'>{recipe?.title}</h2>
          <h3 className='text-primary text-[20px]'>{recipe?.user?.name}</h3>
        </div>
        <div>
          <h3 className='font-semibold text-2xl mb-2.5'>Description</h3>
          <p>{recipe?.description}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className='font-semibold text-2xl mb-2.5'>Directions</h3>
            <ul>
              {recipe?.directions.map((item, i) => (
                <li>
                <span className='font-bold'>Step {i + 1}</span>: <span className='text-secondary'>{item}</span>  
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-[0_1_50%]'>
            <h3 className='font-semibold text-2xl mb-2.5'>Ingredients</h3>
            <ul className="list-disc [&>li::marker]:text-primary">
              {recipe?.ingredients.map(item => (
                <li className="text-secondary">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  gap-9  items-baseline">
          <ReactionCounter
            views={recipe?.views || 0}
            comment={recipe?._count.comment || 0}
            likes={recipe?._count.likes || 0}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailInfo;
