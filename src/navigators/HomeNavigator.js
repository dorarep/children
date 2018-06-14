import { createStackNavigator } from 'react-navigation';
import HomeScreen         from 'children/src/screens/HomeScreen';
import ChildrenScreen     from 'children/src/screens/ChildrenScreen';
import EditChildScreen    from 'children/src/screens/EditChildScreen';
import TasksScreen        from 'children/src/screens/TasksScreen';
import WorksScreen        from 'children/src/screens/WorksScreen';
import EditWorkScreen     from 'children/src/screens/EditWorkScreen';

export default createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    ChildrenScreen: {
      screen: ChildrenScreen
    },
    EditChildScreen: {
      screen: EditChildScreen
    },
    TasksScreen: {
      screen: TasksScreen
    },
    WorksScreen: {
      screen: WorksScreen
    },
    EditWorkScreen: {
      screen: EditWorkScreen
    },
  }
);
