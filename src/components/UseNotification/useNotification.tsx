import { createContext, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

const NotificationContext = createContext<{
  setNotification?: React.Dispatch<React.SetStateAction<string | undefined>>;
}>({});
const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<string>();

  useEffect(() => {
    if (!notification || !notification.length) return;
    const timeoutId = setTimeout(() => {
      setNotification("");
    }, 1000);
    return clearTimeout(timeoutId);
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {notification && (
        <motion.span
          initial={{ x: 100 }}
          animate={{ x: -10 }}
          className="absolute top-20 right-0 window-black bg-black/80 text-primary-300  max-w-60 overflow-hidden text-ellipsis text-nowrap p-4 z-50 cursor-pointer hover:bg-red-500/80 transition-colors duration-300 ease-in-out"
          onClick={() => setNotification("")}
        >
          {notification}
        </motion.span>
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
