import { Posts } from "./PostList";
export interface Comments {
  [postId: string]: {
    id: string;
    content: string;
  }[];
}

const CommentList = ({ comments }: { comments: Posts[0]["comments"] }) => {
  const renderedComments = (comments ?? []).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul> {renderedComments} </ul>;
};

export default CommentList;
