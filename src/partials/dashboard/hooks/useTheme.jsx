import { useEffect, useState } from 'react';

const SUPPORTED_THEMES = {
  'light': 'str-chat__theme-light',
  'dark': 'str-chat__theme-dark'
};

/**
 * Internal, handles the communication between Stream's website related to UI theme toggling.
 *
 * @param targetOrigin the target origin (typically, the https://getstream.io/ domain).
 */
export const useTheme = (targetOrigin) => {
  const [theme, setTheme] = useState('str-chat__theme-dark');
  useEffect(() => {
    const handleThemeChange = ({ data: theme, origin }) => {
      // handle events only from trusted origin
      if (origin === targetOrigin && Object.keys(SUPPORTED_THEMES).includes(theme)) {
        setTheme(SUPPORTED_THEMES[theme] || SUPPORTED_THEMES.light);
      }
    };

    window.addEventListener('message', handleThemeChange);
    return () => {
      window.removeEventListener('message', handleThemeChange);
    };
  }, [targetOrigin]);

  return theme;
};
