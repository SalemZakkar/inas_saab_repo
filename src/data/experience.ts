import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Flutter Developer",
    organisation: {
      name: "ASINNAH Academy",
      href: "https://academy.asinnah.com/en",
    },
    date: "JUN 2025 - PRESENT",
    location: "Homs, Syria - Full time",
    description: `
Developed and maintained an academic mobile application for browsing, purchasing, and managing full and partial courses.\n
Integrated deep linking for direct course access with authentication-aware routing.\n
Implemented online and offline access to course content, including video playback and textual documents (PDF and text-based resources), with reliable buffering and enhanced error handling.\n
Implemented secure user authentication and account management using Telegram login.\n
Utilized BLoC (Cubit) for efficient and scalable state management.\n
Successfully deployed the application and ensured stable performance for active users in Homs.
    `,
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.asinnahaacademy",
        type: "play",
      },
    ],
  },
  {
    title: "Flutter Developer",
    organisation: {
      name: "Task App",
      href: "#",
    },
    date: "SEP 2024 - JAN 2025",
    location: "Syria - Freelance",
    description: `
Built a task and event management app where users can add, delete, edit, and manage notifications for tasks, activities, and events.\n
Designed a home page that shows completed and incomplete tasks with filtering options for easy tracking.\n
Integrated Google Maps to select event locations, improving accuracy and navigation.\n
Provided statistics to monitor performance daily, weekly, monthly, or overall.
    `,
  },
  {
    title: "Flutter Developer",
    organisation: {
      name: "Click",
      href: "#",
    },
    date: "JUN 2024 - OCT 2024",
    location: "Homs, Syria - Freelance",
    description: `
Built a mobile commerce app serving users in Homs with browsing, ordering, and delivery flows.\n
Integrated Google Maps for product browsing and delivery location selection.\n
Implemented secure phone number verification using SMS one-time passwords.\n
Integrated in-app payments through Bank Al-Sham for fast and reliable local transactions.
    `,
  },
  {
    title: "Flutter Developer",
    organisation: {
      name: "Velveta",
      href: "#",
    },
    date: "MAY 2024 - SEP 2024",
    location: "Syria - Freelance",
    description: `
Implemented secure account creation and login with email verification.\n
Built product listing pages with full product details for an easy and enjoyable shopping experience.\n
Developed a cart system with options like quantity, color, and style for a personalized experience.\n
Supported favorites lists and secure payments through MyFatoorah, making checkout fast and reliable.
    `,
  },
  {
    title: "Flutter Developer",
    organisation: {
      name: "National Exam",
      href: "#",
    },
    date: "AUG 2023 - JAN 2024",
    location: "Syria - Freelance",
    description: `
Built an application for students to practice tests and access study materials.\n
Added personal pages with exam notifications, including support for master's students.\n
Enabled students to share resources and collaborate to learn better.
    `,
  },
];
