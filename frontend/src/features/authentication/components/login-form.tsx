import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from '../styles/authentication.module.css';
import Logo from '../../../components/logo';
import { LoginSchema, type LoginType } from '../zod-scheme/register-schema';
import Button from '../../../components/button';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginType>({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginType> = async data => {
    try {
      const response = await fetch('/api/auth/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      await response.json();
    } catch (error) {
      console.error(error);
      setError('email', {
        message: 'Wrong credentials',
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="self-start">
        <Logo fontSize="50px" width="180px" />
      </div>

      <div className="self-start ">
        <div className="text-4xl font-semibold">Welcome back</div>
        <div className=" text-secondary">
          New here<span className="text-primary"> Create an account</span>
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

      <Button text="Sign Up" disabled={!isValid} maxWidth="415px" />
    </form>
  );
}
