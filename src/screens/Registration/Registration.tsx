import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SlideInRight } from 'react-native-reanimated';
import { Button, Colors, Gradient, Text, View } from 'react-native-ui-lib';

import { Input, Screen } from '@components';
import { validateEmail, validatePassword } from '@utils';

import RegistrationStyles from './Registration.style';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);

  return (
    <Screen
      reanimated
      entering={SlideInRight}
      center
      useSafeArea
      style={RegistrationStyles.screen}>
      <Gradient
        color={Colors.orange50}
        numberOfSteps={50}
        style={StyleSheet.absoluteFill}
      />
      <Text text50 color={Colors.orange10} style={RegistrationStyles.title}>
        {'Create New Account'}
      </Text>
      <View center marginB-16 style={RegistrationStyles.inputContainer}>
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
      <View style={RegistrationStyles.buttonStyle}>
        <Button
          flex
          buttonLabel
          label={'Register'}
          backgroundColor={Colors.violet40}
        />
      </View>
    </Screen>
  );
};
