import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@src/screens/SignIn";
import { Home } from "@src/screens/Home";

const StackAuth = createNativeStackNavigator();

function AppRoutes() {
  return (
    <StackAuth.Navigator initialRouteName="SignIn">
      <StackAuth.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <StackAuth.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </StackAuth.Navigator>
  );
}

export default AppRoutes;
