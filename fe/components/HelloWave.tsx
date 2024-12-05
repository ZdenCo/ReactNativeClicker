import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

import { ThemedText } from "@/components/ThemedText";
import { useEffect } from "react";

export function HelloWave({ onComplete }: { onComplete: () => void }) {
  // Create a shared value for the animation
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const o = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
    opacity: o.value,
  }));

  useEffect(() => {
    o.value = withSequence(
      withTiming(1, { duration: 700 }), // Stay at full opacity for 0.5 seconds
      withTiming(0, { duration: 300 }) // Fade to 0 over 0.5 seconds
    );
    y.value = withTiming(-100, { duration: 1000 });
    x.value = withRepeat(withTiming(20, { duration: 300 }), -1, true);
    setTimeout(onComplete, 1000);
  }, [x, y]);

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>❤️</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
