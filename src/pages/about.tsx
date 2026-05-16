import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.js";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Inas Saab | Flutter Mobile App Developer"
        description="Learn more about Inas Saab, a Flutter Mobile App Developer with over 4 years of experience in IT."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Inas Saab - Flutter Mobile App Developer",
          description:
            "Dive into the story of Inas Saab, a Flutter Mobile App Developer. Discover the experience, skills, and passion behind the apps.",
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
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
