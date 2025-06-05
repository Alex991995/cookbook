import styles from './create-recipe-page.module.css';
import { FiPlus } from 'react-icons/fi';

import { useForm, useFieldArray, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateRecipeSchema, type CreateRecipeType } from './zod-scheme/create-recipe';
import Button from 'components/button';
import ButtonTransparent from 'components/button-transparent';
import { useState } from 'react';
import { BsX } from 'react-icons/bs';

function CreateRecipePage() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    clearErrors,
    // setError,
    formState: { errors, isValid },
  } = useForm<CreateRecipeType>({
    mode: 'onBlur',
    resolver: zodResolver(CreateRecipeSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });
  const [valueIngredient, setValueIngredient] = useState({ value: '' });
  // const [showSuggestions, setShowSuggestions] = useState(false);

  function clearFields() {
    clearErrors();
    reset();
  }

  function addValueToAppend() {
    if (valueIngredient) {
      append(valueIngredient);
      setValueIngredient({ value: '' });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValueIngredient({ value });
  }

  const onSubmit: SubmitHandler<CreateRecipeType> = async data => {
    console.log(data);
  };

  return (
    <section className="container mx-auto my-24">
      <h1 className="font-bold text-5xl mb-16">Create a new recipe</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles['box-input']}>
          <h3 className={styles.title}>
            Recipe title<span className="text-red-700">*</span>{' '}
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
          <h3 className={styles.title}>Description</h3>
          <textarea
            placeholder="Description"
            className={`${styles.input} min-h-36`}
            {...register('description', { required: true })}
          />
          <p className="h-6 text-red-600">{errors.description?.message}</p>
        </div>

        <div className="relative">
          <input
            className={styles.input}
            value={valueIngredient.value}
            onChange={handleChange}
            type="text"
            placeholder="Fourth ingredient"
          />

          <div className="absolute right-0 mr-2 top-1/6 ">
            <Button
              text="Add ingredient"
              maxWidth=""
              type="button"
              handleClick={addValueToAppend}
            />
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {fields.map((field, index) => (
            <li className="flex ">
              <input
                readOnly
                className="outline-none"
                key={field.id}
                {...register(`ingredients.${index}.value`)}
              />

              <BsX size={25} onClick={() => remove(index)} />
            </li>
          ))}
        </ul>

        <div>
          <h3 className={styles.title}>Directions</h3>
          <input
            className={styles.input}
            placeholder="Directions"
            type="text"
            {...register('directions', { required: true })}
          />
          <p className="h-6 text-red-600">{errors.directions?.message}</p>
        </div>
        <div className="flex justify-end">
          <ButtonTransparent text="Cancel" maxWidth="100px" handleClick={clearFields} />
          <Button text="Save" maxWidth="90px" />
        </div>
      </form>
    </section>
  );
}

export default CreateRecipePage;
