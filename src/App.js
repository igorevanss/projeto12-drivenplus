import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/style/GlobalStyles'
import LoginPage from './pages/loginPage/LoginPage'
import PlansPage from './pages/plansPage/PlansPage'
import RegistrationPage from './pages/registrationPage/RegistrationPage'
import PlanPage from './pages/planPage/PlanPage'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route path="/subscriptions" element={<PlansPage />} />
        <Route path="/subscriptions/ID_DO_PLANO" element={<PlanPage />} />
      </Routes>
    </BrowserRouter>
  )
}
