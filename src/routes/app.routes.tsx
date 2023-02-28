import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@src/screens/Home";
import { Details } from "@src/screens/Details/index";
import { Appointment } from "@src/screens/Appointment";

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
        component={Appointment}
      />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;
