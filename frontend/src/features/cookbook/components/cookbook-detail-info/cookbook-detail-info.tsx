import Button from 'components/button';
import ReactionCounter from 'components/reaction-counter';
import type { Cookbook } from 'types';

interface ICookbookDetailInfo {
  data?: Cookbook;
  getCookbookToUser: (id?:string) => void
  handleClickLike(cookbook_id?: string): void;
}

function CookbookDetailInfo({ data, handleClickLike, getCookbookToUser }: ICookbookDetailInfo) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-[54px] mt-20">{data?.title}</h3>
      <h4 className="text-primary font-semibold text-2xl">{data?.user.name}</h4>
      <div className="flex gap-8">
        <img className="h-[304px] w-[445px] object-cover" src={data?.image} alt="cookbook-image" />
        <div>
          <h3 className="font-bold text-2xl">Description</h3>
          <p className="text-secondary">{data?.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-24">
          <ReactionCounter
            id={data?.id}
            handleClickLike={handleClickLike}
            likes={data?._count.Cookbook_Likes || 0}
            comment={data?._count.commentCookbook || 0}
            views={undefined}
            fontSize="20px"
          />
        </div>

        <Button handleClick={() =>getCookbookToUser(data?.id)} text="Clone to my cookbooks" maxWidth="210px" paddingX="0" />
      </div>
    </div>
  );
}

export default CookbookDetailInfo;
