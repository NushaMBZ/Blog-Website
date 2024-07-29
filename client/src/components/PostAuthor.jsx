import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar.jpg'

function PostAuthor({authorName, authorID, time}) {
  return (
    <Link to={`/posts/users/${authorID}`} className='post__author'>
        <div className='post__author'>
            <img src={Avatar} alt={`${authorName}'s avatar`}/>
        </div>
        <div className='post__author.details'>
            <h5>By: {authorName}</h5>
            <small>{time}</small>
        </div>
    </Link>
  )
}

export default PostAuthor