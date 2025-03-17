import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/DashBoard';
import Modules from './screens/Modules';
import BusinessAnalysis from './screens/BusinessAnalysis';
import Settings from './screens/Settings';
import PersonalDetails from './screens/PersonalDetails';
import AccountManagement from './screens/AccountManagement';
import ChangePassword from './screens/ChangePassword';
import Logout from './screens/Logout';
// ...other imports...

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Modules" component={Modules} />
        <Stack.Screen name="BusinessAnalysis" component={BusinessAnalysis} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="AccountManagement" component={AccountManagement} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Logout" component={Logout} />
        {/* ...other screens... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
