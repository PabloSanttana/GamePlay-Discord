import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@src/screens/Home";
import { Details } from "../screens/Details/index";
import { CreatePlay } from "../screens/CreatePlay/indext";

const StackRoutes = createNativeStackNavigator();

function AppRoutes() {
  return (
    <StackRoutes.Navigator>
      <StackRoutes.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <StackRoutes.Screen
        options={{ headerShown: false }}
        name="Details"
        component={Details}
      />
      <StackRoutes.Screen
        options={{ headerShown: false }}
        name="CreatePlay"
        component={CreatePlay}
      />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;
