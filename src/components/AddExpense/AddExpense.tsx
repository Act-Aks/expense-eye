import { SlideInLeft } from 'react-native-reanimated';
import { Button, Colors, Image, View } from 'react-native-ui-lib';

import AddExpenseStyles from './AddExpense.style';

const AddExpense: React.FC = () => {
  return (
    <View
      reanimated
      entering={SlideInLeft.delay(500).duration(500)}
      style={AddExpenseStyles.container}>
      <Image
        source={require('@assets/rupee.png')}
        style={AddExpenseStyles.image}
      />
      <Button
        text70BL
        backgroundColor={Colors.purple20}
        label={'Add Expense'}
      />
    </View>
  );
};

export default AddExpense;
