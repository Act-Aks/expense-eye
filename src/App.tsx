import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from '@contexts/theme/themeContext';
import AuthNavigator from '@infrastructure/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AuthNavigator />
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);
