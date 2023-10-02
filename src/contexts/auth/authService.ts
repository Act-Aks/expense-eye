import {
  createUserWithEmailAndPassword,
  CreateUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  SignInWithEmailAndPassword,
} from '@configs/firebase';

type LoginRequest = SignInWithEmailAndPassword;
type RegistrationRequest = CreateUserWithEmailAndPassword;

//Login Request
const loginRequest: LoginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

//Registration Request
const registrationRequest: RegistrationRequest = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export { loginRequest, registrationRequest };
