import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar.jpg'

function PostAuthor() {
  return (
    <Link to={`posts/users/jhjh`} className='post__author'>
        <div className='post__author'>
            <img src={Avatar} alt=""/>
        </div>
        <div className='post__author.details'>
            <h5>By: Unknown</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor