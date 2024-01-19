export type Blog = {
  id: string
  createdAt: Date
  title: string
  hashTag: string
  content: string
  image: string
}

export type BlogResponseType = Array<Blog>
