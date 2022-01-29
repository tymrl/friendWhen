import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import { mockData } from "./src/Friend";
import { FriendRow } from "./src/FriendRow";

export default function App() {
  const [friends, setFriends] = useState(mockData);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.listContainer}>
        <FlatList
          data={friends.sort((a, b) => b.periodsElapsed - a.periodsElapsed)}
          renderItem={({ item }) => FriendRow({ friend: item })}
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
