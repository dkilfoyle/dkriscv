import create from "zustand";

interface ISettingsStore {
  highlightRanges: boolean;
  highlightPC: boolean;
  filename: string;
}

export const useSettingsStore = create<ISettingsStore>()((set) => ({
  highlightRanges: true,
  highlightPC: true,
  filename: "array.tc",
}));
