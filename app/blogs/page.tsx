'use client'
import React, { useEffect, useState } from 'react'
import PageWrapper from '@/components/page/PageWrapper'
import Image from 'next/image'
import styles from '../../styles/blog-page.module.css'
import { getAllBlogs } from '@/utils/crudHelpers'
import { Blog } from '@prisma/client'
import { Spin } from 'antd'
import Link from 'next/link'
import { getDateFormat } from '@/utils/dataFormatter'

const Card = ({
  title,
  date,
  image,
  tag,
  id,
}: {
  title: string
  date: string
  image: string
  tag: string
  id: string
}) => {
  return (
    <Link href={`/blogs/${id}`} className={styles['blog-card']}>
      <span className={styles['card-tag']}>#{tag}</span>
      <div className={styles['blog-image-container']}>
        <img src={image} alt={''} width={250} height={100} />
      </div>
      <div className={styles['card-text-wrapper']}>
        <span className={styles['card-date']}>{date}</span>
        <h2 className={styles['card-title']}>{title}</h2>
        <span className={styles['card-read-more']}>Read full post {'>'}</span>
      </div>
    </Link>
  )
}

const BlogList = () => {
  const [blogList, setblogList] = useState<Blog[]>([])

  const getData = async () => {
    const data = await getAllBlogs()
    if (data) {
      setblogList(data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  if (blogList.length === 0) return <Spin />
  return (
    <PageWrapper>
      <div className={styles['blogs-page-wrapper']}>
        <h1 className={styles['blogs-page-header']}>Read our blogs</h1>
        <div className={styles['responsive-card-container']}>
          {blogList.map((blog) => (
            <Card
              title={blog.title}
              date={getDateFormat(`${blog.createdAt}`)}
              image={blog.image}
              tag={blog.hashTag}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default BlogList
