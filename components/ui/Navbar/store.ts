import { create } from "zustand";
import { useShallow } from "zustand/shallow";

type NavbarState = {
  isOpen: boolean;
};

type NavbarActions = {
  setIsOpen: (isOpen: NavbarState["isOpen"]) => void;
};

type NavbarStore = NavbarState & NavbarActions;

export const useStore = create<NavbarStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

type PickPartial<T, K extends keyof T> = Pick<T, K>;

export const useNavbarStore = <K extends keyof NavbarStore>(keys: K[]) => {
  const state = useStore(
    useShallow((state) => {
      const selectedState: PickPartial<NavbarStore, K> = {} as PickPartial<
        NavbarStore,
        K
      >;
      keys.forEach((key) => {
        selectedState[key] = state[key];
      });
      return selectedState;
    })
  );

  return state;
};
