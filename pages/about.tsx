import Link from "next/link";
import { DarkLayout, MainLayout } from "../components/layouts";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/about">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
}

// Function that return a react component to design
AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
