import { create } from "zustand";

interface PopupState {
  visible: boolean;
  show: () => void;
  hide: () => void;
}

export const useLoginPopupStore = create<PopupState>((set) => ({
  visible: false,
  show: () => set({ visible: true }),
  hide: () => set({ visible: false }),
}));
