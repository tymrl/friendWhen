import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appbar } from "react-native-paper";
import { Friend, periodsElapsed, mockData } from "./src/Friend";
import { FriendRow } from "./src/FriendRow";

export default function App() {
  const [friends, setFriends] = useState(mockData);
  useEffect(() => {
    const getFriends = async () => {
      const friendString = await AsyncStorage.getItem("friends");
      if (friendString) {
        setFriends(JSON.parse(friendString));
      } else {
        setFriends(mockData);
      }
    };
    getFriends().catch(console.error);
  }, []);

  const updateFriend = (friend: Friend) => {
    const newFriends = [...friends];
    newFriends[newFriends.findIndex((f) => f.id === friend.id)] = friend;
    AsyncStorage.setItem("friends", JSON.stringify(newFriends));
    setFriends(newFriends);
  };

  return (
    <SafeAreaView style={styles.root}>
      <Appbar style={styles.appbar}>
        <Appbar.Action
          icon="account-plus"
          onPress={() => console.log("Pressed archive")}
        />
      </Appbar>
      <View style={styles.body}>
        <View style={styles.listContainer}>
          <FlatList
            data={friends.sort((a, b) => periodsElapsed(b) - periodsElapsed(a))}
            renderItem={({ item }) => FriendRow({ friend: item, updateFriend })}
          />
          <View style={styles.spacer} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appbar: {
    display: "flex",
    flexDirection: "row",
  },
  body: {
    display: "flex",
    flexDirection: "row",
  },
  listContainer: {
    display: "flex",
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
});
