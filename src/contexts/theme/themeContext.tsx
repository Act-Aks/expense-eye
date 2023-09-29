import { createContext, PropsWithChildren } from 'react';
import { Colors, Typography } from 'react-native-ui-lib';

import { LocalScheme, ThemeColors, Typographies } from '@infrastructure/themes';

const ThemeContext = createContext<null>(null);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  Colors.loadColors(ThemeColors);
  Colors.loadSchemes(LocalScheme);
  Typography.loadTypographies(Typographies);

  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
};
