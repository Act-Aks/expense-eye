// navigation.d.ts
import { User } from 'firebase/auth';

import { NavigationProp, RouteProp } from '@react-navigation/native';

declare global {
  export type BottomTabStackParamsList = {
    Home: { user?: User };
    Profile: { user?: User };
  };
  export type AuthStackParamsList = {
    Login: undefined;
    Registration: undefined;
  } & BottomTabStackParamsList;
  export type RootNavigationParamsList = AuthStackParamsList;

  export type RootNavigationProp<T extends keyof RootNavigationParamsList> =
    NavigationProp<RootNavigationParamsList, T>;
  export type RootNavigationRouteProp<
    T extends keyof RootNavigationParamsList,
  > = RouteProp<RootNavigationParamsList, T>;
}
