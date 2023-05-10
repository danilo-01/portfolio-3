// Packages
import { useNavigate } from "react-router-dom";

const useRouteChange = () => {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return routeChange;
};

export default useRouteChange;
