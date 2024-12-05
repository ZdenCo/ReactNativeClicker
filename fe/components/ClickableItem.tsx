import React, { useRef, useState } from "react";
import { Animated, Image, StyleSheet, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "@/store/slices/counterSlice";
import { HelloWave } from "./HelloWave";

export default function ClickableItem({
  image,
  width,
  height,
  value,
}: {
  image: any;
  width: number;
  height: number;
  value: number;
}) {
  const dispatch = useDispatch();
  const [activeAnimations, setActiveAnimations] = useState<number[]>([]);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleCreateElement = () => {
    const id = Date.now();
    setActiveAnimations((prev) => [...prev, id]);

    setTimeout(() => {
      setActiveAnimations((prev) =>
        prev.filter((animationId) => animationId !== id)
      );
    }, 1000);
  };

  // Function to handle press animation
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start(() => {
      dispatch(incrementByAmount(value));
      handleCreateElement();
    });
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ position: "relative" }}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ width, height }}
      >
        <Animated.View
          style={[
            styles.clickableItemContainer,
            { transform: [{ scale: scaleAnim }], width, height },
          ]}
        >
          <Image style={{ width: "100%", height: "100%" }} source={image} />
        </Animated.View>
      </Pressable>
      <View style={{ position: "absolute", bottom: 0, pointerEvents: "none" }}>
        {activeAnimations.map((id) => (
          <HelloWave key={id} onComplete={() => {}} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clickableItemContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
});
