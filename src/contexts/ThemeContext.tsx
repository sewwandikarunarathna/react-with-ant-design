// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext } from "react";
import { ThemeConfig } from "antd/es/config-provider/context";
import { themeConfig as defaultTheme } from "../configs/themeConfig";
import { ConfigProvider } from "antd";
import merge from "lodash.merge";

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (newTheme: ThemeConfig) => void;
   setComponentTheme: (componentName: keyof NonNullable<ThemeConfig["components"]>, overrides: Record<string, any>) => void;
   resetComponentTheme: (componentName: keyof NonNullable<ThemeConfig['components']>) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateTheme: () => {},
  setComponentTheme: () => {},
  resetComponentTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  const updateTheme = (newTheme: ThemeConfig) => {
    setTheme((prevTheme) => merge({}, prevTheme, newTheme));
  };

  const setComponentTheme = (
  componentName: keyof NonNullable<ThemeConfig['components']>,
  overrides: Record<string, any>
  ) => {
    setTheme((prevTheme) =>
      merge({}, prevTheme, {
        components: {
          [componentName]: {
            ...defaultTheme.components?.[componentName], // reset to default
            ...overrides, // apply new styles
          },
        },
      })
    );
  };

  // Reset only one component's theme to default
  const resetComponentTheme = (
    componentName: keyof NonNullable<ThemeConfig["components"]>
  ) => {
    setTheme((prevTheme) =>
      merge({}, prevTheme, {
        components: {
          [componentName]: defaultTheme.components?.[componentName] || {},
        },
      })
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, setComponentTheme, resetComponentTheme }}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
