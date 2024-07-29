import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../assets/art_img1.jpeg'

function PostDetail() {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail__buttons'>
            <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/posts/werwer/delete'} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt='Post Thumbnail'/>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mi nec tincidunt aliquam, nunc nunc ultricies purus, vel tincidunt mi purus id nunc
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mi nec tincidunt aliquam, nunc nunc ultricies purus, vel tincidunt mi purus id nunc
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mi nec tincidunt aliquam, nunc nunc ultricies purus, vel tincidunt mi purus id nunc
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mi nec tincidunt aliquam, nunc nunc ultricies purus, vel tincidunt mi purus id nunc
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mi nec tincidunt aliquam, nunc nunc ultricies purus, vel tincidunt mi purus id nunc
        </p>
      </div>
    </section>
  )
}

export default PostDetail
