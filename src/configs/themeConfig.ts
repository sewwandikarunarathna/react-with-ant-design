// src/configs/themeConfig.ts
import { ThemeConfig } from "antd/es/config-provider/context";

export const themeConfig: ThemeConfig = {
  components: {
    Button: {
      fontSize: 12,
      padding: 4,
      colorBgContainer: "#ECDDD5", //cream
      colorText: "#2C0715", //wine
      colorTextBase: 'blue',
      fontWeight: 500,
      defaultHoverBg: "#7F163D", //rose
      colorBorder: "#2C0715", //wine
      
    },
    Typography: {
      fontSize: 12,
      colorText: "#2C0715", //black
    },
    Form: {
      itemMarginBottom: 0, // Default is 24px
    },
    Breadcrumb: {
      fontSize: 16,
      linkColor: "#1890ff",
      separatorColor: "rgba(0, 0, 0, 0.45)",
      lastItemColor: "rgba(0, 0, 0, 0.85)",
    }
  },
  token: {
    // Global design tokens
    fontSize: 16,
    colorPrimary: "#ECDDD5",
    colorTextSecondary: "#2C0715",
    borderRadius: 5,
    fontFamily: "'Inter', 'Open Sans', sans-serif",
  },
};
