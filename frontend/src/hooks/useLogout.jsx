import { useAuthContext } from "./useAuthContext";
import { useCookies } from "react-cookie";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const [, removeCookie] = useCookies("");

  const logout = () => {
    localStorage.removeItem("user");
    removeCookie('token');
    removeCookie('user');
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
