import { ICharacter } from "@interfaces";

type characteristics = Array<keyof Omit<ICharacter, "origin" | "location">>;

interface ICharacteristicsProps {
  data?: ICharacter;
  characteristics: characteristics;
}

export type { ICharacteristicsProps, characteristics };
