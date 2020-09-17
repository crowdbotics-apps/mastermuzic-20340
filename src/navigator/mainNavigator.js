import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps102770Navigator from '../features/Maps102770/navigator';
import Maps102752Navigator from '../features/Maps102752/navigator';
import Add-Item102751Navigator from '../features/Add-Item102751/navigator';
import Maps102747Navigator from '../features/Maps102747/navigator';
import UserProfile102743Navigator from '../features/UserProfile102743/navigator';
import Maps102410Navigator from '../features/Maps102410/navigator';
import Add-Item102409Navigator from '../features/Add-Item102409/navigator';
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
Maps102770: { screen: Maps102770Navigator },
Maps102752: { screen: Maps102752Navigator },
Add-Item102751: { screen: Add-Item102751Navigator },
Maps102747: { screen: Maps102747Navigator },
UserProfile102743: { screen: UserProfile102743Navigator },
Maps102410: { screen: Maps102410Navigator },
Add-Item102409: { screen: Add-Item102409Navigator },
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
