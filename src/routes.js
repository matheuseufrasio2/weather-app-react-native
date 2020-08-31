import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from './pages/Initial';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Initial,
      Main,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#303644',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
