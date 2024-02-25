import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { toggleLoaded } from "../store/load/isFormLoaded";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const [, setCookie] = useCookies("");
  const changeLoaded = useDispatch();
  const navigate = useNavigate();

  const login = async (email, password) => {
    changeLoaded(toggleLoaded());
    setError(null);

    await axios
      .post("http://localhost:3000/api/user/signin", {
        email,
        password,
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          setError("Incorrect data!");
        }
      })
      .then((res) => {
        setCookie("token", res.data.token);
        dispatch({ type: "LOGIN", payload: res.data.user });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .finally(() => {
        changeLoaded(toggleLoaded());
      });
  };

  return { login, error };
};
