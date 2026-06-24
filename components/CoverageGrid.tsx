"use client";

import Link from "next/link";
import { type MouseEvent } from "react";
import styles from "./CoverageGrid.module.css";

type Town = { name: string; slug?: string };
type Group = { label?: string; towns: Town[] };

// Pointer-follow glow: write cursor position to CSS vars the ::before gradient reads.
function onMove(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function NodeGroup({ group, columns }: { group: Group; columns?: number }) {
  return (
    <div className={styles.group}>
      {group.label && <p className={`kicker ${styles.groupLabel}`}>{group.label}</p>}
      <div
        className={styles.nodes}
        data-cols={columns || undefined}
        onMouseMove={onMove}
        onMouseEnter={(e) => {
          e.currentTarget.dataset.active = "true";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.dataset.active = "false";
        }}
      >
        {group.towns.map((town) => {
          const inner = (
            <>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.label}>{town.name}</span>
              {town.slug && (
                <span className={styles.arrow} aria-hidden="true">
                  &rarr;
                </span>
              )}
            </>
          );
          return town.slug ? (
            <Link key={town.name} href={`/tree-service/${town.slug}/`} className={styles.node}>
              {inner}
            </Link>
          ) : (
            <span key={town.name} className={styles.node}>
              {inner}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function CoverageGrid({
  groups,
  className,
  columns
}: {
  groups: Group[];
  className?: string;
  columns?: number;
}) {
  return (
    <div className={`${styles.grid}${className ? ` ${className}` : ""}`}>
      {groups.map((g, i) => (
        <NodeGroup key={g.label ?? i} group={g} columns={columns} />
      ))}
    </div>
  );
}
