// /app/api/posts/route.ts

import {getHomeData} from '@/lib/api/home'
import {client} from '@/sanity/lib/client'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const start = Number(searchParams.get('start')) || 0
  const limit = Number(searchParams.get('limit')) || 10

  const posts = await getHomeData(start, limit)

  return Response.json(posts)
}
