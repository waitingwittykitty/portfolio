import { ReactNode } from "react";

import {
  DiscordLogo,
  GitHubLogo,
  StackoverflowLogo,
  XingLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
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
];

export default socials;
