'use client'
import BlogEditor from '@/components/quill/BlogEditor'
import { Blog } from '@prisma/client'
import React, { useEffect, useState } from 'react'

const BlogEdit = ({ params }: { params: { id: string } }) => {
  const [blog, setBlog] = useState<Blog>()
  const getBlog = async (id: string) => {
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: 'GET',
      })
      const data = await res.json()
      console.log(data)

      if (data.data) {
        setBlog(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBlog(params.id)
  }, [])

  if (!blog) return <h1>Blog Not Found</h1>

  return <BlogEditor blogToAmmend={blog} />
}

export default BlogEdit
