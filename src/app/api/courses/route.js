const courses = [
    {
      criminalName: "john",
      age: 30  
    },
    {
        criminalName: "smith",
        age: 24  
    },
    {
        criminalName: "niel",
        age: 57  
    }


]

export async function GET(request) {
return Response.json({
    courses: courses,
    msg: "courses fetched successfully",
})

}
