const MyApi = async() => {
    let res = await fetch("http://localhost:3000/api/courses")
    res = await res.json()
    console.log(res)
    return(
<div>
    <h1>hello</h1>
    <h1>{res.courses[0].criminalName}</h1>
</div>
    )
}
export default MyApi