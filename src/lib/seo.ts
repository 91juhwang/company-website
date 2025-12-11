export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.jshippit.com";

export const defaultTitle = "Ship Ideas into Impacts";
export const defaultDescription =
  "Ship Ideas to Impacst: Custom Software, Websites, Automation, AI.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ship Ideas",
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
