import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/SplashScreen";
import SplashScreen from "../screens/SplashScreen";
import { PRIMARY_COLOR, TRANSPARENT_COLOR } from "../config/Config";
import Dashboard from "../screens/Dashboard";

export type MainNavigationStackParamList = {
  Splash: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<MainNavigationStackParamList>();

const MainNavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          statusBarColor: PRIMARY_COLOR,
          headerBackTitle: "",
          title: "",
          headerTintColor: TRANSPARENT_COLOR,
          headerTransparent: true,
          contentStyle: { backgroundColor: TRANSPARENT_COLOR },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationStack;
