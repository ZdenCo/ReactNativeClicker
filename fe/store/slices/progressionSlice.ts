// reducer.ts

import { ProgressionData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import ede from "@/assets/images/ede.png";
import bob from "@/assets/images/bob.png";
import chic from "@/assets/images/chic.png";
import nair from "@/assets/images/nair.png";
import sne from "@/assets/images/sne.png";

export const progressionSlice = createSlice({
  name: "progression",
  initialState: {
    progression: [
      {
        id: 1,
        name: "Eduard Kralik",
        width: 100,
        height: 100,
        image: ede,
        value: 1000,
        requiredPats: 0,
        cost: 0,
        isUnlocked: false,
        unlockables: [
          {
            id: 1,
            name: "Dropsy",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 2,
            name: "Zralok",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 2,
            name: "Ledvina",
            passiveValue: 100000,
            cost: 1000,
            isUnlocked: false,
          },
        ],
      },
      {
        id: 2,
        name: "Bobisan",
        width: 100,
        height: 150,
        value: 2,
        requiredPats: 0,
        image: bob,
        cost: 100,
        isUnlocked: false,
        unlockables: [
          {
            id: 1,
            name: "Balonek",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 2,
            name: "Hlavolam",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 3,
            name: "Postylka",
            passiveValue: 100000,
            cost: 1000,
            isUnlocked: false,
          },
        ],
      },
      {
        id: 3,
        name: "Nairuska",
        width: 100,
        height: 100,
        value: 3,
        image: nair,
        requiredPats: 0,
        cost: 1000,
        isUnlocked: false,
        unlockables: [
          {
            id: 1,
            name: "Balonek",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 2,
            name: "Hlavolam",
            passiveValue: 1000,
            cost: 100,
            isUnlocked: false,
          },
          {
            id: 3,
            name: "Postylka",
            passiveValue: 100000,
            cost: 1000,
            isUnlocked: false,
          },
        ],
      },
      {
        id: 4,
        name: "Chico",
        width: 100,
        height: 100,
        value: 4,
        image: chic,
        requiredPats: 0,
        cost: 10000,
        isUnlocked: false,
        unlockables: [],
      },
      {
        id: 6,
        name: "Snezenka",
        width: 100,
        height: 100,
        value: 4,
        image: sne,
        requiredPats: 0,
        cost: 10000,
        isUnlocked: false,
        unlockables: [],
      },
    ],
  },
  reducers: {
    requirePats: (state, action) => {
      const item = state.progression.find(
        (item) => item.id === action.payload.id
      );
      if (!item) throw new Error("Item not found");
      item.requiredPats += action.payload.requiredPats;
    },
    pat: (state, action) => {
      const item = state.progression.find((item) => item.id === action.payload);
      if (!item) throw new Error("Item not found");
      if (item.requiredPats === 0) return;
      item.requiredPats -= 1;
    },
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

export const { buyItem, buyUnlockable, requirePats, pat } =
  progressionSlice.actions;

export default progressionSlice.reducer;
