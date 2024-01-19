'use client'
import {
  BlogResponseType,
  UserInputBlogType,
  createBlog,
  imageUpload,
  updateBlog,
} from '@/utils/crudHelpers'
import { Blog } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useRouter } from 'next/navigation'

const quillToolBar = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ header: [1, 2, 3, false] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'image'],
  ['clean'],
  ['undo', 'redo'],
]

const BlogEditor = ({ blogToAmmend }: { blogToAmmend?: Blog }) => {
  const router = useRouter()
  const [formData, setFormData] = useState<UserInputBlogType>({
    image: '',
    title: '',
    hashTag: '',
    content: '',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFormData({ ...formData, image: selectedFile })
    }
  }

  useEffect(() => {
    if (blogToAmmend) {
      const { image, title, hashTag, content } = blogToAmmend
      setFormData({
        image,
        title,
        hashTag,
        content,
      })
    }
  }, [])

  // State for form fields

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (blogToAmmend) {
      const data = await updateBlog(blogToAmmend.id, formData)
      if (data) router.replace('/admin/blogs')
    } else {
      if (typeof formData.image !== 'string') {
        let imageUrl = ''
        const imageRes = await imageUpload(formData.image)
        if (imageRes) {
          imageUrl = imageRes.secure_url
          const data = await createBlog({ ...formData, image: imageUrl })
          if (data) {
            router.replace('/admin/blogs')
          }
        }
      }
    }
  }

  return (
    <div
      style={{
        background: 'radial-gradient(#3ea8e4, #a8b5cd)',
        width: '100vw',
        minHeight: '100vh',
        maxWidth: 1500,
        display: 'flex',
        justifyContent: 'center',
        padding: 50,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: 10,
          maxWidth: 800,
          padding: 50,
          backgroundColor: 'whitesmoke',
        }}
      >
        <button
          style={{
            padding: '5px 10px',
            width: 'max-content',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: 5,
            fontSize: 18,
          }}
          type="submit"
        >
          {`${blogToAmmend ? 'Update' : 'Create New'} blog`}
        </button>
        {/* Title */}
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        {blogToAmmend ? (
          false
        ) : (
          <>
            {/* Image */}
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              accept="image/jpeg"
              onChange={handleFileChange}
            />
          </>
        )}
        {/* hashTag */}
        <label>hashTag:</label>
        <input
          type="text"
          value={formData.hashTag}
          onChange={(e) =>
            setFormData({ ...formData, hashTag: e.target.value })
          }
        />

        {/* Quill Editor for Content */}
        <label>Content:</label>
        {typeof window !== 'undefined' && ReactQuill && (
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
            modules={{ toolbar: quillToolBar }}
          />
        )}
        {/* Submit Button */}
      </form>
    </div>
  )
}

export default BlogEditor
