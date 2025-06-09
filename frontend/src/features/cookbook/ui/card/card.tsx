import styles from './card.module.css';
import sourceViews from '../../../../assets/views.svg';
import sourceHeart from '../../../../assets/heart_outline.svg';
import sourceComment from '../../../../assets/comment.svg';



interface ICard {
  source: string;
  views: number;
  nameRecipe: string;
  nameCreator: string;
  numberLikes: number;
  numberComments: number;
  width:string
}

function Card({ source, views, nameRecipe, nameCreator, numberLikes, numberComments, width }: ICard) {

  return (
    <li className={styles.card} >
      <div className="flex gap-2">
        <img src={sourceViews} alt="views" />
        <div>{views} views</div>
      </div>
      <img className={styles.meal} style={{width}} src={source} alt="meal" />

      <div className='pt-2.5 pb-6'>
        <h4 className="text-2xl">{nameRecipe}</h4>
        <p className="text-secondary">{nameCreator}</p>
      </div>

      <div className="flex gap-9">
        <div className="flex gap-2">
          <img src={sourceHeart} alt="likes" />
          <div className="text-xs">{numberLikes} likes</div>
        </div>
        <div className="flex gap-2">
          <img src={sourceComment} alt="comments" />
          <div className="text-xs">{numberComments} comments</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
