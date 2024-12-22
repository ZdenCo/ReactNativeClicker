import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

export default function List({ children }: { children: React.ReactNode }) {
  return <View style={styles.listContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    display: "flex",
    gap: 8,
  },
});
