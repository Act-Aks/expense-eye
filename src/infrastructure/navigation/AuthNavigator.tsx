import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Registration } from '@screens';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen name="Registration" component={Registration} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
