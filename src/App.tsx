import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthenticationProvider } from '@contexts/auth/authContext';
import { ThemeProvider } from '@contexts/theme/themeContext';
import { AppNavigator } from '@infrastructure/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AuthenticationProvider>
            <AppNavigator />
          </AuthenticationProvider>
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);
