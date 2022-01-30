import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export const EditFriendScreen = () => {
  const [name, setName] = useState("New friend");
  const [daysPerContact, setDaysPerContact] = useState(30);

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        autoComplete="off"
        onChangeText={setName}
      />
      <TextInput
        label="Days per contact"
        value={daysPerContact.toString()}
        onChangeText={(dps) => setDaysPerContact(parseInt(dps))}
        autoComplete="off"
        keyboardType="numeric"
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
