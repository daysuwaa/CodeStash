// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
// import { useSnackbar } from "notistack";

// export const useSignin = () => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { dispatch } = useAuthContext();
//   const { enqueueSnackbar } = useSnackbar();

//   const signin = async (email, password) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const token = ...
//       const response = await fetch("http://localhost:5555/codes/user/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer${token}`,
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       console.log("Response status:", response.status);

//       const data = await response.text();
//       console.log("Response data:", data);

//       if (!response.ok) {
//         throw new Error("Signin failed");
//       }

//       const json = JSON.parse(data);

//       // save the user to local storage
//       localStorage.setItem("user", JSON.stringify(json));
//       //update auth context
//       dispatch({ type: "LOGIN", payload: json });
//     } catch (error) {
//       enqueueSnackbar("Error Signin in", {
//         variant: "error",
//         autoHideDuration: 3000,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { signin, error, loading };
// };
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

  return { signin, error, loading };
};
