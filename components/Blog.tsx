import React from 'react'
import MoreBlog from './MoreBlog'

const Blog = () => {
  return (
    <section className=" body-font">
    <div className="container px-5 py-20 mx-auto">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold ">Latest Blogs</h1>
        <p className="text-base  mt-4">Discover the latest insights, stories, and news from our blog.</p>
      </div>
  
      {/* Blog Cards */}
      <div className="flex flex-wrap -m-4">
        <MoreBlog 
          blogimg="/img_59.jpg"
          blogdescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          blogcat="The Beatles: Eight Days a Week – The Touring Years"
        />
        <MoreBlog 
          blogimg="/img_60.jpg"
          blogdescription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          blogcat="The Beatles: Eight Days a Week – The Touring Years"
        />
        <MoreBlog 
          blogimg="/img_57.jpg"
          blogdescription="aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          blogcat="Win a Wizarding World holiday with Fantastic Beasts"
        />
      </div>
    </div>
  </section>
  


  )
}

export default Blog