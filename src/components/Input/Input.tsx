import { useState } from 'react';
import { Colors, Icon, TextField } from 'react-native-ui-lib';

import InputStyles from './Input.style';
import { InputProps } from './Input.type';

const Input: React.FC<InputProps> = ({
  value: inputValue,
  onChangeText: inputOnChnageText,
  isValid,
  ...props
}) => {
  const [value, setValue] = useState(inputValue ?? '');

  const onChangeText = (text: string) => {
    setValue(text);
    inputOnChnageText?.(text);
  };

  return (
    <TextField
      containerStyle={InputStyles.containerStyle}
      fieldStyle={InputStyles.fieldStyle}
      floatingPlaceholderStyle={InputStyles.floatingPlaceholderStyle}
      floatingPlaceholder
      floatOnFocus
      validateOnChange
      onChangeText={onChangeText}
      placeholderTextColor={Colors.red1}
      value={value}
      color={Colors.blue10}
      trailingAccessory={
        <Icon
          assetName={isValid ? 'check' : ''}
          size={12}
          tintColor={Colors.violet10}
        />
      }
      {...props}
    />
  );
};

export default Input;
