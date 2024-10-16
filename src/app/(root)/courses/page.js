// import Header from "@/components/header";

// export default function Courses(){
// return(   
//      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//      <Header title={"Courses"}/>
//     </div>
//     )
// }
import CourseCard from "@/components/courseCard";
import AddCourseForm from "@/components/courseForm";
const Courses = async () => {
  let courses = await fetch("http://localhost:3000/api/courses");
  courses = await courses.json();
  return (
    <div className="p-20">
    <AddCourseForm />
    {courses?.courses?.map((course) => (
      <CourseCard key={course.id} item={course} />
    ))}
  </div>
);
};
export default Courses;
