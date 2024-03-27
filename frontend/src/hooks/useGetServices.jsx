import { useState } from "react";
import axios from "axios";

export const useGetServices = () => {
  const [error, setError] = useState(null);

  const getServices = async () => {
    setError(null);
    await axios
      .get("http://localhost:3000/api/service")
      .catch((error) => {
        if (error.response.status !== 201) {
          setError("Не удалось создать запись.");
        }
      })
      .then((res) => {
        sessionStorage.setItem("services", JSON.stringify(res.data));
      });
  };

  return { getServices, error };
};
