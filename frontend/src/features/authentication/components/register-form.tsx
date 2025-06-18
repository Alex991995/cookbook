import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from '../styles/authentication.module.css';
import Logo from 'components/logo';
import { RegisterSchema, type RegisterType } from '../zod-scheme/register-schema';
import Button from 'components/button';
import  { useNavigate } from 'react-router';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<RegisterType>({
    mode: 'onBlur',
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterType> = async data => {
    try {
      const response = await fetch('/api/auth/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      await response.json();
      navigate('/login')
    } catch (error) {
      console.error(error);
      setError('email', {
        message: 'User already exists',
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="self-start">
        <Logo fontSize="50px" width="180px" color="black" />
      </div>

      <div className="self-start ">
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

      <Button text="Sign Up" disabled={!isValid} maxWidth="415px" />
    </form>
  );
}
