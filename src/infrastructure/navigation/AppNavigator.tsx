import { Image } from 'react-native-ui-lib';

import useAuthenticationContext from '@contexts/auth/authContext';

import { AuthNavigator } from './AuthNavigator';
import { TabNavigator } from './TabNavigator';

export const AppNavigator: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuthenticationContext();

  return isLoading ? (
    <Image source={require('@assets/splash.png')} resizeMode={'contain'} />
  ) : isAuthenticated ? (
    <TabNavigator />
  ) : (
    <AuthNavigator />
  );
};
