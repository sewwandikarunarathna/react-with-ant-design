// src/configs/themeConfig.ts
import { ThemeConfig } from "antd/es/config-provider/context";

export const themeConfig: ThemeConfig = {
  components: {
    Button: {
      fontSize: 12,
      padding: 4,
      colorBgContainer: "#ECDDD5", //cream
      colorText: "#2C0715", //wine
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
      fontSize: 14,
      linkColor: "#1890ff",
      separatorColor: "#2C0715", //wine
      lastItemColor: "#B95929", //copper
      linkHoverColor: "blue"
    }
  },
  token: {
    // Global design tokens
    fontSize: 16,
    colorPrimary: "#ECDDD5",
    colorTextSecondary: "#2C0715",
    borderRadius: 5,
    fontFamily: "'Inter', 'Open Sans', sans-serif",
    colorBgContainer: "#ECDDD5",
  },
};
