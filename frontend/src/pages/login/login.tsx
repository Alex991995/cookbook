import styles from './login.module.css';
import source from 'assets/login-preview.png';
import LoginForm from 'features/authentication/components/login-form';


function Login() {
  return (
    <section className={styles.section}>
      <img src={source} alt="signup" className={styles.img} />

      <div className="flex-auto flex justify-center mx-2.5 items-center">
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;
