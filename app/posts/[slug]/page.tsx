import { getPost } from "@/lib/api/post";

export default async function PostDetail({params}: {params: {slug: string}}) {
  const post = await getPost(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}














// import { PostProps } from "@/app/type/Post";

// type PostPageProps = {
//     params: Promise<{slug: string}>
// }
// async function getPost(slug: string): Promise<PostProps> {
//     const res = await fetch('http://localhost:4000/post/?slug=' +slug)
//     const [post] = await res.json() // [post] buat destructuring atau mengeluarkan dari array

//     return post;
    
// }



// export default async function PostPage({params}: PostPageProps) {

//     const {slug} = await params;
//     const post = await getPost(slug);

//     console.log(post)
//   return (
//     <article>
//         <h1>{post.title}</h1>
//         <p>{post.Content}</p>
//     </article>
//   );
// }