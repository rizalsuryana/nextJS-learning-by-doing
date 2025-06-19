import { getPosts } from "@/lib/api/post";
import PostList from "@/components/post/PostLists";
// import Link from "next/link";

export default async function PostPage() {
    const posts = await getPosts()
  return (
    <div>
        <h1>Post</h1>
        <PostList posts={posts}/>
    </div>
  );
}