import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useSnackbar } from "notistack";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const signup = async (email, password) => {
    // Changed function name to signin
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5555/codes/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error("Signin failed");
      }

      const { token, user } = data;

      // save the token to local storage
      localStorage.setItem("token", token);
      // save the user to local storage (if needed)
      localStorage.setItem("user", JSON.stringify(user));
      // update auth context with user data
      dispatch({ type: "LOGIN", payload: user });
    } catch (error) {
      setError(error.message);
      enqueueSnackbar("Error Signing in", {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return { signup, error, loading }; // Changed function name to signin
};
