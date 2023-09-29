import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Gradient, Text, View } from 'react-native-ui-lib';

import { Input } from '@components/Input';
import { Screen } from '@components/Screen';
import { validateEmail, validatePassword } from '@utils';

import LoginStyles from './Login.style';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);

  return (
    <Screen center useSafeArea style={LoginStyles.screen}>
      <Gradient
        color={Colors.violet50}
        numberOfSteps={50}
        style={StyleSheet.absoluteFill}
      />
      <Text text50 color={Colors.violet10} style={LoginStyles.title}>
        {'Login'}
      </Text>
      <View center renderDelay={2000} style={LoginStyles.inputContainer}>
        <Input
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Email'}
          isValid={isValidEmail}
          validate={(value: string) => setIsValidEmail(validateEmail(value))}
        />
        <Input
          value={password}
          onChangeText={onChangePassword}
          placeholder={'Password'}
          isValid={isValidPassword}
          validate={(value: string) =>
            setIsValidPassword(validatePassword(value))
          }
        />
      </View>
    </Screen>
  );
};
