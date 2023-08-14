import { useState } from "react"
import axios from "axios"

const CommentCreate = ({ postId }: { postId: string }): JSX.Element => {
  const [content, setContent] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    })

    setContent('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input value={content} onChange={onChangeHandler} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate