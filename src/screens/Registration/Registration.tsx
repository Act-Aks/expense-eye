import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { SlideInRight } from 'react-native-reanimated';
import { Button, Colors, Gradient, Text, View } from 'react-native-ui-lib';

import { Icon, Input, Screen } from '@components';
import useAuthenticationContext from '@contexts/auth/authContext';
import { validateEmail, validatePassword } from '@utils';

import RegistrationStyles from './Registration.style';
import { RegistrationFormInputs } from './Registration.type';

export const Registration: React.FC = () => {
  const { onRegister } = useAuthenticationContext();

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const { control, handleSubmit, watch } = useForm<RegistrationFormInputs>({
    defaultValues: {
      email: '',
      password: '',
      userName: '',
      confirmPassword: '',
    },
  });

  const confirmPassword = watch('confirmPassword');
  const password = watch('password');

  const onRegisterPress = handleSubmit(data => {
    console.log(data);
    onRegister(data.email, data.password, data.confirmPassword, data.userName);
  });

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
        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Username is required' },
            min: {
              value: 5,
              message: 'Username should be minimum 5 characters',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={'Username'}
              textContentType={'username'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              isValid={value.length >= 5}
              headIcon={
                <Icon
                  iconType={'Entypo'}
                  iconName={'user'}
                  color={Colors.violet10}
                />
              }
            />
          )}
          name={'userName'}
        />

        <Controller
          control={control}
          rules={{ required: { value: true, message: 'Email is required' } }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={'Email'}
              textContentType={'emailAddress'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              isValid={isValidEmail}
              validate={(value: string) =>
                setIsValidEmail(validateEmail(value))
              }
              headIcon={
                <Icon
                  iconType={'Entypo'}
                  iconName={'mail'}
                  color={Colors.violet10}
                />
              }
            />
          )}
          name={'email'}
        />

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Password is required' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={'Password'}
              textContentType={'password'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              isValid={isValidPassword}
              validate={(value: string) =>
                setIsValidPassword(validatePassword(value))
              }
              headIcon={
                <Icon
                  iconType={'Entypo'}
                  iconName={'lock'}
                  color={Colors.violet10}
                />
              }
            />
          )}
          name={'password'}
        />

        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Please confirm the password' },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={'Confirm password'}
              textContentType={'password'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              isValid={confirmPassword !== '' && confirmPassword === password}
              validate={(value: string) => value === password}
              headIcon={
                <Icon
                  iconType={'Ionicons'}
                  iconName={'lock-closed-outline'}
                  color={Colors.violet10}
                />
              }
              readonly={
                watch('userName').length < 5 ||
                !isValidEmail ||
                !isValidPassword
              }
            />
          )}
          disabled={true}
          name={'confirmPassword'}
        />
      </View>
      <View style={RegistrationStyles.buttonStyle}>
        <Button
          flex
          buttonLabel
          disabled={
            !isValidEmail || !isValidPassword || !(confirmPassword === password)
          }
          label={'Register'}
          backgroundColor={Colors.violet40}
          disabledBackgroundColor={Colors.grey30}
          $textDisabled={
            !isValidEmail || !isValidPassword || !(confirmPassword === password)
          }
          onPress={onRegisterPress}
        />
      </View>
    </Screen>
  );
};
