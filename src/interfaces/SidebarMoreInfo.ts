import { IEpisode } from "@interfaces";
interface ISidebarMoreInfoProps {
  image?: string;
  episodes: Array<IEpisode | undefined>;
  loading: boolean;
  alt?: string;
}

export type { ISidebarMoreInfoProps };
