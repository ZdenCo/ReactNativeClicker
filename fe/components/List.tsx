import { ReactElement } from "react";
import { StyleSheet } from "react-native";

export default function List({ children }: { children: React.ReactNode }) {
  return <div style={styles.listContainer}>{children}</div>;
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    flexDirection: "column",
    display: "flex",
    backgroundColor: "#f0f0f0",
    gap: 8,
  },
});
