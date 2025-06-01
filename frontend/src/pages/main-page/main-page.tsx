import PopularCookbook from '../../features/cookbook/components/popular-cookbook/popular-cookbook';
import SuggestSearch from '../../features/recipie/suggest-search/suggest-search';

function MainPage() {
  return (
    <main>
      <SuggestSearch />
      <PopularCookbook />
    </main>
  );
}

export default MainPage;
