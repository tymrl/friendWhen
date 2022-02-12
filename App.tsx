import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { FriendListScreen } from "./src/FriendListScreen";
import { EditFriendScreen } from "./src/EditFriendScreen";

export type RootStackParamList = {
  FriendListScreen: undefined;
  EditFriendScreen: undefined;
};

export const Stack = createNativeStackNavigator();

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
