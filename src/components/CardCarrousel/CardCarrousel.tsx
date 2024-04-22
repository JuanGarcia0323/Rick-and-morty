import { ICardCarrouselProps } from "@interfaces";
import CharacterCard from "@components/CharacterCard/CharacterCard";

const CardCarrousel = ({ data, className, title }: ICardCarrouselProps) => {
  if (data.length < 2) {
    return "";
  }
  return (
    <section className="h-full w-full overflow-hidden">
      <h3>{title} - Residents</h3>
      <div
        className={`flex w-full flex-nowrap overflow-y-hidden overflow-x-auto gap-4 ${className}`}
      >
        {data.map((d) => (
          <CharacterCard data={d} className="w-full lg:h-60 text-sm" />
        ))}
      </div>
    </section>
  );
};

export default CardCarrousel;
