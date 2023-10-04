import { Colors, View } from 'react-native-ui-lib';

import { Icon, Logout, Screen } from '@components';

export const Profile = () => {
  return (
    <Screen centerH>
      <View center width={100} height={100} bg-purple60 br100>
        <Icon
          iconType={'EvilIcons'}
          iconName={'user'}
          size={90}
          color={Colors.purple10}
        />
      </View>
      <Logout />
    </Screen>
  );
};
