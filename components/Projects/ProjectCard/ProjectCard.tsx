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
          "flex flex-col space-y-8 rounded-xl border border-tertiary bg-secondary/50",
          "p-4 md:h-48 md:flex-row md:space-y-0 md:space-x-8 group relative"
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
                }
              )}
              key={badge}
            >
              {badge}
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-lg md:w-72">
          <Link href={`/projects/${slug}`}>
            <div className="relative h-36 w-full transition duration-200 hover:opacity-60 md:h-full md:w-72">
              {image && (
                <NextImage
                  className="rounded-xl"
                  layout="fill"
                  src={image.url}
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  alt={name}
                />
              )}

              {video && (
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
        <div className="flex flex-1 flex-col justify-between">
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
                <Link href={link} noHighlight>
                  {cleanLink(link)}
                </Link>
              )}
              {githubLink && (
                <Link className="truncate" href={githubLink} icon={<GitHubLogo />} noHighlight>
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
