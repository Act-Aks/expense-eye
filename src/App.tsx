import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from '@contexts/theme/themeContext';
import { Login } from '@screens';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Login />
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

registerRootComponent(App);
