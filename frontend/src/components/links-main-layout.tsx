import { setActive } from 'common/helpers';
import { NavLink } from 'react-router';

function LinksMainLayout() {
  return (
    <div className={`text-secondary flex gap-10 text-2xl  `}>
      <NavLink className={setActive} to="/cookbook">
        Cookbooks
      </NavLink>
      <NavLink className={setActive} to="/recipe">
        Recipes
      </NavLink>
    </div>
  );
}

export default LinksMainLayout;
