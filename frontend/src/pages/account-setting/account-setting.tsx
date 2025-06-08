import defaultImage from 'assets/icon-user.png';
import photo from 'assets/photo.png';
import { useState } from 'react';
import { useGetUserQuery } from 'store/api/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import LinksAccountLayout from 'components/links-account-layout';

function AccountSetting() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const [showInputEmail, setShowInputEmail] = useState(false);
  const [showInputPassword, setShowInputPassword] = useState(false);

  const { data } = useGetUserQuery();
  return (
    <form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-8 mt-24 ">
          <label className="relative flex">
            <input type="file" name="photo" className="invisible w-0" />
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

          <div>
            <h1 className="text-4xl mb-3.5">{data?.name}</h1>
            <p className="max-w-96 text-2xl text-secondary">
              {data?.description || 'We are waiting forward your description'}
            </p>
          </div>
        </div>
      </div>
      <LinksAccountLayout />
      <div className="w-full bg-white p-8">
        <h2 className="font-bold text-2xl ">Personal information</h2>
        <div className="max-w-md space-y-6 pt-8">
          <div className="flex gap-3">
            <p className="text-gray-600 w-1/4">Name</p>
            <p className="font-medium mr-3">{data?.name || 'User'}</p>
            <button className="text-primary hover:underline">change</button>
          </div>

          <div className="flex gap-3">
            <p className="text-gray-600 w-1/4">Email</p>
            {showInputEmail ? (
              <input
                type="text"
                defaultValue={data?.email}
                className="text-primary border px-2 border-primary rounded-2xl"
              />
            ) : (
              <p className="font-medium mr-3">{data?.email}</p>
            )}

            <button
              className="text-primary hover:underline"
              onClick={() => setShowInputEmail(!showInputEmail)}
            >
              change
            </button>
          </div>

          <div className="flex  gap-3 items-center">
            <p className="text-gray-600 w-1/4">Password</p>
            <button className="px-3.5  py-1.5 border border-gray-300 rounded-lg ">
              Change password
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AccountSetting;
