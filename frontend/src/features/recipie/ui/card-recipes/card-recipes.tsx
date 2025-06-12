import styles from './card-recipes.module.css';
import sourceViews from 'assets/views.svg';
import sourceHeart from 'assets/heart_outline.svg';
import sourceComment from 'assets/comment.svg';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { RiChatDeleteFill } from 'react-icons/ri';
import type { Recipe } from 'types';

interface RecipeWithUpdate extends Recipe {
  updateRecipe?: (recipe: Recipe) => void;
  route: string;
}

function CardRecipes(recipe: RecipeWithUpdate) {
  const { views, image, title, description, user, _count, updateRecipe, route } = recipe;
  const ifAccountRecipeRoute = route === '/account/recipe';
  return (
    <>
      <li className={styles.card}>
        <img className={styles.meal} src={image} alt="meal" />

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-2xl">{title}</h4>
            <p className="text-secondary">{user?.name}</p>
            <p className="max-w-[438px] text-sm text-secondary">{description}</p>
          </div>

          <div className="flex gap-9  items-baseline">
            <div className="flex gap-2 ">
              <img src={sourceHeart} alt="likes" />
              <div className="text-xs">{_count.likes} likes</div>
            </div>
            <div className="flex gap-2 ">
              <img src={sourceComment} alt="comments" />
              <div className="text-xs">{_count.comment} comments</div>
            </div>
            <div className="flex gap-2">
              <img src={sourceViews} alt="views" />
              <div className="text-xs">{views} views</div>
            </div>
          </div>
        </div>
        <div className="flex grow justify-end gap-4">
          {ifAccountRecipeRoute ? (
            <>
              <MdOutlineSystemUpdateAlt onClick={() =>  updateRecipe!(recipe)} size={23} />
              <RiChatDeleteFill size={23} />{' '}
            </>
          ) : null}
        </div>
      </li>
    </>
  );
}

export default CardRecipes;
