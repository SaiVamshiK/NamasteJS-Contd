import {  useEffect, useState } from "react";

const useOnline = () => {
  let [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);
  console.log('Use Online hook rendered');
  return isOnline;
};

export default useOnline;
