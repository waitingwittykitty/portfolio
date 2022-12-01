import NextImage from "next/image";
import MDXComponents from "@/components/Common/MDXComponents";
import Link from "@/components/Shared/Link";
import Tooltip from "@/components/Shared/Tooltip";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { CleanedAchievement } from "types/achievements";

const AchievementCard = ({
  title,
  date,
  prizeValue,
  proof,
  content,
  image,
}: Omit<CleanedAchievement, "id">): JSX.Element => {
  const AchievementMDX = useMDXComponent(content);

  return (
    <div className="flex rounded-xl border-[1px] border-tertiary bg-secondary/50 py-4 px-6 space-x-4">
      <div className="relative h-full shrink-0 w-36 transition duration-200 hover:opacity-60 md:h-full md:w-72">
        {image && (
          <NextImage
            className="rounded-xl"
            width={image.width}
            height={image.height}
            src={image.url}
            alt={proof.title}
          />
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold text-gray-100 ">{title}</h2>
        <div className="prose my-8 max-w-full leading-8">
          <AchievementMDX components={{ ...MDXComponents }} />
        </div>
        {proof && (
          <Link href={proof.url} noHighlight className="font-semibold">
            {proof.title}
          </Link>
        )}
        <div className="flex flex-row justify-between">
          {date && (
            <p className=" text-gray-300 ">{format(parseISO(date), "PPP")}</p>
          )}
          {prizeValue && (
            <Tooltip content={`Prize value: ${prizeValue}`}>
              <p className=" font-mono text-gray-400">Won {prizeValue}</p>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
