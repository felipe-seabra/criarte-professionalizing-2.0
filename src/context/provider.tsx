/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useMemo, useState } from 'react';

interface AppContextValue {
  submitForm: boolean;
  setSubmitForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextValue>({
  submitForm: false,
  setSubmitForm: () => {}
});

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [submitForm, setSubmitForm] = useState(true);

  const contextValue = useMemo(() => {
    return {
      submitForm,
      setSubmitForm
    };
  }, [submitForm, setSubmitForm]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
