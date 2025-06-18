import Link from "next/link";
import { PostProps } from "../type/Post";

async function getPost(): Promise<PostProps[]>  { // [] => array
    const res = await fetch("http://localhost:4000/post");
    const posts = await res.json();
    console.log(posts)

    return posts;
    
}

export default async function PostPage() {
    const posts = await getPost()
  return (
<div>

    <h1>Post Page</h1>
    {
        posts.map((post) =>(
            <div key={post.id}>
                <h2>
                    <Link href={`/post/${post.slug}`}>
                    {post.title}
                    </Link>
                    </h2>
            </div>
        ) )
    }
    </div>
  );
}