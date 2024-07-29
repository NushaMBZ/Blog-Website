import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Avatar1 from '../assets/avatar.jpg'

const authorData = [
  {id:1, avatar: Avatar1, name : 'John Doe', posts: 5},
  {id:2, avatar: Avatar1, name : 'John Doe', posts: 5},
  {id:3, avatar: Avatar1, name : 'John Doe', posts: 5},
  {id:4, avatar: Avatar1, name : 'John Doe', posts: 5},
  {id:5, avatar: Avatar1, name : 'John Doe', posts: 5}
]
const Authors = () => {
  const [authors, setAuthors] = useState(authorData)
  
  return (
    <section className='authors'>
      {authors.length > 0 ? <div className='container authors__container'>
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className='author__avatar'>
                <img src={avatar} alt={`image of ${name}`}/>
              </div>
              <div className='author__info'>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No Authors found</h2>}
    </section>
  )
}

export default Authors
