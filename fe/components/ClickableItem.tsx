import React, { useRef, useState } from "react";
import { Animated, Image, StyleSheet, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "@/store/slices/counterSlice";
import { HelloWave } from "./HelloWave";
import { ProgressionItem } from "@/types";

export default function ClickableItem({ item }: { item: ProgressionItem }) {
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
      dispatch(incrementByAmount(item.value));
      handleCreateElement();
    });
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const itemSizeStyle = { width: item.width, height: item.height };
  console.log(itemSizeStyle);
  console.log(item);

  return (
    <View>
      {item.isUnlocked ? (
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{ pointerEvents: "auto", ...itemSizeStyle }}
        >
          <Animated.View
            style={[
              styles.clickableItemContainer,
              { transform: [{ scale: scaleAnim }], ...itemSizeStyle },
            ]}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.image}
            />
          </Animated.View>
        </Pressable>
      ) : (
        <View
          style={{
            ...itemSizeStyle,
            backgroundColor: "red",
            borderColor: "black",
            borderWidth: 1,
          }}
        ></View>
      )}
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
