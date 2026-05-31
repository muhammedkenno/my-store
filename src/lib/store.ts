// src/lib/store.ts
import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  slug: string;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;

  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (newItem) => {
    const existing = get().items.find((i) => i.id === newItem.id);

    if (existing) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      }));
    } else {
      set((state) => ({
        items: [...state.items, { ...newItem, quantity: 1 }],
      }));
    }
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  increaseQuantity: (id) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    }));
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      items: state.items
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    }));
  },

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
