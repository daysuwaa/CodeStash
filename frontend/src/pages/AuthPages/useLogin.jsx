import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useSnackbar } from "notistack";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5555/codes/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Check response status and show appropriate snackbar message
      if (response.status === 200) {
        const data = await response.json();
        sessionStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar("Incorrect username or password", {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
      // } else {
      //   enqueueSnackbar("Incorrect username or password", {
      //     variant: "error",
      //     autoHideDuration: 2000,
      //   });
      // }
    } catch (error) {
      enqueueSnackbar("An error occurred while logging in", {
        variant: "error",
        autoHideDuration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
