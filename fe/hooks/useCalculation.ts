import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "@/store/slices/counterSlice";

export default function useCalculation() {
  const passiveScore = useSelector((state) => state.counter.passive);
  const dispatch = useDispatch();

  const passiveRef = useRef(passiveScore);

  useEffect(() => {
    passiveRef.current = passiveScore;
  }, [passiveScore]);

  useEffect(() => {
    const calculationLoop = setInterval(() => {
      if (!passiveRef.current) return;
      dispatch(incrementByAmount(passiveRef.current));
    }, 500);

    return () => clearInterval(calculationLoop);
  }, []);
}
