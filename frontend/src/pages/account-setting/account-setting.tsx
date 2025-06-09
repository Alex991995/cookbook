import defaultImage from 'assets/icon-user.png';
import photo from 'assets/photo.png';
import { useState } from 'react';
import { useGetUserQuery } from 'store/api/api';
import { useForm, type SubmitHandler } from 'react-hook-form';
import LinksAccountLayout from 'components/links-account-layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateUserSchema, type UpdateUserType } from './zod-scheme/update-user';
import Button from 'components/button';

function AccountSetting() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<UpdateUserType>({ mode: 'onBlur', resolver: zodResolver(UpdateUserSchema) });

  const onSubmit: SubmitHandler<UpdateUserType> = async data => {
    clearAllFields();
    console.log(data);

    const { picture, ...body } = data;
    const file = picture ? picture[0] : null;

    const formData = new FormData();
    console.log(file);
    if (file) {
      formData.append('file', file);
    }

    formData.append('data', JSON.stringify(body));
    try {
      const response = await fetch('/api/account/settings', {
        method: 'PUT',
        body: formData,
      });

      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError('oldPassword', {
          message: error.message,
        });
      }
    }
  };

  function clearAllFields() {
    setShowInputPassword(false);
    setShowInputEmail(false);
    setShowInputName(false);
    setShowInputDescription(false);
  }

  const [showInputEmail, setShowInputEmail] = useState(false);
  const [showInputName, setShowInputName] = useState(false);
  const [showInputPassword, setShowInputPassword] = useState(false);
  const [showInputDescription, setShowInputDescription] = useState(false);

  const { data } = useGetUserQuery();



  return (
    <form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-8 mt-24 ">
          <label className="relative flex">
            <input type="file" className="invisible w-0" {...register('picture')} />
            <img
              src={data?.image || defaultImage}
              alt="user"
              className="w-[160px] h-[160px] object-cover rounded-[102px] brightness-50"
            />
            <img
              src={photo}
              alt="photo"
              className="absolute left-0 right-0 mx-auto w-fit bottom-[35%]"
            />
          </label>

          <div className="flex gap-2 items-center">
            <h1 className="text-4xl mb-3.5">{data?.name}</h1>
            {showInputDescription ? (
              <>
                <input
                  type="text"
                  defaultValue={data?.description || ''}
                  {...register('description')}
                  className="text-primary border px-2 border-primary rounded-2xl"
                />
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setShowInputDescription(!showInputDescription)}
                >
                  add
                </button>
              </>
            ) : (
              <p
                className="max-w-96 text-2xl text-secondary"
                onClick={() => setShowInputDescription(!showInputDescription)}
              >
                {data?.description ||
                  watch('description') ||
                  'We are waiting forward your description'}
              </p>
            )}
          </div>
        </div>
      </div>
      <LinksAccountLayout />
      <div className="w-full bg-white p-8">
        <h2 className="font-bold text-2xl ">Personal information</h2>
        <div className="max-w-md space-y-6 pt-8">
          <div className="flex gap-3">
            <p className="text-gray-600 w-1/4">Name</p>
            {showInputName ? (
              <input
                value={watch('name')}
                type="text"
                defaultValue={data?.name || ''}
                {...register('name')}
                className="text-primary border px-2 border-primary rounded-2xl"
              />
            ) : (
              <p className="font-medium mr-3">{data?.name || watch('name')}</p>
            )}
            <p className="h-6 text-red-600">{errors.name?.message}</p>
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => setShowInputName(!showInputName)}
            >
              {showInputName ? 'add' : 'change'}
            </button>
          </div>
          <div className="m-0">
            <div className="flex gap-3 m-0">
              <p className="text-gray-600 w-1/4">Email</p>
              {showInputEmail ? (
                <input
                  type="text"
                  defaultValue={data?.email}
                  {...register('email')}
                  className="text-primary border px-2 border-primary rounded-2xl"
                />
              ) : (
                <p className="font-medium mr-3">{watch('email') || data?.email}</p>
              )}

              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => setShowInputEmail(!showInputEmail)}
              >
                {showInputEmail ? 'add' : 'change'}
              </button>
            </div>
            <p className="h-6 text-red-600">{errors.email?.message}</p>
          </div>

          <div className="flex flex-col  gap-3  items-start w-full">
            <p className="text-gray-600 w-1/4">Password</p>
            {showInputPassword ? (
              <div>
                <input
                  type="password"
                  {...register('oldPassword')}
                  className="text-primary border px-2 border-primary rounded-2xl"
                />
                <p className="h-2 text-red-600">{errors.oldPassword?.message}</p>
              </div>
            ) : (
              <>
              <button
                type="button"
                className="px-3.5  py-1.5 border border-gray-300 rounded-lg items-start"
                onClick={() => setShowInputPassword(!showInputPassword)}
              >
                Change password
              </button>
               <p className="h-2 text-red-600">{errors.newPassword?.message}</p>
                    <p className="h-2 text-red-600">{errors.oldPassword?.message}</p>
               </>
            )}
            {showInputPassword && (
              <>
                <p className="text-gray-600 w-1/4"> New Password</p>
                <div>
                  <input
                    type="password"
                    {...register('newPassword')}
                    className="text-primary border px-2 border-primary rounded-2xl"
                  />
                  <p className="h-2 text-red-600">{errors.newPassword?.message}</p>
                </div>

                <button
                  type="button"
                  disabled={(!!errors.newPassword?.message && !!errors.oldPassword?.message)}
                  className="text-primary hover:underline"
                  onClick={() => setShowInputPassword(!showInputPassword)}
                >
                  add
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button text="Save" type="submit" paddingX="0" maxWidth="90px"  />
      </div>
    </form>
  );
}

export default AccountSetting;
