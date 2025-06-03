
import breakfast from '../../assets/breakfast.png';
import iceCream from '../../assets/ice-cream.jpg';
import panckake from '../../assets/panckake.jpg';
import fruie from '../../assets/fruie.png';
import styles from './pick-by-us-cookbook.module.css';
import ButtonSecondary from 'components/button-secondary';

function PickByUsCookbook() {
  return (
    <section className="px-8 container mx-auto mt-32">
      <ul className={styles.box}>
        {arr.map(item => (
          <li className={styles.card}>
            <img src={item.image} alt="" />
            <p className={styles.label}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className='mt-14 mb-24 flex justify-center'>
        <ButtonSecondary text="Show More" maxWidth="169px" />
      </div>
    </section>
  );
}

export default PickByUsCookbook;

const arr = [
  {
    text: 'Its all about pancakes',
    image: panckake,
  },
  {
    text: 'Iccceeesream dream',
    image: iceCream,
  },
  {
    text: 'Fast breakfast',
    image: breakfast,
  },
  {
    text: 'Fruits and vegetables',
    image: fruie,
  },
];
