import React from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/slices/counterSlice";
import { persistor } from "@/store/testStore";

export function Increment(props: { value?: number }) {
  const incrementor = useSelector((state) => state.counter.incrementor);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          style={styles.Button}
          aria-label="Increment value"
          onClick={() => persistor.purge()}
        >
          Purge
        </button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  Button: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
});
