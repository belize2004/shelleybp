'use client'
import {BlogCard} from '@/components/blog/card'

export default function PageClient({blogs = []}) {
  return (
    <>
      <div className="flex flex-col p-8 gap-8">
        {blogs?.map((blog) => <BlogCard key={blog._id} blogPost={blog} />)}
      </div>
    </>
  )
}
