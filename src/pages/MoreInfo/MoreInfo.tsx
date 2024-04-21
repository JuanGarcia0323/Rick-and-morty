import { useParams } from "react-router-dom";
import { useMoreInfo } from "@queries";
const MoreInfo = () => {
  const { id } = useParams();
  const { data } = useMoreInfo(+id!);
  console.log(data);

  return <div>{id}</div>;
};

export default MoreInfo;
