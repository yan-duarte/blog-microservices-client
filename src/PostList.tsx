import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Posts {
  [id: string]: {
    id: string
    title: string
  }
}
const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<Posts>({})

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts')

    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
        <div className='card-body'>
          <h3>{post.title}</h3>
        </div>
      </div>
    )
  })

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
    {renderedPosts}
    </div>
  )
}

export default PostList