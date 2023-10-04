import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const AddExpenseStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.$backgroundDefault,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: Colors.purple10,
    shadowColor: Colors.purple10,
    elevation: 8,
  },
  image: {
    width: '20%',
    height: '100%',
  },
});

export default AddExpenseStyles;
