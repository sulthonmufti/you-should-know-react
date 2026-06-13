import { createContext, useState, useEffect } from 'react';

//buat Context
export const ThemeContext = createContext();

//buat Provider (buat bungkus komponen yang butuhin context)
export function ThemeProvider({ children }) {

  //buat useState buat nyimpen theme,cek dulu localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  //buat useEffect buat ngerubah theme tiap kali berubah
  useEffect(() => {
    //terapin class 'dark' ke elemen <html> paling luar
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    //simpen pilihan user ke localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  //buat toggleTheme untuk ganti theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    //value itu data yang dikirim ke komponen anak
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}