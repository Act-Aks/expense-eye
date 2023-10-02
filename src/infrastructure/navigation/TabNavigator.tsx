import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '@screens';

const BottomTabs = createBottomTabNavigator<BottomTabStackParamsList>();

export const TabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name={'Home'} component={Home} />
      <BottomTabs.Screen name={'Profile'} component={Profile} />
    </BottomTabs.Navigator>
  );
};
