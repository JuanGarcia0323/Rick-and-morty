import { ICardCarrouselProps } from "@interfaces";
import CharacterCard from "@components/CharacterCard/CharacterCard";

const CardCarrousel = ({ data, className, title }: ICardCarrouselProps) => {
  if (data.length < 2) {
    return "";
  }
  return (
    <section className="h-full w-full overflow-hidden">
      <h3 className="text-sm w-full overflow-hidden text-ellipsis text-nowrap tracking-tighter md:text-base md:tracking-normal">
        {title} - Residents
      </h3>
      <div
        className={`flex w-full h-fit max-h-60 flex-nowrap overflow-y-hidden scrollbar-default overflow-x-auto gap-4 ${className}`}
      >
        {data.map((d) => (
          <CharacterCard
            key={d.id + (title ?? "")}
            data={d}
            className="w-full text-sm md:text-base"
            imageClassName="w-1/3 md:w-1/3"
          />
        ))}
      </div>
    </section>
  );
};

export default CardCarrousel;
