import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { setCookie, parseCookies } from 'nookies';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePresistedState(key: string): Response<string> {
  const [state, setState] = useState(() => {
    const cookies = parseCookies();

    if (cookies.CRIARTE_THEME) {
      return cookies.CRIARTE_THEME;
    }
    return key;
  });

  useEffect(() => {
    setCookie(null, 'CRIARTE_THEME', state, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    });
  }, [key, state]);

  return [state, setState];
}

export default usePresistedState;
