import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from '../styles/authentication.module.css';
import Logo from '../../../components/logo';
import { RegisterSchema, type RegisterType } from '../zod-scheme/register-schema';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isValid },
  } = useForm<RegisterType>({
    mode: 'onBlur',
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = async data => {
    try {
      const response = await fetch('/api/auth/register', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="self-start pl-17">
        <Logo fontSize="50px" width="180px" />
      </div>

      <div className="self-start pl-17">
        <div className="text-4xl font-semibold">Join our community</div>
        <div className=" text-secondary">
          Already have an account?<span className="text-primary"> Sign In</span>
        </div>
      </div>

      <div className={styles['box-input']}>
        <label className="w-full text-secondary" htmlFor="email">
          Email
        </label>
        <input id="email" className={styles.input} {...register('email', { required: true })} />
        <p className="h-6 text-red-600">{errors.email?.message}</p>
      </div>

      <div className={styles['box-input']}>
        <label className="w-full text-secondary" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles.input}
          {...register('password', { required: true })}
        />
        <p className="h-6 text-red-600">{errors.password?.message}</p>
      </div>

      <div className={styles['box-input']}>
        <label className="w-full text-secondary" htmlFor="repeatPassword">
          Repeat password
        </label>
        <input
          id="repeatPassword"
          type="password"
          className={styles.input}
          {...register('repeatPassword', { required: true })}
        />
        <p className="h-6 text-red-600 bg-amber-900">{errors.repeatPassword?.message}</p>
      </div>

      <button className={`${styles.button}`} disabled={!isValid} type="submit">
        Sign Up
      </button>
    </form>
  );
}
