import db from '@/lib/prisma'
import { Blog } from '@prisma/client'
import { log } from 'console'
import { env } from 'process'

const cloudinaryURL = process.env.CLOUDINARY_UPLOAD_URL || ''

export type BlogResponseType = {
  data: Array<{
    id: string
    createdAt: Date
    title: string
    hashTag: string
    content: string
    image: string
  }>
}

export type UserInputBlogType = {
  image: File | string
  title: string
  hashTag: string
  content: string
}

export type CloudinaryRes = {
  secure_url: string
}

export const getAllBlogs = async (): Promise<Blog[] | false> => {
  try {
    const data = await fetch('/api/blog')
    const blogs = await data.json()
    return blogs.data
  } catch (error) {
    console.log(error)
  }
  return false
}

export const imageUpload = async (
  file: File,
): Promise<CloudinaryRes | false> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'blog-image')

  try {
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dhgzwrwz8/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Image upload Error', error)
  }

  return false
}

export const createBlog = async (
  formData: UserInputBlogType,
): Promise<Blog | false> => {
  try {
    const res = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    if (data) {
      return data
    }
  } catch (error) {
    console.log(error)
  }

  return false
}

export const updateBlog = async (
  id: string,
  formData: UserInputBlogType,
): Promise<Blog | false> => {
  try {
    const res = await fetch(`/api/blog/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    if (data) {
      return data
    }
  } catch (error) {
    console.log(error)
  }

  return false
}

export const getBlog = async (id: string): Promise<Blog | false> => {
  try {
    const res = await fetch(`/api/blog/${id}`)
    const data = await res.json()
    if (data) {
      return data.data
    }
  } catch (error) {
    console.log(error)
  }
  return false
}

export const getBlogSSR = async (id: string): Promise<Blog | false> => {
  try {
    const data = await db.blog.findUnique({ where: { id: id } })

    if (data) {
      return data
    }
  } catch (error) {
    console.log(error)
  }
  return false
}
