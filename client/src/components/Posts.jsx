import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from './PostItem'

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
        <section className='posts'>
            {posts.length > 0 ? <div className='container posts__container'>
                {
                    posts.map(({id, thumbnail, category, title, desc, date, authorID, authorName}) => 
                    <PostItem 
                        key={id} 
                        postID={id} 
                        thumbnail={thumbnail} 
                        category={category} 
                        title={title} 
                        desc={desc} 
                        date={date} 
                        authorID={authorID}
                        authorName={authorName}
                    />)
                }
            </div> : <h2 className='center'> No Posts found</h2> }
        </section>
    )
}

export default Posts
