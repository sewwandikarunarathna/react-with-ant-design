// src/App.tsx
import "./App.css";
import { ConfigProvider } from "antd";
import WelcomePage from "./components/WelcomePage";
import { themeConfig } from "./configs/themeConfig";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
        <WelcomePage />
    </ConfigProvider>
  );
}

export default App;
