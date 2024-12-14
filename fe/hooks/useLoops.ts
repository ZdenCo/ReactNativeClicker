import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "@/store/slices/counterSlice";
import { ProgressionItem } from "@/types";
import { requirePats } from "@/store/slices/progressionSlice";

export default function useLoops() {
  const progressionItems = useSelector(
    (state) => state.progression.progression
  ) as ProgressionItem[];

  const passiveScore = useSelector((state) => state.counter.passive);
  const dispatch = useDispatch();

  const passiveRef = useRef(passiveScore);

  useEffect(() => {
    passiveRef.current = passiveScore;
  }, [passiveScore]);

  useEffect(() => {
    const passiveGainLoop = setInterval(() => {
      if (!passiveRef.current) return;
      dispatch(incrementByAmount(passiveRef.current));
    }, 500);

    const patsLoop = setInterval(() => {
      const availableItems = progressionItems.filter(
        (item) => item.isUnlocked && !item.requiredPats
      );
      console.log("availableItems", availableItems);

      if (!availableItems.length) return;
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      const randomNumber = Math.floor(Math.random() * 10) + 5;

      dispatch(
        requirePats({
          id: availableItems[randomIndex].id,
          requiredPats: randomNumber,
        })
      );
    }, 3000);

    return () => {
      clearInterval(passiveGainLoop);
      clearInterval(patsLoop);
    };
  }, [progressionItems]);
}
