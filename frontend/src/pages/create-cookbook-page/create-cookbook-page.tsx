import styles from './create-cookbook-page.module.css';
import { FiPlus } from 'react-icons/fi';

import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from 'components/button';
import ButtonTransparent from 'components/button-transparent';
import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { CreateCookbookSchema, type CreateCookbookType } from './zod-scheme/create-cookbook';
import { useGetRecipeByTitleQuery } from 'store/api/api';
import type { ArrayRecipe, Recipe } from 'types/user';

function CreateCookbookPage() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<CreateCookbookType>({
    mode: 'onBlur',
    resolver: zodResolver(CreateCookbookSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipes',
  });

  const [valueRecipe, setValueRecipe] = useState('');
  const { data: allRecipe } = useGetRecipeByTitleQuery(valueRecipe);
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);

  function addValueRecipeToAppend() {
    const recipe = allRecipe?.data.find(item => item.title === valueRecipe);
    if (recipe) {
      setSelectedRecipes(prevSate => [...prevSate, recipe]);
      append({ value: valueRecipe });
    }
  }

  const onSubmit: SubmitHandler<CreateCookbookType> = async data => {
    //   const { picture, ...body } = data;
    //   const { title, estimated_time, description } = body;
    //   const file = picture[0];
    //   const arrDirections = body.directions.map(item => item.value);
    //   const arrIngredients = body.ingredients.map(item => item.value);
    //   const dataForServer: CreateRecipeTypeForServer = Object.assign(
    //     {},
    //     {
    //       title,
    //       estimated_time,
    //       description,
    //       directions: arrDirections,
    //       ingredients: arrIngredients,
    //     },
    //   );
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('data', JSON.stringify(dataForServer));
    //   try {
    //     const response = await fetch('/api/recipe', {
    //       method: 'POST',
    //       body: formData,
    //     });
    //     await response.json();
    //   } catch (error) {
    //     console.error(error);
    //     if (error instanceof Error) {
    //       setError('title', {
    //         message: error.message,
    //       });
    //     }
    //   }
  };

  return (
    <section className="container mx-auto my-24">
      <h1 className="font-bold text-5xl mb-16">Create a new cookbook</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles['box-input']}>
          <h3 className={styles.title}>
            Cookbook title<span className="text-red-700">*</span>
          </h3>
          <input
            className={styles.input}
            placeholder="Title"
            type="text"
            {...register('title', { required: true })}
          />
          <p className="h-6 text-red-600">{errors.title?.message}</p>
        </div>
        <div>
          <h3 className={styles.title}>Cookbook picture</h3>
          <label htmlFor="picture" className={styles['custom-file-upload']}>
            <FiPlus /> Upload
          </label>
          <input
            id="picture"
            type="file"
            className="hidden"
            {...register('picture', { required: true })}
          />
          <p className="h-6 text-red-600">{errors.picture?.message}</p>
        </div>

        <div>
          <h3 className={styles.title}>Description</h3>
          <textarea
            placeholder="Description"
            className={`${styles.input} min-h-36`}
            {...register('description')}
          />
          <p className="h-6 text-red-600">{errors.description?.message}</p>
        </div>
        <div>
          <h3 className={styles.title}>Recipes</h3>
          <div className="relative">
            <input
              className={styles.input}
              value={valueRecipe}
              onChange={e => setValueRecipe(e.target.value)}
              type="text"
              list="recipe"
              placeholder="Recipe title"
            />
            <datalist id="recipe">
              {allRecipe?.data.map(item => (
                <option value={item.title} />
              ))}
            </datalist>
            <div className="absolute right-0 mr-2 top-1/6 ">
              <Button
                text="Add ingredient"
                maxWidth=""
                type="button"
                handleClick={addValueRecipeToAppend}
              />
            </div>
          </div>
          <p className="h-6 text-red-600">{errors.recipes?.message}</p>
          <ul className="flex flex-col gap-2">
            {fields.map((field, index) => (
              <li className="flex" key={field.id}>
                {field.value}
                <input
                  readOnly
                  className="outline-none"
                  key={field.id}
                  {...register(`recipes.${index}.value`)}
                />

                <BsX size={25} onClick={() => remove(index)} />
              </li>
            ))}
            {selectedRecipes.map(item => (
              <li>
                <img className="w-[125px] h-[95px] object-cover" src={item.image} alt="" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          {/* <ButtonTransparent text="Cancel" maxWidth="100px" handleClick={clearFields} /> */}
          <Button text="Save" type="submit" paddingX="0" disabled={!isValid} maxWidth="90px" />
        </div>
      </form>
    </section>
  );
}

export default CreateCookbookPage;
