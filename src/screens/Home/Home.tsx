import { FadeIn } from 'react-native-reanimated';
import { Text, View } from 'react-native-ui-lib';

import { Screen } from '@components';

export const Home = () => {
  return (
    <Screen reanimated center entering={FadeIn.duration(1000)}>
      <View>
        <Text purple10>Home</Text>
      </View>
    </Screen>
  );
};
