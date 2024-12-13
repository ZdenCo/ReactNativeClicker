// reducer.ts

import { ProgressionData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import rabbitImage from "@/assets/images/rabbit.webp";
import huskyImage from "@/assets/images/husky.png";

export const progressionSlice = createSlice({
  name: "progression",
  initialState: {
    progression: [
      {
        id: 1,
        name: "Eduard Kralik",
        width: 100,
        height: 100,
        image: rabbitImage,
        value: 1000,
        cost: 0,
        isUnlocked: false,
        unlockables: [
          {
            id: 1,
            name: "Item1.1",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 2,
            name: "Item1.2",
            passiveValue: 100000,
            cost: 1000,
            isUnlocked: false,
          },
        ],
      },
      {
        id: 2,
        name: "Item2",
        width: 100,
        height: 150,
        value: 2,
        image: huskyImage,
        cost: 100,
        isUnlocked: false,
        unlockables: [],
      },
      {
        id: 3,
        name: "Item3",
        width: 100,
        height: 100,
        value: 3,
        image: huskyImage,
        cost: 1000,
        isUnlocked: false,
        unlockables: [],
      },
      {
        id: 4,
        name: "Item4",
        width: 100,
        height: 100,
        value: 4,
        image: huskyImage,
        cost: 10000,
        isUnlocked: false,
        unlockables: [],
      },
      {
        id: 5,
        name: "Item4",
        width: 100,
        height: 100,
        value: 4,
        image: huskyImage,
        cost: 10000,
        isUnlocked: false,
        unlockables: [],
      },
      {
        id: 6,
        name: "Item4",
        width: 100,
        height: 100,
        value: 4,
        image: huskyImage,
        cost: 10000,
        isUnlocked: false,
        unlockables: [],
      },
      {
        id: 7,
        name: "Item4",
        width: 100,
        height: 100,
        value: 4,
        image: huskyImage,
        cost: 10000,
        isUnlocked: false,
        unlockables: [],
      },
    ],
  },
  reducers: {
    buyItem: (state, action) => {
      const item = state.progression.find((item) => item.id === action.payload);
      if (!item) throw new Error("Item not found");
      item.isUnlocked = true;
    },
    buyUnlockable: (state, action) => {
      const item = state.progression.find(
        (item) => item.id === action.payload.itemId
      );
      if (!item) throw new Error("Item not found");
      const unlockable = item.unlockables.find(
        (unlockable) => unlockable.id === action.payload.unlockableId
      );
      if (!unlockable) throw new Error("Item not found");
      unlockable.isUnlocked = true;
    },
  },
});

export const { buyItem, buyUnlockable } = progressionSlice.actions;

export default progressionSlice.reducer;
