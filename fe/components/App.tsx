import {
  Image,
  StyleSheet,
  Platform,
  Button,
  View,
  ImageBackground,
} from "react-native";

import { useSelector } from "react-redux";
import Header from "@/components/Header";
import { ProgressionItem } from "@/types";
import List from "@/components/List";
import Item from "@/components/Item";
import useLoops from "@/hooks/useLoops";
import ClickableItem from "./ClickableItem";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  useLoops();
  const progressionObject = useSelector(
    (state) => state.progression.progression
  ) as ProgressionItem[];

  if ((Text as any).defaultProps == null) {
    (Text as any).defaultProps = {};
  }
  (Text as any).defaultProps.style = { fontFamily: "Pixelify" };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.topContainer}
        source={require("@/assets/images/bg.jpg")}
      >
        <Header />

        <View>
          <View style={styles.personContainer}>
            <Image
              style={{ height: 200, width: 100 }}
              source={require("@/assets/images/woman.png")}
            />
          </View>
          <View style={styles.animalContainerBack}>
            {progressionObject.slice(3).map((item, index) => (
              <ClickableItem key={index} item={item} />
            ))}
          </View>
          <View style={styles.animalContainerFront}>
            {progressionObject.slice(0, 3).map((item, index) => (
              <ClickableItem key={index} item={item} />
            ))}
          </View>
        </View>
      </ImageBackground>

      <List>
        {progressionObject.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </List>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    position: "relative",
    height: 600,
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
  },
  personContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 80,
  },
  animalContainerFront: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    pointerEvents: "none",
    position: "absolute",
    justifyContent: "center",

    bottom: 10,
    flexDirection: "row",
  },
  animalContainerBack: {
    display: "flex",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    bottom: 80,
    flexDirection: "row",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepContainer: {
    marginBottom: 8,
  },
  reactLogo: {
    height: 100,
    width: 100,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
