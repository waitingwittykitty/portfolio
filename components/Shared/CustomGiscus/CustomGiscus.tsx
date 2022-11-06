import Giscus from "@giscus/react";

interface CustomGiscusProps {
  term: string;
}

const CustomGiscus = ({ term }: CustomGiscusProps) => {
  return (
    <Giscus
      id="comments"
      repo="waitingwittykitty/harry-stage"
      repoId="R_kgDOIX8_Yg"
      category="Comments"
      categoryId="DIC_kwDOIX8_Ys4CSZSz"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default CustomGiscus;
