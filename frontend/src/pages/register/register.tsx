import RegisterForm from '../../features/authentication/components/register-form';
import source from '../../assets/signup-preview.png';

import styles from './register.module.css';

function Register() {
  return (
    <section className={styles.section}>

        <img src={source} alt="signup" />


      <div className="flex-auto flex justify-center ">
        <RegisterForm />
      </div>
    </section>
  );
}

export default Register;
