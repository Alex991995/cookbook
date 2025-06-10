import Card from 'features/cookbook/ui/card/card';
import { useGetAllCookbooksQuery } from 'store/api/api';

function AccountCookbook() {
  const { data: allCookbooks } = useGetAllCookbooksQuery();

  return (
    <div className="w-full">
      <ul className="grid gap-4 justify-items-center grid-cols-[repeat(auto-fill,_minmax(310px,_1fr))] ">
        {allCookbooks?.data.map(item => (
          <Card key={item.id} width="310px" {...item} />
        ))}
      </ul>
    </div>
  );
}

export default AccountCookbook;
