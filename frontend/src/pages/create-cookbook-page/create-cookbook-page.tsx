import styles from './create-cookbook-page.module.css';
import { FiPlus } from 'react-icons/fi';

import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from 'components/button';
import ButtonTransparent from 'components/button-transparent';
import { useState } from 'react';
import { CreateCookbookSchema, type CreateCookbookType } from './zod-scheme/create-cookbook';
import { useGetAllRecipesQuery } from 'store/api/api';
import type { Recipe } from 'types';
import Select, { type SingleValue } from 'react-select';

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
    name: 'recipesIDs',
  });

  const { data: allRecipe } = useGetAllRecipesQuery();
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const options = allRecipe?.data.map(item => ({ value: item.title, label: item.title }));

  function handleSelectChange(newValue: SingleValue<{ value: string; label: string }>) {
    if (newValue) {
      const recipe = allRecipe?.data.find(item => item.title === newValue.value);

      if (recipe) {
        setSelectedRecipes(prevSate => [...prevSate, recipe]);
        append({ id: recipe.id });
      }
    }
  }

  function clearFields() {
    clearErrors();
    reset();
    remove();
  }

  const onSubmit: SubmitHandler<CreateCookbookType> = async data => {
    console.log(data);
    const { picture, ...body } = data;
    const file = picture[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(body));
    try {
      const response = await fetch('/api/cookbook', {
        method: 'POST',
        body: formData,
      });
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError('title', {
          message: error.message,
        });
      }
    }
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
            <Select options={options} onChange={handleSelectChange} isClearable />
          </div>
          <p className="h-6 text-red-600">{errors.recipesIDs?.message}</p>
          <ul className="flex flex-col gap-2">
            {fields.map((field, index) => {
              const recipe = selectedRecipes[index];

              return (
                <li className={styles['card-recipe']} key={field.id}>
                  <div className="flex flex-1 bg-white p-3.5 gap-4">
                    <img
                      className="w-[125px] h-[95px] object-cover rounded-2xl"
                      src={recipe.image}
                      alt="recipe-image"
                    />
                    <div>
                      <input
                        readOnly
                        className="outline-none hidden"
                        key={field.id}
                        {...register(`recipesIDs.${index}.id`)}
                      />
                      <h2>{recipe.title}</h2>
                      <p>{recipe.description}</p>
                    </div>
                  </div>
                  <button className="basis-44 cursor-pointer" onClick={() => remove(index)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-end">
          <ButtonTransparent text="Cancel" maxWidth="100px" handleClick={clearFields} />
          <Button text="Save" type="submit" paddingX="0" disabled={!isValid} maxWidth="90px" />
        </div>
      </form>
    </section>
  );
}

export default CreateCookbookPage;
