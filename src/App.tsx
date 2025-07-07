// src/App.tsx
import "./App.css";
import { ConfigProvider } from "antd";
import WelcomePage from "./components/WelcomePage";
import { themeConfig } from "./configs/themeConfig";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
