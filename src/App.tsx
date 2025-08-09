// src/App.tsx
import "./App.css";
import { ConfigProvider } from "antd";
import { themeConfig } from "./configs/themeConfig";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    // // Option 1 for Ant Style : wrap with Config Provider
    // <ConfigProvider theme={themeConfig}>
    //   <BrowserRouter>
    //     <AppRoutes />
    //   </BrowserRouter>
    // </ConfigProvider>

    // Option 2 for Ant Style : use themeContext
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
