export default async function Id({params}){
    console.log("params-->>",params)
    let {id} = params
    let res = await fetch(`https://dummyjson.com/posts/${id}`)
    res = await res.json()
    console.log("id-->>",id)
return(
    <div className="flex min-h-screen jjustiify-center">
        <div className="border w-1/2 rounded flexflex-col gap-4 border-gray-100 p-3">
        <h1 className="text-3xl font-bold">{res.title}</h1>
        <h1 className="text-xl font-normal">{res.body}</h1>
        <h1 className="text-xl flex flex-row gap-3 font-normal">
{res.tags.map((tag) => (
    <div className="p-2 rounded bg-blue-50 inline-block">
        {tag}
    </div>
    ))}
        </h1>
        </div>
    </div>
)
}