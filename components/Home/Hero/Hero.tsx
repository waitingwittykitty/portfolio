import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.png";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Harry Schiller
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Fullstack Web Developer • Web3 Enthusiast • Blogger • Tech Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          He is a promising web developer who has shown outstanding talent in the web development field for 7 years.
          Possessing a wide and in-depth knowledge of the web development field, he has developed numerous popular
          websites and has attracted the attention of advanced companies. He excelled in problem-solving skills and
          solved even the most complex problems in a short period of time, drawing the admiration of his fellow
          developers by writing code that others could easily understand.
        </p>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          After graduating from a prestigious university, he has a lot of pride in himself, but he never looks down on
          other people and maintains good relations with all the developers, so he has been well received by the public.
        </p>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          He, who has already achieved remarkable achievements in the field of web development, is now waiting for a
          new challenge.
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Harry Schiller"
        />
      </div>
    </div>
  );
};

export default Hero;
