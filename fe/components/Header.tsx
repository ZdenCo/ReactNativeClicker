import { useSelector } from "react-redux";
import { ThemedView } from "./ThemedView";
import { StyleSheet, Animated } from "react-native";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { ThemedText } from "./ThemedText";

export default function Header() {
  const storeScore = useSelector((state) => state.counter.score);
  const [prevScore, setPrevScore] = useState(storeScore);
  const [score, setScore] = useState(0);
  const [scoreSize, setScoreSize] = useState(24);

  const scaleAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setPrevScore(score);
    setScore(storeScore);

    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    const size = 24 + Math.floor(storeScore / 1000);
    setScoreSize(size > 48 ? 48 : size);
  }, [storeScore]);

  const animatedStyle = {
    transform: [
      {
        scale: scaleAnimation,
      },
    ],
  };

  return (
    <Animated.View style={animatedStyle}>
      <ThemedView style={[styles.titleContainer, { fontSize: scoreSize }]}>
        <ThemedText>❤️ </ThemedText>
        <CountUp start={prevScore} end={storeScore} duration={1} />
        <ThemedText> ❤️</ThemedText>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    color: "black",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  scoreText: {
    fontWeight: "bold",
    color: "black",
  },
});
