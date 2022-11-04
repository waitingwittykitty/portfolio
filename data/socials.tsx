import { ReactNode } from "react";

import {
  DiscordLogo,
  // DevToLogo,
  GitHubLogo,
  StackoverflowLogo,
  XingLogo,
  // HashnodeLogo,
  // Twitterlogo,
  // YouTubeLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  // {
  //   id: "twitter",
  //   name: "Twitter",
  //   url: "https://twitter.com/waitingwittykitty",
  //   icon: <Twitterlogo color="#1DA1F2" />,
  // },
  {
    id: "xing",
    name: "Xing",
    url: "https://www.xing.com/profile/Harry_Schiller2",
    icon: <XingLogo />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/waitingwittykitty",
    icon: <GitHubLogo />,
  },
  {
    id: "stackoverflow",
    name: "Stackoverflow",
    url: "https://stackoverflow.com/users/20005802/harry-schiller",
    icon: <StackoverflowLogo />,
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discordapp.com/users/Schilosaurus#4824",
    icon: <DiscordLogo />,
  },
  // {
  //   id: "youtube",
  //   name: "YouTube",
  //   url: "https://www.youtube.com/anishtechtutorials",
  //   icon: <YouTubeLogo color="#ff0000" />,
  // },
  // {
  //   id: "hashnode",
  //   name: "Hashnode",
  //   url: "https://hashnode.com/@hryschiller",
  //   icon: <HashnodeLogo color="#2962ff" />,
  // },
  // {
  //   id: "dev.to",
  //   name: "Dev.to",
  //   url: "https://dev.to/hryschiller",
  //   icon: <DevToLogo color="#f0f0f0" />,
  // },
];

export default socials;
