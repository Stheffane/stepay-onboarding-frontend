import { Outlet } from "react-router-dom"

export function OnboardingLayout() {

  return (
    <div>
      <header>
        <h2>Stepay Onboarding</h2>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}