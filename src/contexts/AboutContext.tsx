
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AboutContextType {
  details: string;
  setDetails: React.Dispatch<React.SetStateAction<string>>;
}

const AboutContext = createContext<AboutContextType | undefined>(undefined);

export const AboutProvider = ({ children }: { children: ReactNode }) => {
  const [details, setDetails] = useState<string>('Somos dedicados a fornecer cuidados de saúde inclusivos para a comunidade LGBTQIAPN+.');

  return (
    <AboutContext.Provider value={{ details, setDetails }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = () => {
  const context = useContext(AboutContext);
  if (!context) {
    throw new Error('useAbout must be used within an AboutProvider');
  }
  return context;
};