import { PostProps } from "@/app/type/Post";

type PostPageProps = {
    params: Promise<{slug: string}>
}
async function getPost(slug: string): Promise<PostProps> {
    const res = await fetch('http://localhost:4000/post/?slug=' +slug)
    const [post] = await res.json() // [post] buat destructuring atau mengeluarkan dari array

    return post;
    
}



export default async function PostPage({params}: PostPageProps) {

    const {slug} = await params;
    const post = await getPost(slug);

    console.log(post)
  return (
    <article>
        <h1>{post.title}</h1>
        <p>{post.Content}</p>
    </article>
  );
}