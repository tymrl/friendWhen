import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Friend } from "./Friend";
import Swipeable from "react-native-gesture-handler/Swipeable";
import moment from "moment";

const rowColor = (periodsElapsed: number): string => {
  let red: number;
  let green: number;
  let blue: number;

  if (periodsElapsed <= 1) {
    red = Math.round(88 * periodsElapsed);
    green = Math.round(122 - (122 - 86) * periodsElapsed);
    blue = Math.round(255 - (255 - 214) * periodsElapsed);
  } else {
    red = Math.round(88 + (255 - 88) * Math.min(periodsElapsed - 1, 1));
    green = Math.round(86 - (86 - 59) * Math.min(periodsElapsed - 1, 1));
    blue = Math.round(214 - (214 - 48) * Math.min(periodsElapsed - 1, 1));
  }

  return `rgb(${red}, ${green}, ${blue})`;
};

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
      }}
    >
      <Animated.Text
        style={{
          paddingHorizontal: 10,
          transform: [{ scale }],
        }}
      >
        ✔️
      </Animated.Text>
    </View>
  );
};

interface FriendRowProps {
  friend: Friend;
  updateFriend: (friend: Friend) => void;
}

export const FriendRow = (props: FriendRowProps) => {
  const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: rowColor(props.friend.periodsElapsed),
      padding: 12,
    },
    friendName: {
      flex: 1,
      fontSize: 24,
    },
    lastSeenDate: {
      fontSize: 24,
    },
  });

  const updateLastSeen = () => {
    const updatedFriend = { ...props.friend };
    updatedFriend.lastSeen = moment();
    props.updateFriend(updatedFriend);
  };

  return (
    <Swipeable
      key={props.friend.lastSeen.unix()}
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={() => updateLastSeen()}
    >
      <View style={styles.row}>
        <Text style={styles.friendName}>{props.friend.name}</Text>
        <Text style={styles.lastSeenDate}>
          {props.friend.lastSeen.format("MMM D")}
        </Text>
      </View>
    </Swipeable>
  );
};
