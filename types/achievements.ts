import type { CloudinaryImage } from "contentlayer/generated";

export interface CleanedAchievement {
  id: string;
  title: string;
  date?: string;
  prizeValue?: string;
  proof?: Proof;
  image?: CloudinaryImage;
  content: string;
}

export interface Proof {
  title: string;
  url: string;
}
