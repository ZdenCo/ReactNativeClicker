/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { buyItem, buyUnlockable } from "@/store/slices/progressionSlice";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import {
  decrementByAmount,
  increasePassiveByAmount,
} from "@/store/slices/counterSlice";

export function useScoreLogic() {
  const storeScore = useSelector((state) => state.counter.score);
  const dispatch = useDispatch();
  const toast = useToast();

  function buyItemMain(id: string, cost: number) {
    if (storeScore >= cost) {
      decrementByAmount(cost);
      dispatch(buyItem(id));
    } else {
      toast.show("Not enough currency", { type: "warning" });
    }
  }
  function buyUnlockableMain({
    unlockableId,
    itemId,
    passiveValue,
    cost,
  }: {
    unlockableId: string;
    itemId: string;
    passiveValue: number;
    cost: number;
  }) {
    if (storeScore >= cost) {
      decrementByAmount(cost);
      dispatch(buyUnlockable({ unlockableId, itemId }));
      dispatch(increasePassiveByAmount(passiveValue));
    } else {
      toast.show("Not enough currency", { type: "warning" });
    }
  }

  return { buyItemMain, buyUnlockableMain };
}
