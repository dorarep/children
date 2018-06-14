import { createStackNavigator } from 'react-navigation';
import SheetScreen        from 'children/src/screens/SheetScreen';
import ChildrenScreen     from 'children/src/screens/ChildrenScreen';
import EditChildScreen    from 'children/src/screens/EditChildScreen';

export default createStackNavigator(
  {
    SheetScreen: {
      screen: SheetScreen
    },
    ChildrenScreen: {
      screen: ChildrenScreen
    },
    EditChildScreen: {
      screen: EditChildScreen
    },
  }
);
