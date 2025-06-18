import styles from './card-recipes.module.css';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { RiChatDeleteFill } from 'react-icons/ri';
import type { Recipe } from 'types';
import { Link } from 'react-router';
import ReactionCounter from 'components/reaction-counter';
interface RecipeWithUpdate extends Recipe {
  updateRecipe?: (recipe: Recipe) => void;
  handleClickOpenModel?: (recipe: Recipe) => void;
  getIdForDelete?: (id?: string) => void;
  route: string;
}

function CardRecipes(recipe: RecipeWithUpdate) {
  const {
    image,
    title,
    description,
    user,
    _count,
    updateRecipe,
    handleClickOpenModel,
    getIdForDelete,
    route,
  } = recipe;

  const ifAccountRecipeRoute = route === '/account/recipe';
  const isSingleCookbook = /\/cookbook\/\w+/gm.test(route);

  return (
    <>
      <li className={styles.card}>
        <Link className="flex gap-4" to={`/recipe/${recipe.id}`}>
          <img className={styles.meal} src={image} alt="meal" />

          <div className="flex flex-col justify-between flex-2">
            <div>
              <h4 className="text-2xl">{title}</h4>
              <p className="text-secondary">{user?.name}</p>
              <p className="max-w-[438px] text-sm text-secondary">{description}</p>
            </div>

            <div className="flex gap-9  items-baseline">
              <ReactionCounter
                handleClickLike={undefined}
                likes={_count.likes}
                views={_count.views}
                comment={_count.comment}
              />
            </div>
          </div>
        </Link>
        {isSingleCookbook && (
          <button
            onClick={() => handleClickOpenModel!(recipe)}
            className="border border-primary px-4 rounded-[5px] bottom-4 right-4 absolute z-10"
          >
            Save
          </button>
        )}

        {ifAccountRecipeRoute ? (
          <div className="absolute top-3 right-2 flex gap-1">
            <MdOutlineSystemUpdateAlt onClick={() => updateRecipe!(recipe)} size={23} />
            <RiChatDeleteFill onClick={() => getIdForDelete!(recipe.id)} size={23} />
          </div>
        ) : null}
      </li>
    </>
  );
}

export default CardRecipes;
