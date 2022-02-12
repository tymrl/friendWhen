import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appbar } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { Friend, periodsElapsed, mockData } from "./Friend";
import { FriendRow } from "./FriendRow";

export const FriendListScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "FriendListScreen">) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const getFriends = async () => {
    const friendString = await AsyncStorage.getItem("friends");
    if (friendString) {
      setFriends(JSON.parse(friendString));
    } else {
      setFriends(mockData);
    }
  };
  getFriends().catch(console.error);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "Friends" });
  }, [navigation]);

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
          onPress={() => navigation.navigate("EditFriendScreen")}
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
};

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
