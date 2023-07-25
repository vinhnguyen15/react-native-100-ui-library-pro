const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Story from "./screens/Story";
import SocialShare from "./screens/SocialShare";
import Feed from "./screens/Feed";
import ReaderOptions from "./screens/ReaderOptions";
import Selector from "./screens/Selector";
import SignUp from "./screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
    "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Story"
              component={Story}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocialShare"
              component={SocialShare}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReaderOptions"
              component={ReaderOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Selector"
              component={Selector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
