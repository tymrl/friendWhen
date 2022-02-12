import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import moment from "moment";
import { Friend, makeFriendId } from "./Friend";

export const EditFriendScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "EditFriendScreen">) => {
  const [name, setName] = useState("New friend");
  const [lastSeen, setLastSeen] = useState(moment().format("MM/DD/YYYY"));
  const [daysPerContact, setDaysPerContact] = useState(30);
  const [friends, setFriends] = useState<Friend[]>([]);

  const getFriends = async () => {
    const friendString = await AsyncStorage.getItem("friends");
    if (friendString) {
      setFriends(JSON.parse(friendString));
    } else {
      console.error(
        "No friends data saved when navigating to EditFriendScreen"
      );
    }
  };
  getFriends().catch(console.error);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "Add new friend" });
  }, [navigation]);

  const saveFriend = () => {
    const newFriends = [...friends];
    newFriends.push({
      name,
      lastSeen: moment(lastSeen, "MM/DD/YYYY").toISOString(),
      daysPerContact,
      id: makeFriendId(),
    });
    AsyncStorage.setItem("friends", JSON.stringify(newFriends));
    navigation.navigate("FriendListScreen");
  };

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        autoComplete="off"
        onChangeText={setName}
      />
      <TextInput
        label="Last seen"
        value={lastSeen}
        autoComplete="off"
        placeholder="MM/DD/YYYY"
        onChangeText={setLastSeen}
      />
      <TextInput
        label="Days per contact"
        value={daysPerContact.toString()}
        onChangeText={(dps) => setDaysPerContact(parseInt(dps))}
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
