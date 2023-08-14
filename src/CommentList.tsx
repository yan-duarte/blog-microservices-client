import axios from "axios"
import { useEffect, useState } from "react"

export interface Comments {
  [postId: string]: {
    id: string
    content: string
  }[]
}

const CommentList = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comments[0]>([])

  const fetchComments = async () => {
    const { data } = await axios.get<Comments[0]>(`http://localhost:4001/posts/${postId}/comments`)

    setComments(data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderedComments = comments.map(comment => {
    return (
      <li key={comment.id}>{comment.content}</li>
    )
  })

  return (
    <ul> {renderedComments} </ul>
  )
}

export default CommentList