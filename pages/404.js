import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div className="container main">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </>
  );
}
