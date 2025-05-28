import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from '../styles/authentication.module.css';
import Logo from '../../../components/logo';
import { RegisterSchema, type RegisterType } from '../zod-scheme/register-schema';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: 'onBlur',
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = data => {
    console.log(data);
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
        <p className="h-6 text-red-600">{errors.repeatPassword?.message}</p>
      </div>



      <button className={styles.button} type="submit">
        Sign Up
      </button>
    </form>
  );
}
