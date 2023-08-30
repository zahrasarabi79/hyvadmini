import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import Theme from "./theme/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Theme>
    <App />
  </Theme>
  //  </React.StrictMode>
);
