import { ProgressionItem, Unlockable } from "@/types";
import { Button, StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { buyUnlockable } from "@/store/slices/progressionSlice";
import { Collapsible } from "./Collapsible";
import BuyButton from "./BuyButton";
import { ThemedText } from "./ThemedText";

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
        <ThemedText type="defaultSemiBold">{unlockable.name}</ThemedText>
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
    minHeight: 65,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    display: "flex",
  },
  button: {
    padding: 10,
    backgroundColor: "#219AF3",
    borderRadius: 5,
  },
});
