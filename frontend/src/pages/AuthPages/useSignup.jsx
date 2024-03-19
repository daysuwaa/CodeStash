import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useSnackbar } from "notistack";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const signin = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5555/codes/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("Response status:", response.status);

      const data = await response.text();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error("Signin failed");
      }

      const json = JSON.parse(data);

      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      //update auth context
      dispatch({ type: "LOGIN", payload: json });
    } catch (error) {
      enqueueSnackbar("Error Signin in", {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return { signin, error, loading };
};
