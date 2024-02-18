async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data.posts;
}

export default async function Home() {
  const posts = await fetchBlogs();
  console.log(posts);
  return (
    <main>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:text-slate-300">
        {/* Blogs */}
        <div className="grid grid-cols-4 gap-5 w-full">
          {posts?.map((post: any, index: number) => (
            <div key={index} className="p-4 border border-slate-600 rounded-xl">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
