import type { CollectionEntry } from "astro:content";

export type ProjectCategory = CollectionEntry<"projects">["data"]["category"];

/** Short context line shown above card titles and on case-study back links. */
export function eyebrowFor(category: ProjectCategory): string {
  if (category === "qms") return "QMS · Internal";
  if (category === "tasis") return "TASIS";
  return "Personal";
}

/** Clean names used in breadcrumbs; match the category pages they lead to. */
export const categoryLabels: Record<ProjectCategory, string> = {
  qms: "QMS",
  tasis: "TASIS",
  personal: "Personal Projects",
};

export const categoryHrefs: Record<ProjectCategory, string> = {
  qms: "/work/qms",
  tasis: "/work/tasis",
  personal: "/work/personal",
};

/** Derived flags from the free-form status string. */
export function statusFlags(status?: string) {
  const s = (status ?? "").toLowerCase();
  const isComingSoon = s.includes("coming");
  const isInProgress = s.includes("progress");
  return {
    isComingSoon,
    isInProgress,
    /** True for any not-yet-finished state; drives the accent tag. */
    isUnderway:
      isComingSoon || isInProgress || s.includes("ongoing") || s.includes("planned"),
  };
}
