import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import moment from "moment";
import { Friend } from "./Friend";

export const EditFriendScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "EditFriendScreen">) => {
  const [friend, setFriend] = useState<Friend>(route.params.friend);
  const [friends, setFriends] = useState<Friend[]>(route.params.friends);
  const [lastSeenString, setLastSeenString] = useState(
    moment(route.params.friend.lastSeen).format("MM/DD/YYYY")
  );
  const [daysPerContactString, setDaysPerContactString] = useState(
    route.params.friend.daysPerContact.toString()
  );

  useEffect(() => {
    setFriend({
      ...friend,
      lastSeen: moment(lastSeenString, "MM/DD/YYYY").toISOString(),
      daysPerContact: parseInt(daysPerContactString),
    });
  }, [lastSeenString, daysPerContactString]);
  useEffect(() => {
    const newFriends = [...friends];
    const friendIndex = friends.findIndex((f) => f.id === friend.id);
    if (friendIndex >= 0) {
      newFriends.splice(friendIndex, 1, friend);
    } else {
      newFriends.push(friend);
    }
    setFriends(newFriends);
  }, [friend.name, friend.lastSeen, friend.daysPerContact]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "Add new friend" });
  }, [navigation]);

  const saveFriend = () => {
    AsyncStorage.setItem("friends", JSON.stringify(friends));
    navigation.navigate("FriendListScreen");
  };

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        label="Name"
        value={friend.name}
        autoComplete="off"
        onChangeText={(name) => setFriend({ ...friend, name })}
      />
      <TextInput
        label="Last seen"
        value={lastSeenString}
        autoComplete="off"
        placeholder="MM/DD/YYYY"
        onChangeText={setLastSeenString}
      />
      <TextInput
        label="Days per contact"
        value={daysPerContactString}
        onChangeText={setDaysPerContactString}
        autoComplete="off"
        keyboardType="numeric"
      />
      <Button mode="contained" style={styles.button} onPress={saveFriend}>
        Save
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: { width: "30%", alignSelf: "center", margin: "3%" },
});
