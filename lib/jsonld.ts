import { absoluteUrl, profile, type Story } from "@/lib/profile";

export function personJsonLd() {
  const { personal, skills } = profile;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: personal.bio,
    email: `mailto:${personal.email}`,
    url: personal.siteUrl,
    sameAs: personal.socials.map((social) => social.url),
    knowsAbout: skills.flatMap((group) => group.items),
  };
}

export function webSiteJsonLd() {
  const { personal } = profile;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: personal.name,
    url: personal.siteUrl,
  };
}

export function articleJsonLd(story: Story) {
  const { personal } = profile;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    datePublished: story.date,
    url: absoluteUrl(`/stories/${story.slug}`),
    keywords: story.tags.join(", "),
    author: {
      "@type": "Person",
      name: personal.name,
      url: personal.siteUrl,
    },
  };
}
