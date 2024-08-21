import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomtabNavigator} from './BottomTabNavigator';
import {ContactStackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'lightblue',
        },
      }}>
      <Drawer.Screen name="Home" component={BottomtabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};
