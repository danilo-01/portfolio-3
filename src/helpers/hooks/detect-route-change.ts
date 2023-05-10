// Packages
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDetectRouteChange = (callback: any) => {
  const location = useLocation();

  useEffect(() => {
    callback(location);
  }, [location, callback]);
};

export default useDetectRouteChange;
