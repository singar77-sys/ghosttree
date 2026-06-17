import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import AfterYouCall from "@/components/AfterYouCall";
import TrustLine from "@/components/TrustLine";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Get a Free Tree Service Quote",
  description:
    "Request a free quote from Ghost Tree Service in Medina County, OH. Tell us about the job, add photos, and we'll call you back. Emergency? Call (330) 907-6403, 24/7.",
  alternates: { canonical: "/quote/" }
};

export default function QuotePage() {
  return (
    <>
      <section className={`wrap ${styles.top}`}>
        <div className={styles.intro}>
          <p className="kicker">Free quote</p>
          <h1 className={styles.h1}>Tell us about the tree.</h1>
          <p className={styles.lead}>
            Send the details and a few photos. We&rsquo;ll call you back with a clear price. Free, no obligation.
            Storm emergency? Don&rsquo;t wait on a form. Call or text <a href={site.phoneHref}>{site.phone}</a>, 24/7.
          </p>
          <a href={site.phoneHref} className="btn btn-call">
            Call 24/7 · {site.phone}
          </a>
          <TrustLine />
        </div>
        <div className={styles.formWrap}>
          <QuoteForm />
        </div>
      </section>
      <AfterYouCall />
    </>
  );
}
