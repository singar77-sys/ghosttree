import type { Metadata } from "next";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ghost Tree Service collects and uses the information you share through this website.",
  alternates: { canonical: "/privacy/" }
};

export default function PrivacyPage() {
  return (
    <section className={`wrap ${styles.legal}`}>
      <p className="kicker">Privacy</p>
      <h1 className={styles.h1}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated June 2026</p>

      <p>
        Ghost Tree Service (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains what we
        collect when you use this website and how we use it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us.</strong> When you submit a quote request we collect your name and phone
          number, and &mdash; if you choose to provide them &mdash; your email, property address, and a description of
          your job.
        </li>
        <li>
          <strong>Basic usage data.</strong> We use privacy-friendly, cookieless analytics to count page visits and
          understand what&rsquo;s useful. We don&rsquo;t use advertising cookies or cross-site tracking.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your request, prepare a quote, and schedule your work.</li>
        <li>To send you a confirmation that we received your request.</li>
        <li>To keep the website working and make it better.</li>
      </ul>
      <p>We do not sell your information.</p>

      <h2>Service providers</h2>
      <p>We share information only with the vendors that help us run the business:</p>
      <ul>
        <li>
          <strong>Resend</strong> &mdash; delivers our quote-request and confirmation emails.
        </li>
        <li>
          <strong>Vercel</strong> &mdash; website hosting and privacy-friendly analytics.
        </li>
      </ul>
      <p>These providers process information on our behalf, not for their own marketing.</p>

      <h2>Cookies</h2>
      <p>The only storage we rely on remembers your light or dark theme preference. Our analytics is cookieless.</p>

      <h2>Data retention</h2>
      <p>
        We keep quote requests as long as we need them to serve you and for ordinary business records, then remove them.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access or delete the information you&rsquo;ve shared &mdash; just call or email and we&rsquo;ll
        take care of it.
      </p>

      <h2>Children</h2>
      <p>This site isn&rsquo;t directed at children under 13, and we don&rsquo;t knowingly collect their information.</p>

      <h2>Changes</h2>
      <p>If we update this policy, we&rsquo;ll change the &ldquo;last updated&rdquo; date above.</p>

      <h2>Contact</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
        <br />
        <a href={site.phoneHref}>{site.phone}</a> &middot; <a href={site.emailHref}>{site.email}</a>
      </p>
    </section>
  );
}
