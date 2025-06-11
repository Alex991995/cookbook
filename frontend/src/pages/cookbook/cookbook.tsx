import Card from 'features/cookbook/ui/card/card';
import styles from './cookbook.module.css';
import { useGetAllCookbooksQuery } from 'store/api/api';
import { useState } from 'react';
import LinksMainLayout from 'components/links-main-layout';

function Cookbook() {
  const { data: allRecipes } = useGetAllCookbooksQuery();
  const arrSort = ['popularity', 'views', 'comment'];

  const [sort, setSort] = useState(arrSort[0]);

  function handleAddrTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value;

    setSort(value);
  }
  console.log(sort);

  return (
    <section className="container mx-auto">
      <div className={styles.box}>
        <div className="flex flex-col bg-white rounded-2xl p-7 justify-around">
          <div className="flex justify-between">
            <h2 className="text-2xl">Filter</h2>
            <button>clear all</button>
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
        </div>
        <div>
        <LinksMainLayout/>
          <ul className={styles.list}>
            {allRecipes?.data.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cookbook;
