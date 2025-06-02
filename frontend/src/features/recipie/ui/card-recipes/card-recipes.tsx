import styles from './card-recipes.module.css';
import sourceViews from '../../../../assets/views.svg';
import sourceHeart from '../../../../assets/heart_outline.svg';
import sourceComment from '../../../../assets/comment.svg';

interface ICardRecipes {
  source: string;
  views: number;
  nameRecipe: string;
  nameCreator: string;
  numberLikes: number;
  numberComments: number;
  description: string;
}

function CardRecipes({
  views,
  source,
  nameRecipe,
  nameCreator,
  numberLikes,
  numberComments,
  description,
}: ICardRecipes) {
  return (
    <li className={styles.card}>
      <img className={styles.meal} src={source} alt="meal" />

      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-2xl">{nameRecipe}</h4>
          <p className="text-secondary">{nameCreator}</p>
          <p className="max-w-[438px] text-sm text-secondary">{description}</p>
        </div>
 
        <div className="flex gap-9  items-baseline">
          <div className="flex gap-2 items-baseline">
            <img src={sourceHeart} alt="likes" />
            <div className="text-xs">{numberLikes} likes</div>
          </div>
          <div className="flex gap-2 items-baseline">
            <img src={sourceComment} alt="comments" />
            <div className="text-xs">{numberComments} comments</div>
          </div>
          <div className="flex gap-2 items-baseline">
            <img src={sourceViews} alt="views" />
            <div className="text-xs">{views} views</div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardRecipes;
