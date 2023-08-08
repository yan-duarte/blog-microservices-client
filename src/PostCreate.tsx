import React, { useState } from "react";
import axios from "axios";

const PostCreate = (): JSX.Element => {

  const [title, setTitle] = useState('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await axios.post(`http://localhost:4000/posts`, {
      title
    })

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={onInputChange} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )

}

export default PostCreate