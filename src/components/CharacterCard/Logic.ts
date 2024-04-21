import { useNavigate } from "react-router-dom";
import { routes } from "@routes";
import { ICharacterCardProps, ICharacter } from "@interfaces";

const Logic = ({ data }: ICharacterCardProps) => {
  const navigate = useNavigate();
  const navigateCharacter = () =>
    navigate(routes.moreInfo.replace(":id", data.id.toString()));

  const listData: Array<keyof Omit<ICharacter, "origin" | "location">> = [
    "name",
    "gender",
    "status",
    "species",
  ];

  return { navigateCharacter, image: data.image, listData };
};

export default Logic;
