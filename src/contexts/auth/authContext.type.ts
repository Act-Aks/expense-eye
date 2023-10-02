import { User } from 'firebase/auth';

export type AuthContext = {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | undefined;
  onLogin: (email: string, password: string) => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string,
    userName: string,
  ) => void;
  onLogout: () => void;
  user: User | null;
};
// export type AuthState = Pick<AuthContext, 'error' | 'isLoading' | 'user'>;
// export type UpdateState<T extends keyof AuthState> = {
//   type: T;
//   value: AuthContext[T];
// };
// export type AuthAction =
//   | UpdateState<'error'>
//   | UpdateState<'user'>
//   | UpdateState<'isLoading'>;
