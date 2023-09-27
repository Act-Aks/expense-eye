import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Input from '@components/Input/Input';

export default function ExpenseEyeApp() {
  return (
    <View style={styles.container}>
      <Input />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
