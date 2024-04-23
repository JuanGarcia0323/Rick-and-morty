import { ICharacter } from "@interfaces";

interface ICardCarrouselProps {
  className?: string;
  title?: string;
  data: Array<ICharacter | undefined>;
  loading?: boolean;
}

export type { ICardCarrouselProps };
