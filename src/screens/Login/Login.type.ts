import { RegistrationFormInputs } from '@screens/Registration/Registration.type';

export type LoginFormInputs = Pick<
  RegistrationFormInputs,
  'email' | 'password'
>;
