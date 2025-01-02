import Link from "next/link";

export default function Header() {
  const hover =
    "relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right";

  return (
    <header className="px-20 py-9 lg:py-12">
      <nav className="flex max-w-8xl items-center justify-around">
        <h1 className="text-4xl">
          <Link href="/" className={hover}>
            sylwester.dev
          </Link>
        </h1>
        <ul className="flex gap-5">
          <li>
            <Link href="/services" className={hover}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={hover}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
