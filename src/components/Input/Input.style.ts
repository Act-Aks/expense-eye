import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const InputStyles = StyleSheet.create({
  floatingPlaceholderStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.violet40,
  },
  containerStyle: {
    backgroundColor: Colors.violet70,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 12,
    shadowColor: Colors.violet1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 8,
    paddingBottom: 8,
  },
  fieldStyle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.violet30,
  },
});

export default InputStyles;
