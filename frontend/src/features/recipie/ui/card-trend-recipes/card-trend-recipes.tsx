import styles from './card-trend-recipes.module.css';
import sourceViews from 'assets/views.svg';

interface ICardTrendRecipes {
  views: number;
  source: string;
  nameRecipe: string;
  nameCreator: string;
}

function CardTrendRecipes({ views, source, nameRecipe, nameCreator }: ICardTrendRecipes) {
  return (
    <li className={styles.card}>
      <div className="flex gap-2 mb-3">
        <img src={sourceViews} alt="views" />
        <div>{views} views</div>
      </div>
      <img className={styles.meal} src={source} alt="meal" />

      <div className="pt-2.5  flex items-baseline justify-between">
        <h4 className="text-2xl">{nameRecipe}</h4>
        <p className="text-secondary">{nameCreator}</p>
      </div>
    </li>
  );
}

export default CardTrendRecipes;
