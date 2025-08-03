import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

const ThemeContext = createContext<{
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}>({
  theme: 'theme1',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeName = localStorage.getItem('theme') as ThemeName | null;
  const [theme, setTheme] = useState<ThemeName>(themeName || 'theme1');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
