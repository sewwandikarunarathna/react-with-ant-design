import { ThemeConfig } from "antd/es/config-provider/context";

export const lightTheme: ThemeConfig = {
  components: {
    Breadcrumb: {
      fontSize: 14,
      linkColor: "#1890ff",
      separatorColor: "#2C0715", //wine
      lastItemColor: "#B95929", //copper
      linkHoverColor: "blue"
    },
  },
  token: {
    colorPrimary: "#1890ff",
    colorBgContainer: "#ECDDD5",
    colorText: "rgba(0, 0, 0, 0.85)",
  },
};

export const darkTheme: ThemeConfig = {
  components: {
    Breadcrumb: {
      fontSize: 14,
      linkColor: "grey",
      separatorColor: "#B95929",
      lastItemColor: "purple",
      linkHoverColor: "white",
    },
  },
  token: {
    colorPrimary: "#177ddc",
    colorBgContainer: "#141414",
    colorText: "rgba(255, 255, 255, 0.85)",
  },
};
