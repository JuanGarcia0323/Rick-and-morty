interface IOrigin {
  name: string;
  url: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: IOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type { ICharacter };
