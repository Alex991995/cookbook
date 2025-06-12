import sourceViews from 'assets/views.svg';
import sourceHeart from 'assets/heart_outline.svg';
import sourceComment from 'assets/comment.svg';

interface IReactionCounter {
  likes: number;
  comment: number;
  views: number;
}

function ReactionCounter({ likes, comment, views }: IReactionCounter) {
  return (
    <>
      <div className="flex gap-2 ">
        <img src={sourceHeart} alt="likes" />
        <div className="text-xs">{likes} likes</div>
      </div>
      <div className="flex gap-2 ">
        <img src={sourceComment} alt="comments" />
        <div className="text-xs">{comment} comments</div>
      </div>
      <div className="flex gap-2">
        <img src={sourceViews} alt="views" />
        <div className="text-xs">{views} views</div>
      </div>
    </>
  );
}

export default ReactionCounter;
