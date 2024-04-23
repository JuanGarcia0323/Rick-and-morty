import { INotificationProps } from "@interfaces";
import { NotificationContext } from "@components/UseNotification/NotificationProvider";
import { useEffect, useContext } from "react";

const useNotification = ({ error, title }: INotificationProps) => {
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (!error) return;
    setNotification!(`${title}: ${error}`);
  }, [error, setNotification, title]);
};

export default useNotification;
