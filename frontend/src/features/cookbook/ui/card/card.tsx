import styles from './card.module.css';
import sourceViews from 'assets/views.svg';
import sourceHeart from 'assets/heart_outline.svg';
import sourceComment from 'assets/comment.svg';
import type { Cookbook } from 'types';
import { Link } from 'react-router';

interface ICookbookWidth extends Cookbook {
  width?: string;
}

function Card({ image, title, user, _count, width, id }: ICookbookWidth) {

  return (
    <Link to={`/cookbook/${id}`} className={styles.card}>
      <div className="flex gap-2">
        <img src={sourceViews} alt="views" />
        <div>{_count.views} views</div>
      </div>
      <img className={styles.meal} style={{ width }} src={image} alt="meal" />

      <div className="pt-2.5 pb-6">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-secondary">{user?.name}</p>
      </div>

      <div className="flex gap-9">
        <div className="flex gap-2">
          <img src={sourceHeart} alt="likes" />
          <div className="text-xs">{_count.Cookbook_Likes} likes</div>
        </div>
        <div className="flex gap-2">
          <img src={sourceComment} alt="comments" />
          <div className="text-xs">{_count.commentCookbook} comments</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
