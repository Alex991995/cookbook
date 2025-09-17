import styles from './recipe.module.css';
import { useGetAllRecipesQuery } from 'store/api/api';
import { useState } from 'react';
import LinksMainLayout from 'components/links-main-layout';
import CardRecipes from 'features/recipie/ui/card-recipes/card-recipes';
import { useLocation } from 'react-router';
import { useDebounce } from 'hooks/useDebounce';
import { arrSort } from 'common/constants';

function Recipe() {
  const location = useLocation();

  const [sort, setSort] = useState(arrSort[0]);
  const [time, setTime] = useState('100');
  const debounceTime = useDebounce(time);

  const { data: allRecipes } = useGetAllRecipesQuery({ sort, time: debounceTime });

  function handleAddrTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value;
    setSort(value);
  }

  function resetFields() {
    setSort(arrSort[0]);
    setTime('100');
  }

  return (
    <section className="container mx-auto mt-24">
      <div className={styles.box}>
        <div className="flex flex-col bg-white rounded-2xl p-7 justify-around h-[230px]">
          <div className="flex justify-between">
            <h2 className="text-2xl">Filter</h2>
            <button onClick={resetFields} className="text-secondary cursor-pointer">
              clear all
            </button>
          </div>

          <div className="flex flex-col">
            <label className="text-2xl">Sort by</label>
            <select onChange={handleAddrTypeChange}>
              {arrSort.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              value={time}
              onChange={e => setTime(e.target.value)}
              className="w-full accent-primary "
              type="range"
              max="180"
            />
            <p className="h-5">{time} minute</p>
          </div>
        </div>
        <div>
          <LinksMainLayout />
          <ul className={styles.list}>
            {allRecipes?.data.map(item => (
              <CardRecipes route={location.pathname} key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
