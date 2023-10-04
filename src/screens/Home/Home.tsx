import { FadeIn } from 'react-native-reanimated';

import { AddExpense, Screen } from '@components';

export const Home = () => {
  return (
    <Screen reanimated entering={FadeIn.delay(300).duration(200)}>
      <AddExpense />
    </Screen>
  );
};
