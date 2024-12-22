import { ProgressionItem } from "@/types";
import { StyleSheet, View, Text } from "react-native";
import { Collapsible } from "./Collapsible";
import ItemUnlockable from "./ItemUnlockable";
import BuyButton from "./BuyButton";
import { useScoreLogic } from "@/hooks/useScoreLogic";
import { ThemedText } from "./ThemedText";

export default function Item(props: { item: ProgressionItem }) {
  const { buyItemMain, buyUnlockableMain } = useScoreLogic();
  return (
    <View>
      <View style={styles.itemContainer}>
        <ThemedText type="subtitle">{props.item.name}</ThemedText>
        <BuyButton
          cost={props.item.cost}
          isUnlocked={props.item.isUnlocked}
          onClick={() => buyItemMain(props.item.id, props.item.cost)}
        />
      </View>
      {props.item.isUnlocked && (
        <Collapsible title="Unlockables">
          {props.item.unlockables.map((unlockable) => (
            <ItemUnlockable
              unlockable={unlockable}
              onBuy={() =>
                buyUnlockableMain({
                  unlockableId: unlockable.id,
                  itemId: props.item.id,
                  passiveValue: unlockable.passiveValue,
                  cost: unlockable.cost,
                })
              }
            />
          ))}
        </Collapsible>
      )}
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
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
});
