import { User } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';

import {
  doc,
  FIREBASE_AUTH,
  FIREBASE_DB,
  onAuthStateChanged,
  setDoc,
} from '@configs/firebase';

import { AuthContext } from './authContext.type';
import { loginRequest, registrationRequest } from './authService';

const AuthenticationContext = createContext<AuthContext | null>(null);

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>();
  const auth = FIREBASE_AUTH;

  // check the auth-state
  onAuthStateChanged(auth, authUser => {
    if (authUser) {
      setUser(authUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email: string, password: string) => {
    if (email.length === 0 || password.length === 0) {
      setError('Please fill respective fields');
      return;
    }

    try {
      setIsLoading(true);
      const loggedInUser = await loginRequest(auth, email, password);
      setUser(loggedInUser.user);
    } catch (error: any) {
      console.error('Login In Failed: ', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (
    email: string,
    password: string,
    repeatedPassword: string,
    userName: string,
  ) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);

      // registration api call
      const registeredUser = await registrationRequest(auth, email, password);
      // setUser to be registered user
      setUser(registeredUser.user);

      const data = {
        _id: registeredUser.user.uid,
        userName,
        providerData: registeredUser.user.providerData[0],
      };
      await setDoc(doc(FIREBASE_DB, 'users', registeredUser.user.uid), data);
    } catch (error: any) {
      console.error('Sign Up Failed: ', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = async () => {
    try {
      setIsLoading(true);
      await auth.signOut();
      setUser(null);
      console.log('Signed Out');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthenticationContext = () => {
  const authContext = useContext(AuthenticationContext);

  if (authContext === null) {
    throw new Error('Error in AuthenticationContext');
  }

  return authContext;
};

export default useAuthenticationContext;
