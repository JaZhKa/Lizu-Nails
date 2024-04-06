import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleLoaded } from "../store/load/isFormLoaded";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const changeLoaded = useDispatch();
  const navigate = useNavigate();

  const signup = async (payload) => {
    changeLoaded(toggleLoaded());
    setError(null);

    await axios
      .post("http://localhost:3000/api/user/signup", {
        ...payload
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          setError(error.response.data.error);
        }
      })
      .then(() => {
        navigate("/login");
      })
      .finally(() => {
        changeLoaded(toggleLoaded());
      });
  };

  return { signup, error };
};
