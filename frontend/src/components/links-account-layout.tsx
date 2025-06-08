import { NavLink } from 'react-router';

function LinksAccountLayout() {
  function setActive({ isActive }: { isActive: boolean }) {
    if (isActive) {
      return 'border-b-2  border-primary font-semibold text-black';
    }
    return '';
  }

  return (
    <div className={`text-secondary flex gap-10 text-2xl  `}>
      <NavLink className={setActive} to="/account/cookbook">
        My Cookbooks
      </NavLink>
      <NavLink className={setActive} to="/account/recipe">
        My Recipes
      </NavLink>
      <NavLink className={setActive} to="/account/setting">
        My Settings
      </NavLink>
    </div>
  );
}

export default LinksAccountLayout;
