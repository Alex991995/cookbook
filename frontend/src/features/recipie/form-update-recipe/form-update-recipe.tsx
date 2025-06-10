import type { Recipe, UpdateRecipeTypeForServer } from 'types';
import styles from './form-update-recipe.module.css';

import photo from 'assets/photo.png';
import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from 'components/button';

import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { getArrMinutes } from 'common/constants';

import { UpdateRecipeSchema, type UpdateRecipeType } from './zod-scheme/update-recipe';
const arrMinutes = getArrMinutes();

interface IFormUpdateRecipe {
  recipe: Recipe;
}

function FormUpdateRecipe({ recipe }: IFormUpdateRecipe) {
  const ingredientsObject = recipe.ingredients.map(item => ({ value: item }));
  const directionsObject = recipe.directions.map(item => ({ value: item }));
  const stringEstimated_time = recipe.estimated_time + ' min';

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<UpdateRecipeType>({
    mode: 'onBlur',
    resolver: zodResolver(UpdateRecipeSchema),
    defaultValues: {
      title: recipe.title,
      estimated_time: stringEstimated_time,
      description: recipe.description,
      ingredients: ingredientsObject,
      directions: directionsObject,
    },
  });

  const {
    fields: fieldsIngredients,
    append: appendIngredients,
    remove: removeIngredients,
  } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const {
    fields: fieldsDirections,
    append: appendDirections,
    remove: removeDirections,
  } = useFieldArray({
    control,
    name: 'directions',
  });

  const [valueIngredient, setValueIngredient] = useState('');
  const [valueDirection, setValueDirection] = useState('');

  function clearFields() {
    clearErrors();
    reset();
    removeDirections();
    removeIngredients();
  }

  function addValueIngredientToAppend() {
    if (valueIngredient.trim()) {
      appendIngredients({ value: valueIngredient });
      setValueIngredient('');
    }
  }

  function addValueDirectionToAppend() {
    if (valueDirection.trim()) {
      appendDirections({ value: valueDirection });
      setValueDirection('');
    }
  }

  const onSubmit: SubmitHandler<UpdateRecipeType> = async data => {
    console.log(data);
    const { picture, ...body } = data;

    const { title, estimated_time, description } = body;

    const estimated_timeTypeNumber = +estimated_time.split(' ')[0];

    const file = picture ? picture[0] : null;
    const arrDirections = body.directions?.map(item => item.value);
    const arrIngredients = body?.ingredients?.map(item => item.value);

    const dataForServer: UpdateRecipeTypeForServer = Object.assign(
      {},
      {
        title,
        estimated_time: estimated_timeTypeNumber,
        description,
        directions: arrDirections,
        ingredients: arrIngredients,
      },
    );

    const formData = new FormData();

    if (file) {
      formData.append('file', file);
    }
    formData.append('data', JSON.stringify(dataForServer));

    try {
      const response = await fetch(`/api/recipe/${recipe.id}`, {
        method: 'PUT',
        body: formData,
      });

      const res = await response.json();
      clearFields();
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
  console.log(errors);

  return (
    <section className="container mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <div className="ml-2.5">
            <h3 className={styles.title}>
              Recipe title<span className="text-red-700">*</span>
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
            <h3 className={styles.title}>Estimated time</h3>
            <select {...register('estimated_time')}>
              {arrMinutes.map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>

            <p className="h-6 text-red-600">{errors.estimated_time?.message}</p>
          </div>

          <div>
            <h3 className={styles.title}>Image</h3>
            <label className="relative flex">
              <input type="file" className="invisible w-0" {...register('picture')} />
              <img
                src={recipe.image}
                alt="user"
                className="w-[160px] h-[160px] object-cover rounded-[102px] brightness-50"
              />
              <img
                src={photo}
                alt="photo"
                className="absolute left-0 right-7 mx-auto w-fit bottom-[38%]"
              />
            </label>
            <p className="h-6 text-red-600">{errors.picture?.message}</p>
          </div>

          <div>
            <h3 className={styles.title}>Description</h3>
            <textarea
              placeholder="Description"
              className={`${styles.input}`}
              {...register('description')}
            />
            <p className="h-6 text-red-600">{errors.description?.message}</p>
          </div>

          <div className="flex justify-end">
            <Button text="Save" type="submit" paddingX="0" disabled={!isValid} maxWidth="90px" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className={styles.title}>Ingredients</h3>
            <div>
              <input
                className={styles.input}
                value={valueIngredient}
                onChange={e => setValueIngredient(e.target.value)}
                type="text"
                placeholder="Fourth ingredient"
              />

              <Button
                text="Add ingredient"
                maxWidth="200px"
                type="button"
                handleClick={addValueIngredientToAppend}
              />
            </div>
            <p className="h-6 text-red-600">{errors.ingredients?.message}</p>
            <ul className="flex flex-col gap-2">
              {fieldsIngredients.map((field, index) => (
                <li className="flex " key={field.id}>
                  <input
                    readOnly
                    className="outline-none w-full"
                    key={field.id}
                    {...register(`ingredients.${index}.value`)}
                  />

                  <BsX size={25} onClick={() => removeIngredients(index)} />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <h3 className={styles.title}>Directions</h3>

            <div>
              <input
                className={styles.input}
                value={valueDirection}
                onChange={e => setValueDirection(e.target.value)}
                type="text"
                placeholder="Directions"
              />

              <Button
                text="Add directions"
                maxWidth="200px"
                type="button"
                handleClick={addValueDirectionToAppend}
              />
            </div>

            <p className="h-6 text-red-600">{errors.directions?.message}</p>

            <ul className="flex flex-col gap-2">
              {fieldsDirections.map((field, index) => (
                <li className="flex " key={field.id}>
                  <input
                    readOnly
                    className="outline-none w-full"
                    key={field.id}
                    {...register(`directions.${index}.value`)}
                  />

                  <BsX size={25} onClick={() => removeDirections(index)} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 
        

        <div>
          <h3 className={styles.title}>Directions</h3>

          <div className="relative">
            <input
              className={styles.input}
              value={valueDirection}
              onChange={e => setValueDirection(e.target.value)}
              type="text"
              placeholder="Directions"
            />

            <div className="absolute right-0 mr-2 top-1/6 ">
              <Button
                text="Add directions"
                maxWidth=""
                type="button"
                handleClick={addValueDirectionToAppend}
              />
            </div>
          </div>

          <p className="h-6 text-red-600">{errors.directions?.message}</p>

          <ul className="flex flex-col gap-2">
            {fieldsDirections.map((field, index) => (
              <li className="flex " key={field.id}>
                <input
                  readOnly
                  className="outline-none w-full"
                  key={field.id}
                  {...register(`directions.${index}.value`)}
                />

                <BsX size={25} onClick={() => removeDirections(index)} />
              </li>
            ))}
          </ul>
        </div>
        */}
        {/* <div className="flex justify-end"> */}
        {/* disabled={!isValid} */}
        {/* <Button text="Save" type="submit" paddingX="0"  maxWidth="90px" /> */}
        {/* </div> */}
      </form>
    </section>
  );
}

export default FormUpdateRecipe;
