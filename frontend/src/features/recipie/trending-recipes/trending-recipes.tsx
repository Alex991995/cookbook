import styles from './trending-recipes.module.css';
import meal from '../assets/meal.jpg';
import CardTrendRecipes from '../ui/card-trend-recipes/card-trend-recipes';

function TrendingRecipes() {
  return (
    <section className="px-8">
      <div className={styles.background}>
        <h2 className="text-white">Top 10</h2>
        <h1 className="text-[40px] font-bold">Trending Recipes</h1>

        <ul  className='flex gap-8 mt-6 flex-wrap justify-center'>
          {arr.map(item => (
            <CardTrendRecipes {...item} />
          ))}
        </ul>
        <button className='py-4 px-8 bg-white text-primary rounded-2xl hover:text-primary-hover mb-4' >Show All Recipes</button>
      </div>
    </section>
  );
}

export default TrendingRecipes;

const arr = [
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
  },
  {
    source: meal,
    views: 2,
    nameRecipe: 'pancka',
    nameCreator: 'Jon',
  },
];
