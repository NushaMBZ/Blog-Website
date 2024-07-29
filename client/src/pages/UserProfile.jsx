import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar.jpg'

const UserProfile = () => {
  return (
    <section className='profile'>
      <div className='container profile__container'>
        <Link to={`/myposts/pst`} className='btn'>My Posts</Link>

        <div className='profile__details'>
          <div className='avatar__wrapper'>
            <div className='profile__avatar'>
              <img src='https://via.placeholder.com/150' alt='avatar' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
