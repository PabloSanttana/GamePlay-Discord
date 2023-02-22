import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import StackAuth from "./auth.routes";

function Router() {
  return (
    <NavigationContainer>
      <StackAuth />
    </NavigationContainer>
  );
}

export default Router;
