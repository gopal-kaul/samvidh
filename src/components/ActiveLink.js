import Link from "next/link";
import {useRouter} from "next/router";
export default function ActiveLink({ href, children, className, ...props }) {
  const router=useRouter();
  return (
    <Link
      href={href}
      className={`${className} ${router.pathname === href ? "text-blue-500" : ""}`}
    >
      {children}
    </Link>
  );
}
