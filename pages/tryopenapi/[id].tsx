import { useRouter } from "next/router"; // untuk ambil param, disini id yang digunakan
import { useEffect, useState } from "react"; //ini biasa

export default function TryOpenAPIDetail() {
  const router = useRouter();
  const { id } = router.query; // yang diambil id ini

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);
    if (!post) return <p>Loading...</p>;
  return (
    <div>
      <h1>Detail Post: {id}</h1>
      <p>User ID: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>STFU:{post.completed}</p>{/*ini bolean tidak akan muncul*/}
      <p>Status: {post.completed ? "Selesai" : "Belum selesai"}</p>
    </div>
  );
}
