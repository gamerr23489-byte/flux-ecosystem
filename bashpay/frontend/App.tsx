import { Show, SignInButton, SignUpButton } from '@clerk/react'
import BashPay from './pages/BashPay'

function AuthLanding() {
  return <main className="auth-landing">
    <div className="auth-glow" />
    <div className="auth-card">
      <div className="brand-mark">B</div>
      <div className="over">BASHPAY / GLOBAL MONEY</div>
      <h1>One workspace for your money universe.</h1>
      <p>Accounts, currencies, transfers, cards and financial organization in one secure experience.</p>
      <div className="auth-actions">
        <SignInButton><button className="primary" type="button">Sign in</button></SignInButton>
        <SignUpButton><button className="ghost" type="button">Create account</button></SignUpButton>
      </div>
      <small>Protected by Clerk authentication.</small>
    </div>
  </main>
}

export default function App() {
  return <>
    <Show when="signed-out"><AuthLanding /></Show>
    <Show when="signed-in"><BashPay /></Show>
  </>
}
