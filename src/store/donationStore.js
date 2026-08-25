import { create } from "zustand";

// Single source of truth for the donation flow, shared between the
// amount/frequency picker and the summary panel on the Donate page.
export const useDonationStore = create((set, get) => ({
  amount: 50,
  customAmount: "",
  frequency: "once", // 'once' | 'monthly'
  designation: "Where needed most",
  submitted: false,

  setAmount: (amount) => set({ amount, customAmount: "" }),
  setCustom: (value) => set({ customAmount: value, amount: null }),
  setFrequency: (frequency) => set({ frequency }),
  setDesignation: (designation) => set({ designation }),
  submit: () => set({ submitted: true }),
  reset: () =>
    set({
      amount: 50,
      customAmount: "",
      frequency: "once",
      designation: "Where needed most",
      submitted: false,
    }),

  // Derived value — call as a plain function: useDonationStore.getState().effectiveAmount()
  // or, inside a component, via the selector pattern shown in Donate.jsx.
  effectiveAmount: () => {
    const { amount, customAmount } = get();
    return customAmount ? Number(customAmount) || 0 : amount || 0;
  },
}));
