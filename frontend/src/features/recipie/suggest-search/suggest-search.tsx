import Button from '../../../components/button';
import styles from './suggest-search.module.css';
import search from '../assets/search.svg';
import { useState } from 'react';

function SuggestSearch() {
  const [value, setValue] = useState<string>('');

  function handleClick() {
    console.log(value);
  }
  return (
    <section className={styles['suggest-container']}>
      <div className="container mx-auto  w-3/4">
        <p className="text-white text-[56px] max-w-[665px] ">
          Find Recipies and Сreate Your Favourite Сookbooks
        </p>

        <div className="relative max-w-[900px]">
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            className="w-full bg-white text-secondary h-[70px] rounded-lg pl-12"
            type="text"
            placeholder="Find Best Recipes"
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
