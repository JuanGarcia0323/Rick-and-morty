import { ISidebarMoreInfoProps } from "@interfaces";

const SidebarMoreInfo = ({ episodes, image }: ISidebarMoreInfoProps) => {
  return (
    <div className="flex md:flex-col gap-4 items-center window-black p-4 h-2/6 md:h-full w-full md:w-auto">
      <img src={image} className="rounded-md shadow-md w-40 h-40 md:w-auto" />
      <div className="flex flex-col gap-4 overflow-hidden h-full">
        <h4 className="md:text-2xl border-b-2 border-primary-300">
          Appearances:
        </h4>
        <ul className="flex flex-col overflow-y-auto overflow-x-hidden  h-full items-center gap-2 scrollbar-default px-2">
          {!!episodes &&
            episodes?.map(({ name }) => (
              <li
                key={name}
                className="w-full p-2 window text-center text-sm tracking-tighter md:text-base md:tracking-normal"
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMoreInfo;
