import { StyleSheet } from "react-native";

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
    <div>
      {!isUnlocked && (
        <button
          style={styles.button}
          aria-label="Increment value"
          onClick={onClick}
        >
          {cost}
        </button>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
});
