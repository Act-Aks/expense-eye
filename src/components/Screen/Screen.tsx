import { View } from 'react-native-ui-lib';

import { ScreenProps } from './Screen.type';

const Screen: React.FC<ScreenProps> = ({ children, ...props }) => (
  <View flex bg-screenBG padding-16 {...props}>
    {children}
  </View>
);

export default Screen;
