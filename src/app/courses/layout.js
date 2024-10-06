
import Link from "next/link";
export default function Layout({ children }) {
    return (<div>
        <Link href={"/courses/categories"}>categories</Link>
        <Link href={"/courses/trainers"}>trainers</Link>
        {children}
           </div>);
}