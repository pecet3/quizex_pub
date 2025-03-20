/* eslint-disable */
import { Section } from "@/components/DocumentsCompontents";
import Link from "next/link";

export default function Home() {
  const appName = "Quizex";
  const effectiveDate = "April 1, 2025";

  return (
    <main className="max-w-4xl w-full m-auto p-2 min-h-[72vh]">
      <div className="mt-20"></div>

      <h1 className="text-2xl font-bold mb-4">{appName} Payments Policy</h1>
      <p className="text-sm text-gray-600">Effective: {effectiveDate}</p>

      <div className="space-y-6 mt-6">
        <Section title="1. Payment Process">
          <p>
            Payments for {appName} Premium are processed securely through
            Stripe. Users can purchase a Premium plan for a specified period, as
            detailed on our{" "}
            <a href="/pricing" className="text-blue-500">
              Pricing
            </a>{" "}
            page.
          </p>
        </Section>

        <Section title="2. Non-Subscription Model">
          <p>
            {appName} does not use automatic subscription renewals. We believe
            automatic renewals may not be in the best interest of our users.
            Therefore, Premium access is not extended automatically, and users
            must manually purchase additional periods.
          </p>
        </Section>

        <Section title="3. Extending Premium Access">
          <p>
            If a user purchases a new Premium plan while their current Premium
            period is still active, the new period will be added to the
            remaining duration (e.g., if 30 days are added, the Premium access
            extends accordingly).
          </p>
        </Section>

        <Section title="4. No Refund Policy">
          <p>
            All payments for {appName} Premium are final. Due to the nature of
            digital services, we do not offer refunds or cancellations once a
            purchase has been made. By completing a purchase, users acknowledge
            and agree to this policy.
          </p>
        </Section>
      </div>
    </main>
  );
}
