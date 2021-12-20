import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";

class AppNavigator extends React.Component {
  render() {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
            title: 'My_kantin',
            headerStyle: {
              backgroundColor: '#5631C4'
            }
          }} />
        </Stack.Navigator>
    );
  }
}

export default AppNavigator
