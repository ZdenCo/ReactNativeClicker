import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

export default function List({ children }: { children: React.ReactNode }) {
  return <View style={styles.listContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    flexDirection: "column",
    display: "flex",
    backgroundColor: "#f0f0f0",
    gap: 8,
  },
});
