import styles from './pick-by-us-cookbook.module.css';
import ButtonSecondary from 'components/button-secondary';
import { Link } from 'react-router';
import { useGetPopularCookbooksQuery } from 'store/api/api';

function PickByUsCookbook() {
  const { data: allCookbook } = useGetPopularCookbooksQuery();

  return (
    <section className="px-8 container mx-auto mt-32 ">
      <h1 className="text-[40px] font-bold text-center">Picked By Us</h1>
      <ul className={styles.box}>
        {allCookbook?.data.map(item => (
          <Link key={item.id} to={`/cookbook/${item.id}`} className={styles.card}>
            <img src={item.image} alt="cookbook" />
            <p className={styles.label}>{item.title}</p>
          </Link>
        ))}
      </ul>
      <div className="mt-14 mb-24 flex justify-center">
        <ButtonSecondary text="Show More" maxWidth="169px" />
      </div>
    </section>
  );
}

export default PickByUsCookbook;
