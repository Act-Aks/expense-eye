import { TextFieldProps } from 'react-native-ui-lib';

export type InputProps = TextFieldProps & {
  isValid?: boolean;
  headIcon?: JSX.Element;
  tailIcon?: JSX.Element;
};
