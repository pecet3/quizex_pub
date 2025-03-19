import Link from "next/link";

export default function Home() {
  return (
    <>
      <label htmlFor="documents-list" className="text-2xl">
        Documents:
      </label>
      <ul id="documents-list" className="list-disc ml-6 text-lg my-2">
        <li>
          <Link href="/documents/terms-of-service" className="text-blue-800">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href="/documents/privacy-policy" className="text-blue-800">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </>
  );
}
