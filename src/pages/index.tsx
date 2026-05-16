import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.js";

export default function Home() {
  return (
    <>
         <NextSeo
        title="Inas Saab | Flutter Mobile App Developer"
        description="Inas Saab is a Flutter Mobile App Developer with over 4 years of experience building Android and iOS applications."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Inas Saab - Flutter Mobile App Developer",
          description:
            "Portfolio of Inas Saab, a Flutter Mobile App Developer building high-quality, user-friendly Android and iOS apps.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Flutter developer portfolio, Mobile App Developer, Flutter, Dart, BLoC, Cubit, Firebase, Hive, Google Maps, Stripe",
          },
        ]}
      />
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
    </>
  );
}
