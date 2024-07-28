import React, { useState } from 'react'

import Thumbnail1 from '../assets/art_img1.jpeg'
import Thumbnail2 from '../assets/edu_img1.jpeg'
import Thumbnail3 from '../assets/tech_img1.jpeg'
import Thumbnail4 from '../assets/photo_img1.jpeg'
import Thumbnail5 from '../assets/weather_img1.png'

import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'art',
        title: 'Lady Face Drawing',
        desc: `The "Lady Face Drawing" is a captivating artwork that beautifully captures the essence of femininity and grace. This piece showcases the intricate details of a lady's face, highlighting delicate features such as expressive eyes, a refined nose, and soft, flowing hair. The artist's use of shading and contouring brings the portrait to life, adding depth and dimension to the drawing.
                Every stroke in the "Lady Face Drawing" is meticulously crafted, demonstrating the artist's skill and attention to detail. The subtle play of light and shadow enhances the realism of the piece, making the lady's face appear almost lifelike. This drawing not only celebrates the beauty of the human face but also evokes emotions and tells a story through the lady's serene expression.
                Perfect for art enthusiasts and collectors alike, the "Lady Face Drawing" is a timeless piece that adds elegance and sophistication to any space. Whether displayed in a living room, office, or gallery, this drawing is sure to captivate viewers and spark conversations about the artistry and creativity behind its creation.`,
        date: '2024/07/28',
        authorID: 3
    },

    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'education',
        title: 'Importance of Education',
        desc: `Education is like a guiding light that leads us to success. It’s not just about learning from textbooks, but gaining the knowledge and skills to navigate through life. From the early stages of childhood, education shapes our thoughts and values. Teachers play a vital role in this journey, not just by teaching subjects like math or science, but by inspiring curiosity and a love for learning.
                It teaches us critical thinking – to solve problems and make decisions.`,
        date: '2024/07/28',
        authorID: 3
    },

    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'technology',
        title: 'The Power of Technology',
        desc: `Technology is the driving force behind modern advancements and innovation. It encompasses a wide range of tools, systems, and devices designed to solve problems, enhance communication, and improve our daily lives. From the internet and smartphones to artificial intelligence and renewable energy solutions, technology is continuously evolving, shaping the way we live, work, and interact with the world. Its impact is profound, enabling rapid progress in various fields, including healthcare, education, and transportation, ultimately making our world more connected and efficient.`,
        date: '2024/07/28',
        authorID: 3
    },

    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'photography',
        title: 'The Art of Photography',
        desc: `Photography is the art and practice of capturing moments through the lens of a camera. It combines technical skill with creative vision to produce images that tell stories, evoke emotions, and preserve memories. From stunning landscapes and candid portraits to intricate macro shots and dynamic action scenes, photography allows us to see the world from unique perspectives. It is a powerful medium for expression and communication, enabling photographers to share their interpretation of beauty, culture, and the human experience. Whether as a hobby or a profession, photography continues to inspire and connect people across the globe.`,
        date: '2024/07/28',
        authorID: 3
    },

    {
        id: '5',
        thumbnail: Thumbnail5,
        category: 'weather',
        title: 'Weather News',
        desc: `Weather news provides timely and accurate updates on atmospheric conditions, helping people prepare for daily activities and upcoming events. It includes forecasts, temperature readings, precipitation levels, and severe weather alerts. By monitoring weather patterns and trends, meteorologists offer insights into potential storms, heatwaves, cold fronts, and other significant weather phenomena. Weather news is essential for safety, planning, and staying informed about the ever-changing environment around us. `,
        date: '2024/07/28',
        authorID: 3
    },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
        <section className='posts'>
            <div className='container posts__container'>
                {
                    posts.map(({id, thumbnail, category, title, desc, date, authorID}) => 
                    <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} date={date} authorID={authorID} />)
                }
            </div>
        </section>
    )
}

export default Posts
