import Button from 'components/button';
import styles from './suggest-search.module.css';
import search from '../assets/search.svg';
import { useState } from 'react';
import Select from 'react-select';
import { useGetRecipesWithoutSortQuery } from 'store/api/api';
import { useNavigate } from 'react-router';

function SuggestSearch() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const { data: recipes } = useGetRecipesWithoutSortQuery();
  const navigate = useNavigate();
  const options = recipes?.data.map(item => ({ value: item.title, label: item.title }));

  function handleClick() {
    if (value) {
      const foundRecipe = recipes?.data.find(item => item.title === value);
      if (foundRecipe) {
        const id = foundRecipe.id;
        navigate(`/recipe/${id}`);
      }
    }
  }
  return (
    <section className={styles['suggest-container']}>
      <div className="container mx-auto  w-3/4">
        <p className="text-white text-[56px] max-w-[665px] ">
          Find Recipies and Сreate Your Favourite Сookbooks
        </p>

        <div className="relative max-w-[900px]">
          <Select
            onChange={e => setValue(e?.value)}
            options={options}
            placeholder="Find Best Recipes"
            styles={{
              control: base => ({
                ...base,
                width: '100%',
                backgroundColor: 'white',
                height: '70px',
                borderRadius: '0.5rem',
                paddingLeft: '3rem',
              }),
            }}
          />

          <img src={search} alt="" className="absolute left-4 top-1/3" />
          <div className="absolute right-0 mr-2 top-1/6 ">
            <Button handleClick={handleClick} text="SEARCH" maxWidth="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuggestSearch;
