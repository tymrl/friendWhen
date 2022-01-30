import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export const EditFriendScreen = () => {
  const [name, setName] = useState("New friend");

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        autoComplete="off"
        onChangeText={setName}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
