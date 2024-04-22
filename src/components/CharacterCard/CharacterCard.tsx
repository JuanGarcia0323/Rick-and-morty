import { ICharacterCardProps } from "@interfaces";
import { motion } from "framer-motion";
import Logic from "./Logic";

const CharacterCard = ({ data, className, index }: ICharacterCardProps) => {
  const { navigateCharacter, image, listData } = Logic({ data });

  return (
    <motion.div
      initial={{ height: "0%" }}
      animate={{ height: "100%" }}
      transition={{ delay: 0.2 * (index ?? 1) }}
      className={`window w-full h-full md:h-full rounded-md flex gap-4 text-white font-bold overflow-hidden group hover:p-0 transition-all duration-500 ease-in-out cursor-pointer relative min-w-80 min-h-60 ${
        className ?? ""
      }`}
    >
      <div className="p-2">
        <img
          src={image}
          className="object-cover rounded-md group-hover:blur-md group-hover:opacity-50 transition-all duration-300 ease-in-out h-fit shadow-md"
          width={120}
          height={120}
        />
      </div>
      <section
        className="right-0 top-0 w-[60%] h-full gap-2 window duration-500 ease-out transition-all flex flex-col font-medium font-mono text-primary-900 group-hover:text-primary-300 p-3 rounded-none absolute group-hover:w-full  group-hover:window-black"
        onClick={navigateCharacter}
      >
        <div className="flex flex-col">
          <title className="inline-block relative text-lg text-primary-900 group-hover:text-primary-300">
            Known information:
          </title>
          <span className="w-0 opacity-0 border border-primary-300 transition-all duration-700 ease-in-out group-hover:w-[95%] group-hover:opacity-100"></span>
        </div>
        {listData.map((key) => (
          <h3
            className="w-full text-ellipsis h-fit text-nowrap overflow-hidden"
            key={key}
          >
            {key.toUpperCase()}: {data[key]}
          </h3>
        ))}
      </section>
    </motion.div>
  );
};

export default CharacterCard;
