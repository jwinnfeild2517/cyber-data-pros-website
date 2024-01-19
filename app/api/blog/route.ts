import db from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const data = await db.blog.findMany({})
  return NextResponse.json({ data })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const blog = await db.blog.create({ data })
  return NextResponse.json({ data })
}
