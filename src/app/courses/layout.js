
import Link from "next/link";
export default function Layout({ children }) {
    return (<div>
        <Link className="underline ml-4 hover:no-underline text-black-500 hover:text-black-700 font-bold" href={"/courses/categories"}>categories</Link>
        <Link className="underline ml-4 hover:no-underline text-purple-500 hover:text-purple-700 font-bold" href={"/courses/trainers"}>trainers</Link>
        {children}
           </div>);
}