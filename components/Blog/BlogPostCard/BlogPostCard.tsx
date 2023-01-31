import NextImage from "next/image";
import cx from "classnames";

import Link from "@/components/Shared/Link";
import { CloudinaryImage } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface BlogPostCardProps {
  slug: string;
  title: string;
  image: CloudinaryImage;
  date: string;
  readingTime: string;
}

const ProjectCard = ({
  slug,
  title,
  image,
  date,
  readingTime,
}: BlogPostCardProps): JSX.Element => {
  return (
    <article
      className={cx(
        "rounded-tl-huge rounded-bl-xl rounded-tr-xl rounded-br-huge shadow-md shadow-cyan-600",
        "hover:rounded-tl-xl hover:rounded-bl-huge hover:rounded-tr-huge hover:rounded-br-xl",
        "flex max-w-lg flex-col-reverse border-[1px] border-tertiary",
        "bg-secondary py-4 px-6 transition-all duration-300 ease-boop",
      )}
    >
      <div>
        <Link href={`/blog/${slug}`} className="flex-col space-y-4">
          <h2 className="text-lg font-semibold transition duration-200 hover:opacity-60">
            {title}
          </h2>
          <p className="text-gray-300 transition duration-200 hover:opacity-60">
            {format(parseISO(date), "PPP")} / {readingTime}
          </p>
        </Link>
      </div>
      <Link href={`/blog/${slug}`} className="aspect-[16/9]">
        <NextImage
          src={image.url}
          height={image.height}
          width={image.width}
          className="rounded-special drop-shadow-md transition duration-200 hover:opacity-60"
        />
      </Link>
    </article>
  );
};

export default ProjectCard;
