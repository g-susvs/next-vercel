import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }) => {
  const router = useRouter();

  return (
    <Link href={href} style={router.asPath === href ? style : null}>
      {text}
    </Link>
  );
};
