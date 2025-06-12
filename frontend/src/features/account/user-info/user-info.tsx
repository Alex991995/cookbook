import defaultImage from 'assets/icon-user.png';
import Button from 'components/button';
import { useGetUserQuery } from 'store/api/api';
import { useLocation, useNavigate } from 'react-router';

function UserInfo() {
  const { data } = useGetUserQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.split('/');
  const [, , route] = pathname;

  let buttonForCreate;

  if (route === 'cookbook') {
    buttonForCreate = (
      <Button
        text="Create New CookBook"
        maxWidth="273px"
        handleClick={() => navigate('/cookbook/create')}
      />
    );
  } else if (route === 'recipe') {
    buttonForCreate = (
      <Button
        text="Create New Recipe"
        maxWidth="273px"
        handleClick={() => navigate('/recipe/create')}
      />
    );
  }

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-8 mt-24 ">
        <img
          src={data?.image || defaultImage}
          alt="user"
          className="w-[160px] h-[160px] object-cover rounded-[102px]"
        />
        <div>
          <h1 className="text-4xl mb-3.5">{data?.name}</h1>
          <p className="max-w-96 text-2xl text-secondary">
            {data?.description || 'We are waiting forward your description'}
          </p>
        </div>
      </div>
      <div>{buttonForCreate}</div>
    </div>
  );
}

export default UserInfo;
