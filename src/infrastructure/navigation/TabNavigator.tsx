import { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { Colors, Text, View } from 'react-native-ui-lib';

import { Icon } from '@components';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Home, Profile } from '@screens';

const BottomTabs = createBottomTabNavigator<BottomTabStackParamsList>();

const tabOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: Colors.purple10,
  tabBarActiveBackgroundColor: Colors.purple70,
  tabBarShowLabel: false,
  tabBarInactiveTintColor: Colors.grey10,
  tabBarInactiveBackgroundColor: Colors.grey70,
  tabBarStyle: {
    shadowColor: Colors.purple1,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
    borderColor: Colors.purple1,
    borderWidth: 2,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  headerStyle: {
    backgroundColor: Colors.purple70,
    shadowColor: Colors.purple1,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
};

const animatedHeaderTitle = (title: string) => (
  <View
    reanimated
    entering={FadeInLeft.duration(1000)}
    exiting={FadeInRight.duration(300)}>
    <Text title color={Colors.purple1}>
      {title}
    </Text>
  </View>
);

export const TabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        options={{
          ...tabOptions,
          tabBarIcon: props => (
            <Icon iconType={'Entypo'} iconName={'home'} color={props.color} />
          ),
          headerTitle: props => animatedHeaderTitle(props.children),
        }}
        name={'Home'}
        component={Home}
      />
      <BottomTabs.Screen
        options={{
          ...tabOptions,
          tabBarIcon: props => (
            <Icon iconType={'Entypo'} iconName={'user'} color={props.color} />
          ),
          headerTitle: props => animatedHeaderTitle(props.children),
        }}
        name={'Profile'}
        component={Profile}
      />
    </BottomTabs.Navigator>
  );
};
