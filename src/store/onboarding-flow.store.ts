import { create } from "zustand";

export const OnboardingStep = {
  START: "START",
  SIMULATION: "SIMULATION",
  PERSONAL_DATA: "PERSONAL_DATA",
  DOCUMENTS: "DOCUMENTS",
  CONFIRMATION: "CONFIRMATION",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  CANCELLED: "CANCELLED",
  EXPIRED: "EXPIRED",
} as const;

export const STEP_INDEX: Record<OnboardingStep, number> = {
  START: 0,
  SIMULATION: 1,
  PERSONAL_DATA: 2,
  DOCUMENTS: 3,
  CONFIRMATION: 4,
  SUCCESS: 5,
  ERROR: 6,
  CANCELLED: 7,
  EXPIRED: 8,
};

export type OnboardingStep = (typeof OnboardingStep)[keyof typeof OnboardingStep];

const FLOW: OnboardingStep[] = [
  OnboardingStep.START,
  OnboardingStep.SIMULATION,
  OnboardingStep.PERSONAL_DATA,
  OnboardingStep.DOCUMENTS,
  OnboardingStep.CONFIRMATION,
];

export type OnboardingFlowState = {
  step: OnboardingStep;

  next: () => void;
  back: () => void;
  goTo: (step: OnboardingStep) => void;

  success: () => void;
  error: () => void;
  cancel: () => void;
  expire: () => void;

  reset: () => void;

  canNext: () => boolean;
  canBack: () => boolean;
};

export const useOnboardingFlowStore = create<OnboardingFlowState>((set, get) => ({
  step: OnboardingStep.START,

  next: () => {
    const current = get().step;
    const index = FLOW.indexOf(current);

    if (index < FLOW.length - 1) {
      set({ step: FLOW[index + 1] });
    }
  },

  back: () => {
    const current = get().step;
    const index = FLOW.indexOf(current);

    if (index > 0) {
      set({ step: FLOW[index - 1] });
    }
  },

  goTo: (step) => set({ step }),

  success: () => set({ step: OnboardingStep.SUCCESS }),
  error: () => set({ step: OnboardingStep.ERROR }),
  cancel: () => set({ step: OnboardingStep.CANCELLED }),
  expire: () => set({ step: OnboardingStep.EXPIRED }),

  reset: () => set({ step: OnboardingStep.START }),

  canNext: () => {
    const index = FLOW.indexOf(get().step);
    return index < FLOW.length - 1;
  },

  canBack: () => {
    const index = FLOW.indexOf(get().step);
    return index > 0;
  },
}));