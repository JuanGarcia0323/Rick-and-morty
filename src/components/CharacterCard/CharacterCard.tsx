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
    <div className="window w-full h-full rounded-md flex flex-col gap-4 text-white font-bold overflow-hidden group p-3 hover:p-0 transition-all duration-500 ease-in-out cursor-pointer relative">
      <img
        src={image}
        className="object-cover h-full rounded-md group-hover:blur-md transition-all duration-300 ease-in-out"
      ></img>
      <section className="w-full h-0 absolute bottom-0 left-0 window duration-500 ease-out transition-all flex flex-col gap-1 group-hover:p-4 group-hover:h-full font-medium font-mono text-primary-300">
        <div className="flex flex-col">
          <title className="inline-block relative text-xl">
            Known information:
          </title>
          <span className="w-0 border border-primary-300 transition-all duration-700 ease-in-out group-hover:w-[95%]"></span>
        </div>
        {listData.map((key) => (
          <h3 className="">
            {key}: {data[key]}
          </h3>
        ))}
      </section>
    </div>
  );
};

export default CharacterCard;
