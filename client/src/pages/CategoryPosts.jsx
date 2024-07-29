import React , { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section>
            {posts.length > 0 ? <div className='container posts__container'>
                {
                    posts.map(({id, thumbnail, category, title, desc, date, authorID, authorName, time}) => 
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
                        time={time} 
                    />)
                }
            </div> : <h2 className='center'> No Posts found</h2> }
        </section>
  )
}

export default CategoryPosts
