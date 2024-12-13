import { useSelector } from "react-redux";
import { HelloWave } from "./HelloWave";
import { ThemedView } from "./ThemedView";
import { StyleSheet, View, Image } from "react-native";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Header() {
  const storeScore = useSelector((state) => state.counter.score);
  const [prevScore, setPrevScore] = useState(storeScore);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setPrevScore(score);

    setScore(storeScore);
  }, [storeScore]);

  return (
    <View>
      <ThemedView style={styles.titleContainer}>
        <CountUp start={prevScore} end={storeScore} duration={1} />
        <HelloWave />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    color: "black",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
});
