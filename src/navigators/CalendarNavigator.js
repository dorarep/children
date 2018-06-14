import { createStackNavigator } from 'react-navigation';
import CalendarScreen           from 'children/src/screens/CalendarScreen';

export default createStackNavigator(
  {
    CalendarScreen: {
      screen: CalendarScreen
    },
  }
);
