import {get} from './api'
import { PostProps } from '@/app/type/Post'

export const getPosts = () => get<PostProps[]>('posts');
export const getPost = async (slug: string): Promise<PostProps | null> => {
    const posts = await get<PostProps[]>(`posts?slug=${slug}`);
    return posts.length> 0 ? posts[0] : null ;
} 