import { StyleSheet } from 'react-native';
import { FadeInLeft, SlideInLeft, SlideInRight } from 'react-native-reanimated';
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
  tabBarShowLabel: false,
  tabBarInactiveTintColor: Colors.grey10,
  tabBarStyle: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderColor: Colors.white,
    elevation: 0,
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
  <View reanimated entering={FadeInLeft.duration(500)}>
    <Text title color={Colors.purple1}>
      {title}
    </Text>
  </View>
);

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
  tabName: keyof Pick<BottomTabStackParamsList, 'Home' | 'Profile'>;
};

const TabIcon = ({ tabName, ...props }: TabIconProps) => (
  <View
    reanimated
    backgroundColor={props.focused ? Colors.purple70 : Colors.grey60}
    entering={
      tabName === 'Home'
        ? SlideInLeft.duration(1000)
        : SlideInRight.duration(1000)
    }
    style={[styles.tabIcon, props.focused && styles.shadow]}>
    <Icon
      iconType={'Entypo'}
      iconName={tabName === 'Home' ? 'home' : 'user'}
      color={props.color}
    />
  </View>
);

export const TabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        options={{
          ...tabOptions,
          tabBarIcon: props => TabIcon({ ...props, tabName: 'Home' }),
          headerTitle: props => animatedHeaderTitle(props.children),
        }}
        name={'Home'}
        component={Home}
      />
      <BottomTabs.Screen
        options={{
          ...tabOptions,
          tabBarIcon: props => TabIcon({ ...props, tabName: 'Profile' }),
          headerTitle: props => animatedHeaderTitle(props.children),
        }}
        name={'Profile'}
        component={Profile}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.purple1,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
  tabIcon: {
    borderWidth: 1,
    width: '60%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
