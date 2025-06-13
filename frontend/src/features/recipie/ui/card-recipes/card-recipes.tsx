import styles from './card-recipes.module.css';
// import sourceViews from 'assets/views.svg';
// import sourceHeart from 'assets/heart_outline.svg';
// import sourceComment from 'assets/comment.svg';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { RiChatDeleteFill } from 'react-icons/ri';
import type { Recipe } from 'types';
import { Link } from 'react-router';
import ReactionCounter from 'components/reaction-counter';
interface RecipeWithUpdate extends Recipe {
  updateRecipe?: (recipe: Recipe) => void;
  route: string;
}

function CardRecipes(recipe: RecipeWithUpdate) {
  const { views, image, title, description, user, _count, updateRecipe, route } = recipe;
  const ifAccountRecipeRoute = route === '/account/recipe';
  return (
    <>
      <Link to={recipe.id} className={styles.card}>
        <img className={styles.meal} src={image} alt="meal" />

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-2xl">{title}</h4>
            <p className="text-secondary">{user?.name}</p>
            <p className="max-w-[438px] text-sm text-secondary">{description}</p>
          </div>

          <div className="flex gap-9  items-baseline">
            <ReactionCounter likes={_count.likes} views={views} comment={_count.comment} />
          </div>
        </div>
        <div className="flex grow justify-end gap-4">
          {ifAccountRecipeRoute ? (
            <>
              <MdOutlineSystemUpdateAlt onClick={() => updateRecipe!(recipe)} size={23} />
              <RiChatDeleteFill size={23} />
            </>
          ) : null}
        </div>
      </Link>
    </>
  );
}

export default CardRecipes;
