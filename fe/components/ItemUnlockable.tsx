import { ProgressionItem, Unlockable } from "@/types";
import { Button, StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { buyUnlockable } from "@/store/slices/progressionSlice";
import { Collapsible } from "./Collapsible";
import BuyButton from "./BuyButton";

export default function Item({
  unlockable,
  onBuy,
}: {
  unlockable: Unlockable;
  onBuy: () => void;
}) {
  return (
    <View>
      <View style={styles.itemContainer}>
        <Text>{unlockable.name}</Text>
        <BuyButton
          cost={unlockable.cost}
          isUnlocked={unlockable.isUnlocked}
          onClick={() => onBuy()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    display: "flex",
  },
  button: {
    padding: 10,
    backgroundColor: "#219AF3",
    borderRadius: 5,
  },
});
