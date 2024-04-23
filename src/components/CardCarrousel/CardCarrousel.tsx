import { ICardCarrouselProps } from "@interfaces";
import CharacterCard from "@components/CharacterCard/CharacterCard";
import LoadingPanel from "@components/LoadingPanel/LoadingPanel";

const CardCarrousel = ({
  data,
  className,
  title,
  loading,
}: ICardCarrouselProps) => {
  if (data.length < 2) {
    return "";
  }

  if (loading) {
    return <LoadingPanel />;
  }

  return (
    <section className="h-full w-full overflow-hidden">
      <h3 className="text-sm w-full overflow-hidden text-ellipsis text-nowrap tracking-tighter md:text-base md:tracking-normal">
        {title} - Residents
      </h3>
      <div
        className={`flex w-full h-fit max-h-60 flex-nowrap overflow-y-hidden scrollbar-default overflow-x-auto gap-4 ${className}`}
      >
        {data.map((d) =>
          d ? (
            <CharacterCard
              key={d.id + (title ?? "")}
              data={d}
              className="w-full text-sm md:text-base"
              imageClassName="w-[37%] md:w-[37%]"
            />
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
};

export default CardCarrousel;
