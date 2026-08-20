import { create } from "zustand";

export type LiveStatus = "off" | "connecting" | "syncing" | "online" | "error";

interface LiveState {
  status: LiveStatus;
  version: number | null;
  pending: number;
  error: string | null;
  setStatus: (status: LiveStatus, error?: string | null) => void;
  setVersion: (version: number | null) => void;
  setPending: (pending: number) => void;
  reset: () => void;
}

export const useLiveStore = create<LiveState>((set) => ({
  status: "off",
  version: null,
  pending: 0,
  error: null,
  setStatus: (status, error = null) => set({ status, error }),
  setVersion: (version) => set({ version }),
  setPending: (pending) => set({ pending }),
  reset: () => set({ status: "off", version: null, pending: 0, error: null }),
}));
