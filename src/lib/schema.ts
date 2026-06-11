import { site } from "~/data/site";

/**
 * JSON-LD builders. Everything here states only what the visible site
 * already claims; no metrics, ratings, or dates are invented.
 */

export function personSchema(origin: string) {
  return {
    "@type": "Person",
    "@id": `${origin}/#person`,
    name: "Jack Chicquen",
    alternateName: "JP Chicquen",
    jobTitle: "UX/UI Designer & Digital Marketing Specialist",
    email: `mailto:${site.email}`,
    url: `${origin}/`,
    sameAs: [site.linkedin],
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Queen Margaret's School",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "British Columbia",
      addressCountry: "CA",
    },
  };
}

export function websiteSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: `${origin}/`,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${origin}/#person` },
      },
      personSchema(origin),
    ],
  };
}

export function profilePageSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema(origin),
  };
}

export function caseStudySchema(opts: {
  origin: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  categoryLabel: string;
  categoryHref: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: opts.title,
        description: opts.description,
        url: opts.url,
        keywords: opts.tags.join(", "),
        creator: {
          "@type": "Person",
          name: "Jack Chicquen",
          url: `${opts.origin}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Work",
            item: `${opts.origin}/work/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: opts.categoryLabel,
            item: `${opts.origin}${opts.categoryHref}/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: opts.title,
            item: opts.url,
          },
        ],
      },
    ],
  };
}
