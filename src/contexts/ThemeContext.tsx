// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { themeConfig as defaultTheme } from '../configs/themeConfig';
import { ConfigProvider } from 'antd';

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (newTheme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  const updateTheme = (newTheme: ThemeConfig) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <ConfigProvider theme={theme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);