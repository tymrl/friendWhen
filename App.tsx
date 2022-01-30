import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import { Friend, periodsElapsed, mockData } from "./src/Friend";
import { FriendRow } from "./src/FriendRow";

export default function App() {
  const [friends, setFriends] = useState(mockData);

  const updateFriend = (friend: Friend) => {
    const newFriends = [...friends];
    newFriends[newFriends.findIndex((f) => f.id === friend.id)] = friend;
    newFriends.sort((a, b) => periodsElapsed(b) - periodsElapsed(a));
    setFriends(newFriends);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.listContainer}>
        <FlatList
          data={friends.sort((a, b) => periodsElapsed(b) - periodsElapsed(a))}
          renderItem={({ item }) => FriendRow({ friend: item, updateFriend })}
        />
        <View style={styles.spacer} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    display: "flex",
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
});
