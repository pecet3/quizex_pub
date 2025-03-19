/* eslint-disable */
import { Section, TableRow } from "@/components/DocumentElements";

export default function Home() {
  const companyName = "Quizex";
  const effectiveDate = "April 1, 2025";
  const contactEmail = "support@quizex.com";

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600">Effective: {effectiveDate}</p>

      <div className="space-y-6 mt-6">
        <p>
          This Privacy Policy describes how {companyName} ("we", "us", or "our")
          collects, uses, and shares your personal information when you use our
          Quizex application ("Service").
        </p>

        <Section title="Data Administrator">
          <p>
            The administrator of your personal data is {companyName}, registered
            in Poland. You can contact us regarding data protection matters at{" "}
            {contactEmail}.
          </p>
        </Section>

        <Section title="Data We Collect">
          <ul className="list-disc pl-6">
            <li>Email address</li>
            <li>Username</li>
            <li>IP address</li>
            <li>Device information</li>
            <li>Usage data</li>
            <li>Quiz content and results</li>
          </ul>
        </Section>

        <Section title="How We Use Your Data">
          <p>We use your data to:</p>
          <ul className="list-disc pl-6">
            <li>Provide and maintain our Service</li>
            <li>Process payments</li>
            <li>Communicate with you</li>
            <li>Improve our Service</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="Data Retention">
          <p>
            We retain your personal data for as long as necessary to provide you
            with our Service and as required by applicable law. You can request
            deletion of your data at any time.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>We use:</p>
          <ul className="list-disc pl-6">
            <li>Stripe for payments</li>
            <li>Cloudflare for security</li>
          </ul>
          <p className="mt-2">
            These third parties may have access to your personal information
            only to perform these tasks on our behalf and are obligated not to
            disclose or use it for any other purpose.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>Under GDPR, you can:</p>
          <ul className="list-disc pl-6">
            <li>Request data access</li>
            <li>Request deletion</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at {contactEmail}.
          </p>
        </Section>

        <Section title="International Data Transfers">
          <p>
            Your information may be transferred to — and maintained on —
            computers located outside of your state, province, country, or other
            governmental jurisdiction where the data protection laws may differ
            from those of your jurisdiction.
          </p>
          <p className="mt-2">
            If you are located outside Poland and choose to provide information
            to us, please note that we transfer the data to Poland and process
            it there.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            We use cookies and similar tracking technologies only for essential
            purposes such as authentication and maintaining your session.
            Third-party service providers like Stripe and Cloudflare may also
            use cookies when you interact with their services through our
            platform. We do not use cookies for marketing, analytics, or
            tracking your behavior across other websites.
          </p>
          <p className="mt-2">
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent, but this may affect some functionality
            of our Service.
          </p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Purpose</th>
                <th className="p-3 text-left">Provider</th>
              </tr>
            </thead>
            <tbody>
              <TableRow purpose="Authentication" provider={companyName} />
              <TableRow purpose="Payments" provider="Stripe" />
              <TableRow purpose="Security" provider="Cloudflare" />
            </tbody>
          </table>

          <p className="mt-4 text-sm">
            No consent required for these essential cookies according to Article
            5(3) ePrivacy Directive.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Our Service is an educational portal accessible to users of all
            ages. For users under the age of 16, we require parental consent
            before collecting any personal information. If you are under 16,
            please ensure you have permission from a parent or guardian before
            using our Service.
          </p>
          <p className="mt-2">
            Regarding premium accounts: While our educational content is
            available to all ages, premium accounts involving financial
            transactions require the account holder to be at least 18 years old
            or have explicit parental consent. Parents or legal guardians may
            purchase premium accounts on behalf of minors and manage the account
            settings.
          </p>
          <p className="mt-2">
            If we discover that we have collected personal information from a
            child under 16 without verification of parental consent, we will
            take steps to delete that information as quickly as possible.
          </p>
        </Section>

        <Section title="Changes to This Privacy Policy">
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "effective date" at the top of this page.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at {contactEmail}.
          </p>
        </Section>
      </div>
    </>
  );
}
