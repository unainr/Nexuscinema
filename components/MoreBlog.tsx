import React from 'react'

const MoreBlog = ({blogimg,blogdescription ,blogcat}:{blogimg:string,blogdescription:string,blogcat:string}) => {
  return (
    <div className="p-4 md:w-1/3">
    <div className="h-full border rounded-lg overflow-hidden">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blogimg} alt="movies blog" />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blogcat}</h2>
        <p className="leading-relaxed mb-3 text-sm ">{blogdescription}</p>
       
      </div>
    </div>
  </div>
  )
}

export default MoreBlog