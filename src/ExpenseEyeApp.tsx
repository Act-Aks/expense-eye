import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from '@contexts/theme/themeContext';
import { Login } from '@screens';

export default function ExpenseEyeApp() {
  return (
    <ThemeProvider>
      <Login />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
