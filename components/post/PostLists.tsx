import Link from "next/link";
import { PostProps } from "@/app/type/Post";

export default function PostList({posts}: {posts : PostProps[]}) {
  return (
    <div>
        {
            posts.map(
                post => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.slug}`}>
                        <h3>{post.title}</h3>
                        </Link>
                    </div>
                )
            )
        }
    </div>
  );
}