import GhostSection from "./GhostSection";
import Sigil from "./Sigil";
import styles from "./AfterYouCall.module.css";

const steps = [
  {
    lbl: "The call",
    h: "You call. A real person answers.",
    p: "24/7. We listen, get the address, and gauge the danger. If it’s an emergency, we triage it on the spot."
  },
  {
    lbl: "The read",
    h: "We assess. You get a clear price.",
    p: "On site, with a clear written price. No mystery numbers, no surprises later."
  },
  {
    lbl: "The plan",
    h: "We schedule around the danger.",
    p: "Emergency, we move now. Planned, a date that works. Fully insured, references on request."
  },
  {
    lbl: "The work",
    h: "We bring the iron.",
    p: "Crane, rigging, low-impact equipment. Your lawn, lines, and structures protected the whole way down."
  }
];

export default function AfterYouCall() {
  return (
    <GhostSection
      src="/images/optimized/ghost-tree-service-hollow-trunk-removal-chainsaw-medina-oh.webp"
      className={styles.wrap}
      ariaLabel="What happens after you call"
    >
      <div className="wrap">
        <p className="kicker">What happens after you call</p>
        <h2 className={styles.h2}>From &ldquo;a tree&rsquo;s down&rdquo; to &ldquo;you&rsquo;d never know.&rdquo;</h2>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.lbl} className={styles.step}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className={`mono ${styles.lbl}`}>{s.lbl}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </li>
          ))}
          <li className={`${styles.step} ${styles.final}`}>
            <span className={styles.num} aria-hidden="true">
              05
            </span>
            <div>
              <span className={`mono ${styles.lbl}`}>The disappearance</span>
              <h3 className={styles.ghostH}>We leave like a ghost.</h3>
              <p>
                Hauled, chipped, raked. The hazard is gone and the property looks like we were never here. That&rsquo;s
                the whole promise.
              </p>
              <div className={styles.sig}>
                <Sigil size={34} />
                <span className="mono">GHOST TREE SERVICE · MEDINA COUNTY</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </GhostSection>
  );
}
