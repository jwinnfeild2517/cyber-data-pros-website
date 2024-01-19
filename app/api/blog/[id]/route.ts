import db from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const data = await db.blog.findUnique({ where: { id: params.id } })
  return NextResponse.json({ data }, { status: 200 })
}

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const updatedData = await request.json()
  const data = await db.blog.update({
    where: { id: params.id },
    data: updatedData,
  })
  return NextResponse.json({ data })
}

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const blog = await db.blog.delete({ where: { id: params.id } })
  return NextResponse.json({ data: blog })
}
