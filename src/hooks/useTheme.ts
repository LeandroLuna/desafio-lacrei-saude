import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useTheme = (): { theme: Theme; toggleTheme: () => void } => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? (JSON.parse(storedTheme) as Theme) : 'light';
    } else {
      return 'light';
    }
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
