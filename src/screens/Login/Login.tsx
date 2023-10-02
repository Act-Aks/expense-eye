import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FadeIn } from 'react-native-reanimated';
import { Button, Colors, Gradient, Text, View } from 'react-native-ui-lib';

import { Icon, Input, Screen } from '@components';
import useAuthenticationContext from '@contexts/auth/authContext';
import { validateEmail, validatePassword } from '@utils';

import LoginStyles from './Login.style';

interface LoginProps {
  navigation: RootNavigationProp<'Login'>;
}

export const Login = ({ navigation }: LoginProps) => {
  const { onLogin } = useAuthenticationContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);
  const goToRegistration = () => navigation.navigate('Registration');
  const onLoginPress = () => onLogin(email, password);

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
      <View center marginB-16 style={LoginStyles.inputContainer}>
        <Input
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Email'}
          isValid={isValidEmail}
          validate={(value: string) => setIsValidEmail(validateEmail(value))}
          headIcon={
            <Icon iconType="Entypo" iconName={'mail'} color={Colors.violet10} />
          }
        />
        <Input
          value={password}
          onChangeText={onChangePassword}
          placeholder={'Password'}
          isValid={isValidPassword}
          validate={(value: string) =>
            setIsValidPassword(validatePassword(value))
          }
          headIcon={
            <Icon iconType="Entypo" iconName={'lock'} color={Colors.violet10} />
          }
        />
      </View>
      <View style={LoginStyles.buttonStyle}>
        <Button
          flex
          buttonLabel
          disabled={!isValidEmail || !isValidPassword}
          label={'Login'}
          backgroundColor={Colors.violet30}
          disabledBackgroundColor={Colors.grey30}
          $textDisabled={!isValidEmail || !isValidPassword}
          onPress={onLoginPress}
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
