import {client} from './client'

export async function getPosts() {
  try {
    const posts = await client.fetch('*[_type == "post"]', {}, {next: {revalidate: 600}})
    return posts
  } catch (error) {
    return []
  }
}
