import styles from './trending-recipes.module.css';
import CardTrendRecipes from '../ui/card-trend-recipes/card-trend-recipes';
import { useGetAllUserRecipesQuery } from 'store/api/api';

function TrendingRecipes() {
  const { data: allRecipes } = useGetAllUserRecipesQuery();
  return (
    <section className="px-8">
      <div className={styles.background}>
        <h2 className="text-white">Top 10</h2>
        <h1 className="text-[40px] font-bold">Trending Recipes</h1>

        <ul className="flex gap-8 mt-6 flex-wrap justify-center">
          {allRecipes?.data.map(item => (
            <CardTrendRecipes {...item} />
          ))}
        </ul>
        <button className="py-4 px-8 bg-white text-primary rounded-2xl hover:text-primary-hover mb-4">
          Show All Recipes
        </button>
      </div>
    </section>
  );
}

export default TrendingRecipes;
