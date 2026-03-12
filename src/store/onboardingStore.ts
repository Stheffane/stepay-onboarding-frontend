import { create } from "zustand"

type OnboardingState = {

  userName?: string
  userEmail?: string
  userCpf?: string
  userPhone?: string

  loanAmount?: number

  setUserData: (data: Partial<OnboardingState>) => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({

  setUserData: (data) =>
    set((state) => ({
      ...state,
      ...data
    }))

}))