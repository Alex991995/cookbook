import sourceViews from 'assets/views.svg';
import sourceHeart from 'assets/heart_outline.svg';
import sourceComment from 'assets/comment.svg';

interface IReactionCounter {
  likes: number;
  comment: number;
  views?: number;
  fontSize?: string;
}

function ReactionCounter({ likes, comment, views, fontSize }: IReactionCounter) {

  return (
    <>
      <div className="flex gap-2 ">
        <img src={sourceHeart} alt="likes" />
        <div style={{ fontSize }} className="text-xs">
          {likes} likes
        </div>
      </div>
      <div className="flex gap-2 ">
        <img src={sourceComment} alt="comments" />
        <div style={{ fontSize }} className="text-xs">
          {comment} comments
        </div>
      </div>
      {views !== undefined && (
        <div className="flex gap-2">
          <img src={sourceViews} alt="views" />
          <div style={{ fontSize }} className="text-xs">
            {views} views
          </div>
        </div>
      )}
    </>
  );
}

export default ReactionCounter;
