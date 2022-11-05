import { NextPage } from "next";
import Giscus from "@giscus/react";
import { NextSeo } from "next-seo";

const GuestBookPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Guestbook | Harry Schiller"
        description="Leave messages on Harry Stage Guests"
      />
      <h1 className="text-3xl font-bold">Guests</h1>
      <p className="mt-4 text-gray-300">Leave a message :)</p>
      <div className="mt-16">
        <Giscus
          id="comments"
          repo="waitingwittykitty/harry-stage"
          repoId="R_kgDOGfn4eQ"
          category="Comments"
          categoryId="DIC_kwDOGfn4ec4CO-cF"
          mapping="specific"
          term="GuestBook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default GuestBookPage;
