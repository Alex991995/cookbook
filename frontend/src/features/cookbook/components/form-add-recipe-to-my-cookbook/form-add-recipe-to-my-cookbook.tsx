import Button from 'components/button';
import { useState } from 'react';
import { useAddRecipeToMyCookbookMutation } from 'store/api/api';
import type { ArrayCookbook, Cookbook } from 'types';

interface IFormAddRecipeToMyCookbook {
  recipe_id: string;
  cookbooks?: ArrayCookbook;
}

function FormAddRecipeToMyCookbook({ recipe_id, cookbooks }: IFormAddRecipeToMyCookbook) {
  const [chosenCookbook, setChosenCookbook] = useState<Cookbook | undefined>(undefined);
  const [addRecipeID] = useAddRecipeToMyCookbookMutation();

  function handleClickCall() {
    if (chosenCookbook) {
      addRecipeID({ cookbook_id: chosenCookbook.id, recipesID: recipe_id });
    }
  }
  return (
    <div className="w-[300px] h-[640px] flex flex-col justify-between h-100%">
      <ul className="flex flex-col gap-3 items-center ">
        {cookbooks?.data.map(item => (
          <li key={item.id} onClick={() => setChosenCookbook(item)}>
            <h3 className={` ${chosenCookbook?.id === item.id && 'bg-blue-400'}`}>{item.title}</h3>
            <img className="w-19" src={item.image} alt="image" />
          </li>
        ))}
      </ul>
      {/* <button onClick={handleClickCall}>Add Recipe To My Cookbook</button> */}
      <Button
        text="Add Recipe To My Cookbook"
        maxWidth="100%"
        color="black"
        handleClick={handleClickCall}
      />
    </div>
  );
}

export default FormAddRecipeToMyCookbook;
