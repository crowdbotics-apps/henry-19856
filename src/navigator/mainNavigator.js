import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95178Navigator from '../features/UserProfile95178/navigator';
import Settings95177Navigator from '../features/Settings95177/navigator';
import Settings95175Navigator from '../features/Settings95175/navigator';
import SignIn295173Navigator from '../features/SignIn295173/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95178: { screen: UserProfile95178Navigator },
Settings95177: { screen: Settings95177Navigator },
Settings95175: { screen: Settings95175Navigator },
SignIn295173: { screen: SignIn295173Navigator },

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
