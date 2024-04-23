import { ICharacteristicsProps } from "@interfaces";

const Characteristics = ({ characteristics, data }: ICharacteristicsProps) => {
  return (
    <dl>
      <dt className="inline-block font-bold tracking-tight  md:text-4xl w-full border-b-2 border-primary-300 mb-2">
        {data?.name}
      </dt>
      {characteristics.map((key) => (
        <dd
          className="w-full text-ellipsis h-fit text-nowrap overflow-hidden text-primary-300 px-4 md:py-2"
          key={key}
        >
          {key.toUpperCase()}: {data && data[key]}
        </dd>
      ))}
    </dl>
  );
};

export default Characteristics;
