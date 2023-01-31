import NextImage from "next/image";
import ReactPlayer from "react-player";
import cx from "classnames";

import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import Link from "@/components/Shared/Link";
import { CloudinaryImage, CloudinaryVideo } from "contentlayer/generated";
import { GitHubLogo } from "@/components/Shared/Icons";
import { forwardRef } from "react";

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  image: CloudinaryImage;
  video: CloudinaryVideo;
  badges: string[];
  placeholderImage: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectProps>(
  (
    {
      slug,
      name,
      description,
      image,
      video,
      link,
      githubLink,
      placeholderImage,
      badges,
    }: ProjectProps,
    ref
  ): JSX.Element => {
    return (
      <div
        className={cx(
          "flex flex-col space-y-8 border border-tertiary bg-secondary/50",
          "p-4 md:flex-row md:space-y-0 md:space-x-8 group relative",
          "rounded-tl-huge rounded-bl-xl rounded-tr-xl rounded-br-huge",
          "hover:rounded-tl-xl hover:rounded-bl-huge hover:rounded-tr-huge hover:rounded-br-xl",
          "transition-all duration-300 ease-boop shadow-md shadow-cyan-600",
        )}
        ref={ref}
      >
        <div className="hidden group-hover:flex absolute right-2 top-0 gap-2 -translate-y-1/2">
          {badges && badges.map(badge => (
            <div
              className={cx(
                "bg-black px-2 py-0 rounded-md border border-tertiary",
                {
                  "text-green-400": badge === "Production",
                  "text-blue-400": badge === "Development"
                },
                "transition-all duration-500 hover:scale-110 ease-boop select-none",
              )}
              key={badge}
            >
              {badge}
            </div>
          ))}
        </div>
        <div className="overflow-hidden md:w-72 shrink-0 flex flex-col justify-center">
          <Link href={`/projects/${slug}`}>
            <div className="relative h-40 w-72 transition duration-200 hover:opacity-60">
              {image ? (
                <NextImage
                  className="rounded-xl"
                  layout="fill"
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  alt={name}
                />
              ) : video && (
                <ReactPlayer
                  width="100%"
                  height="100%"
                  className="rounded-xl"
                  url={video.url}
                  alt={name}
                />
              )}
            </div>
          </Link>
        </div>
        <div className="flex overflow-hidden flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <Link
              href={`/projects/${slug}`}
              className="transition duration-200 hover:opacity-60"
            >
              <h2 className="text-2xl font-bold">{name}</h2>
            </Link>
            <p className="text-sm text-gray-300">{description}</p>
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {link && (
                <Link className="flex-1" href={link} noHighlight>
                  {cleanLink(link)}
                </Link>
              )}
              {githubLink && (
                <Link className="flex-1" href={githubLink} icon={<GitHubLogo />} noHighlight>
                  {getGitHubOwnerAndRepoFromLink(githubLink)}
                </Link>
              )}
            </div>
          </div>
          <Link href={`/projects/${slug}`} className="mt-4" gradientUnderline>
            <p className="sr-only">Learn more about {name}</p>
            Learn More
          </Link>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
