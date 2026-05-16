import { type ProjectCardProps } from "@/components/projects/project-card";

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "ASINNAH Academy",
    favicon: "/favicon.ico",
    imageUrl: ["/favicon.ico"],
    description:
      "An academic mobile application for browsing, purchasing, and managing full and partial courses. Features deep linking with authentication-aware routing, secure Telegram-based login, and reliable online/offline access to video content and PDF/text resources with enhanced buffering and error handling. Built with BLoC (Cubit) for scalable state management and deployed for active users in Homs.",
    tags: ["Flutter", "BLoC", "Hive", "Deep Linking", "Telegram Auth"],
  },
  {
    name: "Event Management (Graduation Project)",
    favicon: "/favicon.ico",
    imageUrl: ["/favicon.ico"],
    description:
      "Graduation project for end-to-end event management. Integrated Firebase for secure authentication, Google Maps for location handling, and Stripe for seamless payments. Includes an interactive chatbot for personalized event planning and richer user interaction.",
    tags: ["Flutter", "Firebase", "Google Maps", "Stripe", "Chatbot"],
  },
  {
    name: "Enaya App (4th Year Project)",
    favicon: "/favicon.ico",
    imageUrl: ["/favicon.ico"],
    description:
      "A healthcare app tailored for the elderly, featuring secure authentication, medication and activity tracking, and personalized health guidance. Provides accessible disease information and condition-specific support to help users manage their daily health routines.",
    tags: ["Flutter", "Firebase", "Healthcare", "Authentication"],
  },
  {
    name: "Task App",
    favicon: "/favicon.ico",
    imageUrl: ["/favicon.ico"],
    description:
      "A productivity app where users can add, delete, edit, and manage notifications for tasks, activities, and events. The home page shows completed and incomplete tasks with filtering options. Integrated Google Maps for selecting event locations and statistics views to monitor performance daily, weekly, monthly, or overall.",
    tags: ["Flutter", "Google Maps", "Notifications"],
  },
  {
    name: "Velveta",
    favicon: "/favicon.ico",
    imageUrl: ["/favicon.ico"],
    description:
      "An e-commerce app where users can create accounts and log in securely with email verification, browse a wide range of products with full details, and add items to their cart with options like quantity, color, and style. Supports favorites lists and secure payments through MyFatoorah for a fast and reliable shopping experience.",
    tags: ["Flutter", "E-commerce", "MyFatoorah", "Authentication"],
  },
  {
    name: "National Exam",
    favicon: "/favicon.ico",
    imageUrl: ["/favicon.ico"],
    description:
      "A study app where students can practice tests and access study materials. Includes personal pages with exam notifications (including for master's students) and a resource-sharing feature that lets students collaborate and learn together.",
    tags: ["Flutter", "Education", "Notifications"],
  },
];
