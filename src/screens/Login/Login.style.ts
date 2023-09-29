import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const LoginStyles = StyleSheet.create({
  screen: {
    gap: 16,
  },
  inputContainer: {
    width: '100%',
    gap: 12,
  },
  title: {
    textShadowColor: Colors.violet50,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default LoginStyles;
