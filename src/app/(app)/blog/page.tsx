import PageClient from './page.client'
import {getBlogs} from '@/lib/api/blog'

export default async function Page() {
  const blogs = await getBlogs()

  return <PageClient blogs={blogs} />
}
