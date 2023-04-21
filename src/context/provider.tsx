/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useMemo, useState } from 'react';

interface AppContextValue {
  submitForm: boolean;
  setSubmitForm: React.Dispatch<React.SetStateAction<boolean>>;
  errorSubmitForm: boolean;
  setErrorSubmitForm: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextValue>({
  submitForm: false,
  setSubmitForm: () => {},
  errorSubmitForm: false,
  setErrorSubmitForm: () => {},
  isLoading: false,
  setIsLoading: () => {}
});

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [submitForm, setSubmitForm] = useState(false);
  const [errorSubmitForm, setErrorSubmitForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contextValue = useMemo(() => {
    return {
      submitForm,
      setSubmitForm,
      errorSubmitForm,
      setErrorSubmitForm,
      isLoading,
      setIsLoading
    };
  }, [
    submitForm,
    setSubmitForm,
    errorSubmitForm,
    setErrorSubmitForm,
    isLoading,
    setIsLoading
  ]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
