import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { FadeIn } from 'react-native-reanimated';
import { Button, Colors, Gradient, Text, View } from 'react-native-ui-lib';

import { Icon, Input, Screen } from '@components';
import useAuthenticationContext from '@contexts/auth/authContext';
import { validateEmail, validatePassword } from '@utils';

import LoginStyles from './Login.style';
import { LoginFormInputs } from './Login.type';

type LoginProps = {
  navigation: RootNavigationProp<'Login'>;
};

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { onLogin } = useAuthenticationContext();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<LoginFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginPress = handleSubmit(data => {
    console.log(data);
    onLogin(data.email, data.password);
  });
  const goToRegistration = () => navigation.navigate('Registration');

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
        <Controller
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={'Email'}
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
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={'Password'}
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
