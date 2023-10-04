import { Colors, Schemes } from 'react-native-ui-lib';

const LocalScheme: Schemes = {
  light: {
    screenBG: Colors.grey70,
    textColor: Colors.violet10,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
  },
};

const Typographies: Dictionary<Record<string, unknown>> = {
  title: { fontSize: 18, fontWeight: '600' },
  subTitle: { fontSize: 16, fontWeight: '500' },
  caption: { fontSize: 14, fontWeight: '400' },
  buttonLabel: { fontSize: 18, fontWeight: '700' },
};

const ThemeColors: Dictionary<string> = {
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
};

export { LocalScheme, ThemeColors, Typographies };
