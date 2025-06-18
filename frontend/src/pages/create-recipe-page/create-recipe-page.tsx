import styles from './create-recipe-page.module.css';
import { FiPlus } from 'react-icons/fi';

import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateRecipeSchema, type CreateRecipeType } from './zod-scheme/create-recipe';
import Button from 'components/button';

import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { getArrMinutes } from 'common/constants';
import type { CreateRecipeTypeForServer } from 'types';
import { useNavigate } from 'react-router';
const arrMinutes = getArrMinutes();

function CreateRecipePage() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<CreateRecipeType>({
    mode: 'onBlur',
    resolver: zodResolver(CreateRecipeSchema),
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
  const navigate = useNavigate();
  const [valueIngredient, setValueIngredient] = useState('');
  const [valueDirection, setValueDirection] = useState('');

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

  const onSubmit: SubmitHandler<CreateRecipeType> = async data => {
    console.log(data);
    const { picture, ...body } = data;

    const { title, estimated_time, description } = body;
    const estimated_timeTypeNumber = +estimated_time.split(' ')[0];

    const file = picture[0];
    const arrDirections = body.directions.map(item => item.value);
    const arrIngredients = body.ingredients.map(item => item.value);

    const dataForServer: CreateRecipeTypeForServer = Object.assign(
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
    formData.append('file', file);
    formData.append('data', JSON.stringify(dataForServer));

    try {
      const response = await fetch('/api/recipe', {
        method: 'POST',
        body: formData,
      });

      const res = await response.json();
      navigate('/account/recipe', { replace: true });
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
    <section className="container mx-auto my-24">
      <h1 className="font-bold text-5xl mb-16">Create a new recipe</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles['box-input']}>
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
          <h3 className={styles.title}>Recipe picture</h3>
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
          <h3 className={styles.title}>Description</h3>
          <textarea
            placeholder="Description"
            className={`${styles.input} min-h-36`}
            {...register('description')}
          />
          <p className="h-6 text-red-600">{errors.description?.message}</p>
        </div>
        <div>
          <h3 className={styles.title}>Ingredients</h3>
          <div className="relative">
            <input
              className={styles.input}
              value={valueIngredient}
              onChange={e => setValueIngredient(e.target.value)}
              type="text"
              placeholder="Fourth ingredient"
            />

            <div className="absolute right-0 mr-2 top-1/6 ">
              <Button
                text="Add ingredient"
                maxWidth=""
                type="button"
                handleClick={addValueIngredientToAppend}
              />
            </div>
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
        <div className="flex justify-end">
          <Button text="Save" type="submit" paddingX="0"  maxWidth="90px" />
        </div>
      </form>
    </section>
  );
}

export default CreateRecipePage;
