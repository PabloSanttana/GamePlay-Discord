import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "@src/screens/SignIn";

import AppRoutes from "./app.routes";
import { useAuth } from "@src/hooks/auth";

function Router() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}

export default Router;
