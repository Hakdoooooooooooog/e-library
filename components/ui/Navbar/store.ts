import { create } from "zustand";

type NavbarState = {
  isOpen: boolean;
};

type NavbarActions = {
  setIsOpen: (isOpen: NavbarState["isOpen"]) => void;
};

type NavbarStore = NavbarState & NavbarActions;

export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
