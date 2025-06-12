import anonymous from 'assets/icon-user.png';
import { getWhenCreatedInMinutes } from 'common/helpers';

interface IListComments {
  image?: string;
  name: string;
  description: string;
  createdAt?: string;
}

function ListComments({ image, name, description, createdAt }: IListComments) {
  const minutes = getWhenCreatedInMinutes(createdAt);
  return (
    <li className="flex gap-4">
      <img className="w-[76px] h-[76px] rounded-lg" src={image || anonymous} alt="image" />

      <div>
        <div className='flex gap-4'>
          <h3 className="text-primary">{name}</h3> <span className='text-secondary'> {minutes} minutes ago </span>
        </div>
        <p className="text-[#2F2F2F]">{description}</p>
      </div>
    </li>
  );
}

export default ListComments;
