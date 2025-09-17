import type { Recipe } from 'types';
import styles from './card-trend-recipes.module.css';
import sourceViews from 'assets/views.svg';

function CardTrendRecipes({ _count, image, user, title }: Recipe) {

  return (
    <li className={styles.card}>
      <div className="flex gap-2 mb-3">
        <img src={sourceViews} alt="views" />
        <div>{_count.views} views</div>
      </div>
      <img className={styles.meal} src={image} alt="meal" />

      <div className="pt-2.5  flex items-baseline justify-between">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-secondary">{user?.name}</p>
      </div>
    </li>
  );
}

export default CardTrendRecipes;
