import Link from "next/link";
import DarkToggler from "./DarkToggler";
import { UserButton, auth } from "@clerk/nextjs";

export default async function Navbar() {
  const { userId } = auth();
  return (
    <nav className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center w-20 space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center font-semibold text-2xl whitespace-nowrap text-slate-700 dark:text-slate-400">
            <span className="text-primary ">MY</span>next
            <span className="text-primary">BLOG</span>
          </span>
        </a>
        <div className="dark:text-white">
          <ul className="flex space-x-5 uppercase">
            <li>
              <Link href="/blog/add">Submit your blog</Link>
            </li>
            <li>{userId ? "" : <Link href="/sign-in">Signin</Link>}</li>
          </ul>
        </div>
        <div className="items-center justify-between w-20 md:flex md:w-auto md:order-1">
          <DarkToggler />
          <div className="ml-5">
            <UserButton
              appearance={{
                elements: {
                  userButtonPopoverFooter: "hidden",
                  userButtonPopoverCard: "dark:bg-slate-600",
                  userPreviewMainIdentifier: "dark:text-current",
                  userPreviewSecondaryIdentifier: "dark:text-slate-400",
                  userButtonPopoverActionButtonIcon: "dark:text-slate-200",
                  userButtonPopoverActionButtonText: "dark:text-slate-300",
                  card: "dark:bg-slate-600",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

// export default Navbar;
