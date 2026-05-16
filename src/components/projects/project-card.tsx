import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref?: string;
  liveWebsiteHref?: string;
  googlePlayHref?: string;
  appStoreHref?: string;
  tags?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 text-foreground sm:p-4">
        {/* Header with favicon and name */}
        <div className="flex items-center gap-3">
          <span className="relative h-5 w-5">
            <Image src={props.favicon} alt="logo" fill />
          </span>
          <span className="text-sm font-semibold">{props.name}</span>
        </div>

        {/* Description */}
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>

          {/* Tags */}
          {props.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/20 px-2 py-1 text-xs font-semibold text-accent dark:bg-accent/30 dark:text-accent"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center justify-end gap-6">
          {props.sourceCodeHref && (
            <a
              href={props.sourceCodeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <GithubIcon className="h-5 w-5" /> Source code
            </a>
          )}
          {props.googlePlayHref && (
            <a
              href={props.googlePlayHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <SiGoogleplay className="h-5 w-5" /> GooglePlay
            </a>
          )}
          {props.appStoreHref && (
            <a
              href={props.appStoreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <SiAppstore className="h-5 w-5" /> AppStore
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}