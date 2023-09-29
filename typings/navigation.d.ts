// navigation.d.ts
import { NavigationProp, RouteProp } from '@react-navigation/native';

declare global {
  export type AuthStackParamsList = {
    Login: undefined;
    Registration: undefined;
  };
  export type RootNavigationParamsList = AuthStackParamsList;

  export type RootNavigationProp<T extends keyof RootNavigationParamsList> =
    NavigationProp<RootNavigationParamsList, T>;
  export type RootNavigationRouteProp<
    T extends keyof RootNavigationParamsList,
  > = RouteProp<RootNavigationParamsList, T>;
}
