import { ICharacterCardProps, ICharacter } from "@interfaces";

const CharacterCard = ({ data }: ICharacterCardProps) => {
  const { image } = data;

  const listData: Array<keyof Omit<ICharacter, "origin" | "location">> = [
    "name",
    "gender",
    "status",
    "species",
    "status",
  ];

  return (
    <div className="window w-full h-full rounded-md flex gap-4 text-white font-bold overflow-hidden group hover:p-0 transition-all duration-500 ease-in-out cursor-pointer relative hover:bg-black/90 ">
      <img
        src={image}
        className="object-cover rounded-md group-hover:blur-md group-hover:opacity-50 transition-all duration-300 ease-in-out h-fit"
        width={100}
        height={100}
      />
      <section className="right-0 top-0 w-2/3 h-full window duration-500 ease-out transition-all flex flex-col font-medium font-mono text-primary-900 group-hover:text-primary-300 p-3 rounded-none absolute group-hover:w-full gap-1">
        <div className="flex flex-col">
          <title className="inline-block relative text-lg text-primary-900 group-hover:text-primary-300">
            Known information:
          </title>
          <span className="w-0 opacity-0 border border-primary-300 transition-all duration-700 ease-in-out group-hover:w-[95%] group-hover:opacity-100"></span>
        </div>
        {listData.map((key) => (
          <h3 className="">
            {key.toUpperCase()}: {data[key]}
          </h3>
        ))}
      </section>
    </div>
  );
};

export default CharacterCard;
