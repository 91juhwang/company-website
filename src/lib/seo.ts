export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const defaultTitle = "Ship Ideas Studio";
export const defaultDescription =
  "From Idea to Impact: Custom Software, Websites, Automation, AI.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ship Ideas Studio",
  url: siteUrl,
  logo: `${siteUrl}/vercel.svg`,
  sameAs: [] as string[],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["en", "ko"],
    },
  ],
};
