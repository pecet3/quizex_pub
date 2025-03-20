import { links } from "@/links";
import Link from "next/link";

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

export const TableRow = ({
  purpose,
  provider,
}: {
  purpose: string;
  provider: string;
}) => (
  <tr className="border-t">
    <td className="p-3">{purpose}</td>
    <td className="p-3">{provider}</td>
  </tr>
);

export const DocsList = () => {
  return (
    <ul className="text-lg">
      <li>
        <Link
          href={links.landingPage + "/terms-of-service"}
          className="text-blue-800"
        >
          Terms of Service
        </Link>
      </li>
      <li>
        <Link
          href={links.landingPage + "/privacy-policy"}
          className="text-blue-800"
        >
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link
          href={links.landingPage + "/payments-policy"}
          className="text-blue-800"
        >
          Payments Policy
        </Link>
      </li>
    </ul>
  );
};
