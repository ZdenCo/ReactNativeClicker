import { Pressable, StyleSheet, View, Text } from "react-native";

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
          <Text>{cost}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
});
