import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps102405Navigator from '../features/Maps102405/navigator';
import UserProfile102401Navigator from '../features/UserProfile102401/navigator';
import BlankScreen59102378Navigator from '../features/BlankScreen59102378/navigator';
import UserProfile102350Navigator from '../features/UserProfile102350/navigator';
import Maps102331Navigator from '../features/Maps102331/navigator';
import Settings102309Navigator from '../features/Settings102309/navigator';
import Settings102294Navigator from '../features/Settings102294/navigator';
import NotificationList102293Navigator from '../features/NotificationList102293/navigator';
import Maps102292Navigator from '../features/Maps102292/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps102405: { screen: Maps102405Navigator },
UserProfile102401: { screen: UserProfile102401Navigator },
BlankScreen59102378: { screen: BlankScreen59102378Navigator },
UserProfile102350: { screen: UserProfile102350Navigator },
Maps102331: { screen: Maps102331Navigator },
Settings102309: { screen: Settings102309Navigator },
Settings102294: { screen: Settings102294Navigator },
NotificationList102293: { screen: NotificationList102293Navigator },
Maps102292: { screen: Maps102292Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
