import * as React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@src/screens/SignIn";
import { Home } from "@src/screens/Home";
import { Details } from "../screens/Details/index";
import { CreatePlay } from "../screens/CreatePlay/indext";

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
      <StackAuth.Screen
        options={{ headerShown: false }}
        name="Details"
        component={Details}
      />
      <StackAuth.Screen
        options={{ headerShown: false }}
        name="CreatePlay"
        component={CreatePlay}
      />
    </StackAuth.Navigator>
  );
}

export default AppRoutes;
