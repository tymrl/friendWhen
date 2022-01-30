import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FriendListScreen } from "./src/FriendListScreen";
import { EditFriendScreen } from "./src/EditFriendScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FriendListScreen" component={FriendListScreen} />
        <Stack.Screen name="EditFriendScreen" component={EditFriendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
