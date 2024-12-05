import React from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increaseIncrementorByAmount,
  increment,
  incrementByAmount,
} from "@/store/slices/counterSlice";

export function Increase(props: { value: number }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          style={styles.Button}
          aria-label="Increment value"
          onClick={() => dispatch(increaseIncrementorByAmount(props.value))}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  Button: {
    padding: 10,
    backgroundColor: "#354566",
    borderRadius: 5,
  },
});
