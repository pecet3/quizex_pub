import { MdEmail, MdWarning } from "react-icons/md";
import { DocsList } from "./DocumentsCompontents";
import { LogoSm } from "./Logo";
import Link from "next/link";
import { links } from "@/links";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer
      className="px-4 sm:px-8 md:px-36  mt-12 md:mt-24 p-2 pt-4 py-8
      text-justify gap-16 flex md:flex-row flex-col items-start justify-center
       bg-black bg-opacity-10 backdrop-blur-sm"
    >
      <section className="">
        <p className="text-xl mb-2">Documents</p>
        <DocsList />
      </section>
      <section className="">
        <p className="text-xl mb-2 ">Links</p>
        <ul className="text-blue-700 text-lg">
          <li>
            <Link href={links.landingPage + "/about"}>About</Link>
          </li>
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
      <section className="self-center items-center flex flex-col gap-2">
        <LogoSm />
        <Link
          href={links.pecetit}
          className=" font-mono 
    font-bold text-xl tracking-tighter flex duration-300 "
        >
          &lt;<div className="text-fuchsia-500">pecet</div>.
          <span className="text-sky-400 ">it</span>/&gt;
        </Link>
        <Link href={links.repo} className="flex items-center gap-1">
          <BsGithub size={20} />
          Public Repository
        </Link>
      </section>
    </footer>
  );
};
