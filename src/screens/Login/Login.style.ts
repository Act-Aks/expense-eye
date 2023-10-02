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
  subTitle: {
    textShadowColor: Colors.violet50,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  buttonStyle: {
    shadowColor: Colors.orange10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 20,
    elevation: 8,
    height: 50,
    width: '85%',
    backgroundColor: Colors.orange1,
    borderRadius: 24,
    padding: 1,
  },
});

export default LoginStyles;
