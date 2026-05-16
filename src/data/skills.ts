import {
  SiAndroid,
  SiAndroidstudio,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglemaps,
  SiPostman,
  SiStripe,
  SiVisualstudiocode,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "",
    skills: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        icon: SiDart,
      },
      {
        name: "BLoC / Cubit",
        icon: SiFlutter,
      },
      {
        name: "Hive",
        icon: SiFlutter,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "FCM",
        icon: SiFirebase,
      },
      {
        name: "REST API",
        icon: SiPostman,
      },
      {
        name: "Google Maps",
        icon: SiGooglemaps,
      },
      {
        name: "Stripe",
        icon: SiStripe,
      },
      {
        name: "Android",
        icon: SiAndroid,
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
      },
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
    ],
  },
];
