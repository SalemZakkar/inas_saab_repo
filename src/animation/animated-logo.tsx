// import { AnimatePresence, Variants, motion } from "framer-motion";

// export default function AnimatedLogo() {
//   const iconVariant: Variants = {
//     hidden: {
//       pathLength: 0,
//       fill: "rgba(20, 184, 166, 0)", // Transparent version of your teal
//     },
//     visible: {
//       pathLength: 1,
//       fill: "rgba(20, 184, 166, 0)", // Kept transparent to show the "stroke" look, or change to #14B8A6 to fill it in
//     },
//   };

//   return (
//     <AnimatePresence>
//       <motion.svg
//         width="200"
//         height="200"
//         viewBox="0 0 100 100"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-full w-full"
//       >
//         <motion.path
//           d="M70 30 C70 15, 30 15, 30 35 C30 50, 70 50, 70 65 C70 85, 30 85, 30 70"
//           stroke="#14B8A6"
//           strokeWidth="8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           variants={iconVariant}
//           initial="hidden"
//           animate="visible"
//           transition={{
//             default: { duration: 2, ease: "easeInOut" },
//             fill: { duration: 2, ease: [1, 0, 0.8, 1] },
//           }}
//         />
//       </motion.svg>
//     </AnimatePresence>
//   );
// }