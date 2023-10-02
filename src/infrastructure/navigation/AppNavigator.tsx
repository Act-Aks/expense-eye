import useAuthenticationContext from '@contexts/auth/authContext';

import { AuthNavigator } from './AuthNavigator';
import { TabNavigator } from './TabNavigator';

export const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  return isAuthenticated ? <TabNavigator /> : <AuthNavigator />;
};
