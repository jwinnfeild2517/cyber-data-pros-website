'use client'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const BlogEditor = dynamic(() => import('@/components/quill/BlogEditor'), {
  ssr: false,
})

const page = () => {
  return <BlogEditor />
}

export default page
