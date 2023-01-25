import Link from "next/link";
import { useRouter } from "next/router";
export default function ActiveLink({ href, children, className, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} ${
        router.pathname === href ? "text-[#009FD8]" : ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
