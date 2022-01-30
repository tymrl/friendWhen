import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FriendList } from "./src/FriendList";
import { EditFriendScreen } from "./src/EditFriendScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FriendList" component={FriendList} />
        <Stack.Screen name="EditFriendScreen" component={EditFriendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
