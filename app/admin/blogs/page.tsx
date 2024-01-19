'use client'

import React, { useEffect, useState } from 'react'
import styles from '../../../styles/admin-blogs.module.css'
import Link from 'next/link'
import PageWrapper from '@/components/page/PageWrapper'

const page = () => {
  const [blogsData, setblogsData] = useState<
    {
      id: string
      createdAt: Date
      title: string
      hashTag: string
      content: string
      image: string
    }[]
  >([])

  const getData = async () => {
    try {
      const data = await fetch('/api/blog')
      const blogs = await data.json()
      setblogsData(blogs.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBlog = async (id: string) => {
    try {
      const data = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      })
      if (data) {
        getData()
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  if (!blogsData) return <h1>loading...</h1>
  return (
    <div className={styles['table-wrapper']}>
      <Link
        href={'/admin/blogs/create'}
        className={styles['action-button']}
        style={{
          backgroundColor: 'blue',
          alignSelf: 'flex-start',
        }}
      >
        Create New
      </Link>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th colSpan={2}>Blogs Table</th>
          </tr>
        </thead>
        <tbody>
          {blogsData.map(({ id, title }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>
                <Link
                  href={`/admin/blogs/edit/${id}`}
                  className={styles['action-button']}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className={styles['action-button']}
                  style={{
                    backgroundColor: 'red',
                  }}
                  onClick={() => deleteBlog(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default page
