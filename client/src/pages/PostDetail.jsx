import React from 'react'

function PostDetail() {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail__buttons'></div>
        </div>
      </div>
    </section>
  )
}

export default PostDetail
