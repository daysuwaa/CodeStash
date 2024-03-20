import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./pages/AuthPages/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <App />
      </SnackbarProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </AuthContextProvider>
);
