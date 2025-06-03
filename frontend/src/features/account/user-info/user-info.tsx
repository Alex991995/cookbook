import source from 'assets/man.png';
import Button from 'components/button';
import { useGetUserQuery } from 'store/api/api';
import { useLocation } from 'react-router';

function UserInfo() {
  const { data } = useGetUserQuery();
  const location = useLocation();
  const pathname = location.pathname.split('/');
  const [, , route] = pathname;

  let buttonForCreate;

  if (route === 'cookbook') {
    buttonForCreate = <Button text="Create New CookBook" maxWidth="273px" />;
  } else if (route === 'recipe') {
    buttonForCreate = <Button text="Create New Recipe" maxWidth="273px" />;
  }

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-8 mt-24 ">
        <img src={source} alt="user" className="w-[160px] h-[160px] object-cover rounded-[102px]" />
        <div>
          <h1 className="text-4xl mb-3.5">{data?.name || 'John Doe'}</h1>
          <p className="max-w-96 text-2xl text-secondary">
            I don’t know about you but I love pizza. Especially when that pizza comes with Papa
            John’s very own garlic pizza sticks.
          </p>
        </div>
      </div>
      <div>{buttonForCreate}</div>
    </div>
  );
}

export default UserInfo;
