// Type for Unlockables
export interface Unlockable {
  id: string;
  name: string;
  passiveValue: number;
  cost: number;
  isUnlocked: boolean;
}

// Type for Progression Item
export interface ProgressionItem {
  id: string;
  name: string;
  value: number;
  image: any;
  lockedImage: any;
  cost: number;
  isUnlocked: boolean;
  unlockables: Unlockable[]; // Optional because not all items have unlockables
}

// Type for the overall Progression structure
export interface ProgressionData {
  progression: ProgressionItem[];
}