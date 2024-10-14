import Link from "next/link";

export default async function Post() {
let res = await fetch("https://dummyjson.com/posts", {cache: "no-cache"});
res = await res.json();
console.log("res-->>",res); 
    return (
        <div className="container mx-auto">
<h1 className="text-3xl text-center my-5">All Posts</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {res?.posts?.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
<div className="border p-2 font-mono rounded flex flex-col">
<h3 className="text-2xl font-bold">{post.title}</h3>
<p className="font-light">{post.tags.join("-")}</p>
</div>
        </Link>
    ))}
</div>
        </div>
    );
}
