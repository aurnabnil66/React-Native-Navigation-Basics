import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/Navigators/DrawerNavigator';

const App: FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
