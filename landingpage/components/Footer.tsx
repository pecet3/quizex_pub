import { MdEmail, MdWarning } from "react-icons/md";
import { DocsList } from "./DocumentsCompontents";
import { Logo } from "./Logo";
import Link from "next/link";
import { links } from "@/links";

export const Footer = () => {
  return (
    <footer
      className="px-4 sm:px-8 md:px-36  mt-12 md:mt-24 p-2
      text-justify gap-16 flex md:flex-row flex-col items-start justify-center
       bg-black bg-opacity-5 "
    >
      <section className="">
        <p className="text-xl mb-2">Documents</p>
        <DocsList />
      </section>
      <section className="">
        <p className="text-xl mb-2 ">Links</p>
        <ul className="text-blue-700 text-lg">
          <li>
            <Link href={links.landingPage + "/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={links.app}>Dashboard</Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col justify-end">
        <p className="text-xl mb-2">Other</p>
        <Link
          href={links.app + "/report-issue"}
          className="flex items-center text-red-800 gap-1"
        >
          <MdWarning /> Report an issue
        </Link>
        <div>
          <p className="font-mono flex gap-1  items-center font-bold">
            <MdEmail /> support@quizex.app
          </p>

          <p className="font-mono italic">version: 1.0.0</p>
        </div>
      </section>
      <section className="self-end ">
        <Logo />
      </section>
    </footer>
  );
};
