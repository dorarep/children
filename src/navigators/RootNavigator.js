import React                        from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon }                     from 'react-native-elements'
import HomeNavigator                from 'children/src/navigators/HomeNavigator';
import SheetNavigator               from 'children/src/navigators/SheetNavigator';
import CalendarNavigator            from 'children/src/navigators/CalendarNavigator';

export default createBottomTabNavigator(
  {
    HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" size={35} style={{color:'gray'}} />,
      },
    },
    SheetNavigator: {
      screen: SheetNavigator,
      navigationOptions: {
        tabBarLabel: 'Sheet',
        tabBarIcon: () => <Icon name="dns" size={35} style={{color:'gray'}} />,
      },
    },
    CalendarNavigator: {
      screen: CalendarNavigator,
      navigationOptions: {
        tabBarLabel: 'Calendar',
        tabBarIcon: () => <Icon name="event" size={35} style={{color:'gray'}} />,
      },
    },
  }
);
