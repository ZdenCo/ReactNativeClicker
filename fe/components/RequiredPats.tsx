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

export function RequiredPats({ require }: { require: number }) {
  // Create a shared value for the animation
  const y = useSharedValue(0);
  const o = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }],
    opacity: o.value,
  }));

  useEffect(() => {
    o.value = withTiming(1, { duration: 700 }); // Stay at full opacity for 0.5 seconds
    y.value = withTiming(-20, { duration: 1000 });
    y.value = withRepeat(withTiming(5, { duration: 500 }), -1, true);
  }, [y]);

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText
        style={{ ...styles.text, fontSize: 10 + require, opacity: 0.85 }}
      >
        💔
      </ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: -6,
  },
});
