import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { useCookies } from "react-cookie";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const [, removeCookie] = useCookies("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    removeCookie('token');
    removeCookie('user');
    dispatch({ type: "LOGOUT" });
    navigate('/');
  };
  return { logout };
};
