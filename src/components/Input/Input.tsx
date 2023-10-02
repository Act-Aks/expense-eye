import { useState } from 'react';
import { Colors, Icon, TextField, View } from 'react-native-ui-lib';

import InputStyles from './Input.style';
import { InputProps } from './Input.type';

const Input: React.FC<InputProps> = ({
  value: inputValue,
  onChangeText: inputOnChnageText,
  isValid,
  headIcon,
  tailIcon,
  textContentType,
  readonly,
  ...props
}) => {
  const [value, setValue] = useState(inputValue ?? '');

  const onChangeText = (text: string) => {
    setValue(text);
    inputOnChnageText?.(text);
  };

  return (
    <View
      style={[InputStyles.inputContainer, readonly && InputStyles.disabled]}>
      {headIcon && <View center>{headIcon}</View>}
      <TextField
        containerStyle={InputStyles.containerStyle}
        fieldStyle={InputStyles.fieldStyle}
        floatingPlaceholderStyle={InputStyles.floatingPlaceholderStyle}
        floatingPlaceholder
        floatOnFocus
        validateOnChange
        onChangeText={onChangeText}
        textContentType={textContentType}
        secureTextEntry={textContentType === 'password'}
        placeholderTextColor={Colors.red1}
        value={value}
        color={Colors.blue10}
        cursorColor={Colors.violet40}
        trailingAccessory={
          <Icon
            assetName={isValid ? 'check' : ''}
            size={12}
            tintColor={Colors.violet10}
          />
        }
        readonly={readonly}
        {...props}
      />
      {tailIcon && <View center>{tailIcon}</View>}
    </View>
  );
};

export default Input;
