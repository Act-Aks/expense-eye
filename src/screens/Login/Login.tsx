import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FadeIn } from 'react-native-reanimated';
import { Colors, Gradient, Text, View } from 'react-native-ui-lib';

import { Input, Screen } from '@components';
import { validateEmail, validatePassword } from '@utils';

import LoginStyles from './Login.style';

interface LoginProps {
  navigation: RootNavigationProp<'Login'>;
}

export const Login = ({ navigation }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);
  const goToRegistration = () => {
    navigation.navigate('Registration');
  };

  return (
    <Screen
      reanimated
      entering={FadeIn}
      center
      useSafeArea
      style={LoginStyles.screen}>
      <Gradient
        color={Colors.violet50}
        numberOfSteps={50}
        style={StyleSheet.absoluteFill}
      />
      <Text text50 color={Colors.violet10} style={LoginStyles.title}>
        {'Login'}
      </Text>
      <View center style={LoginStyles.inputContainer}>
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
      <Text caption center color={Colors.orange1} style={LoginStyles.title}>
        {'Do not have an account? '}
        <Text
          subTitle
          underline
          center
          onPress={goToRegistration}
          color={Colors.violet1}
          style={LoginStyles.subTitle}>
          {'Register'}
        </Text>
      </Text>
    </Screen>
  );
};
