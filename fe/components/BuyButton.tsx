import { Pressable, StyleSheet, View, Text } from "react-native";
import { ThemedText } from "./ThemedText";

export default function BuyButton({
  isUnlocked,
  onClick,
  cost,
}: {
  cost: number;
  isUnlocked: boolean;
  onClick: () => void;
}) {
  return (
    <View>
      {!isUnlocked && (
        <Pressable
          style={styles.button}
          aria-label="Increment value"
          onPress={onClick}
        >
          <ThemedText type="defaultSemiBold">{`${cost} ❤️`}</ThemedText>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#DCD0EA",
    borderRadius: 5,
  },
});
