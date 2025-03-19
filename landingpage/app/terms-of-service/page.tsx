/* eslint-disable */
import { Section } from "@/components/DocumentsCompontents";
import Link from "next/link";

export default function Home() {
  const appName = "Quizex";
  const effectiveDate = "April 1, 2025";

  return (
    <main className="max-w-4xl w-full m-auto p-2 min-h-[72vh]">
      <div className="mt-20"></div>

      <h1 className="text-2xl font-bold mb-4">{appName} Terms of Service</h1>
      <p className="text-sm text-gray-600">Effective: {effectiveDate}</p>

      <div className="space-y-6 mt-6">
        <Section title="1. Acceptance of Terms">
          <p>
            By using {appName}, you agree to these terms. If you do not agree
            with any part of these terms, please discontinue use of our service
            immediately.
          </p>
        </Section>

        <Section title="2. Free & Premium Plans">
          <ul className="list-disc pl-6">
            <li>
              Free plan: Basic features including limited quiz creation and
              participation
            </li>
            <li>
              Premium: One-time payment via Stripe with unlimited quiz creation,
              advanced analytics, and custom branding
            </li>
          </ul>
        </Section>

        <Section title="3. Payments">
          <p>
            Processed securely through
            <Link href="https://stripe.com" className="text-blue-600">
              {" "}
              Stripe
            </Link>
            . Premium plan purchases are non-refundable unless required by law.
          </p>
        </Section>

        <Section title="4. User Accounts">
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
        </Section>

        <Section title="5. User Content">
          <p>
            You retain ownership of any content you create using {appName}, but
            grant us a license to store, display, and use your content as
            necessary to provide our services.
          </p>
        </Section>

        <Section title="6. Prohibited Uses">
          <p>You may not use {appName} to:</p>
          <ul className="list-disc pl-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Distribute malicious content or spam</li>
            <li>Harass, abuse, or harm others</li>
          </ul>
        </Section>

        <Section title="8. Termination">
          <p>
            We reserve the right to suspend or terminate your access to
            {appName} for violations of these terms or for any other reason at
            our discretion.
          </p>
        </Section>

        <Section title="9. Changes to Terms">
          <p>
            We may update these terms from time to time. Continued use of{" "}
            {appName} after changes constitutes acceptance of the revised terms.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            If you have any questions about these terms, please contact us at
            support@quizex.com.
          </p>
        </Section>
      </div>
    </main>
  );
}
