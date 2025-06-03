import PickByUsCookbook from 'features/cookbook/components/pick-by-us-cookbook/pick-by-us-cookbook';
import PopularCookbook from 'features/cookbook/components/popular-cookbook/popular-cookbook';
import SuggestSearch from 'features/recipie/suggest-search/suggest-search';
import TrendingRecipes from 'features/recipie/trending-recipes/trending-recipes';

function MainPage() {
  return (
    <main>
      <SuggestSearch />
      <PopularCookbook />
      <PickByUsCookbook />
      <TrendingRecipes/>
    </main>
  );
}

export default MainPage;
