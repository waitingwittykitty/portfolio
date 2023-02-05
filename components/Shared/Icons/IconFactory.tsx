import { SVGProps } from "react";
import { X } from "react-feather";

import {
  NextJSLogo,
  TypescriptLogo,
  XdoXLogo,
  ReactLogo,
  FigmaLogo,
  GoLogo,
  TailwindCSSLogo,
  NotigerLogo,
  TwNFTLogo,
  SecliLogo,
  ApptomatorLogo,
  MetaVirusLogo,
  QuizBuilderLogo,
  Argon2idLogo,
  SlaybooLogo,
  RosoDBLogo,
  OneSecondDiaryLogo,
  NIHLogo,
} from ".";
import StorliLogo from "./Storli";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case "nextjs":
      return <NextJSLogo {...otherProps} />;
    case "typescript":
      return <TypescriptLogo {...otherProps} />;
    case "xdox":
      return <XdoXLogo {...otherProps} />;
    case "figma":
      return <FigmaLogo {...otherProps} />;
    case "tailwindcss":
      return <TailwindCSSLogo {...otherProps} />;
    case "go":
      return <GoLogo {...otherProps} />;
    case "react":
      return <ReactLogo {...otherProps} />;
    case "notiger":
      return <NotigerLogo {...otherProps} />;
    case "twnft":
      return <TwNFTLogo {...otherProps} />;
    case "storli":
      return <StorliLogo {...otherProps} />;
    case "secli":
      return <SecliLogo {...otherProps} />;
    case "apptomator":
      return <ApptomatorLogo {...otherProps} />;
    case "nih":
      return <NIHLogo {...otherProps} />;
    case "metavirus":
      return <MetaVirusLogo {...otherProps} />;
    case "quiz-builder":
      return <QuizBuilderLogo {...otherProps} />;
    case "argon2id":
      return <Argon2idLogo {...otherProps} />;
    case "slayboo":
      return <SlaybooLogo {...otherProps} />;
    case "rosodb":
      return <RosoDBLogo {...otherProps} />;
    case "one-second-diary":
      return <OneSecondDiaryLogo {...otherProps} />;
    default:
      return <X />;
  }
};

export default IconFactory;
