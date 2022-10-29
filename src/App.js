import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/style/GlobalStyles'
import LoginPage from './pages/loginPage/LoginPage'
import PlansPage from './pages/plansPage/PlansPage'
import RegistrationPage from './pages/registrationPage/RegistrationPage'
import PlanPage from './pages/planPage/PlanPage'
import AuthContext from './contexts/AuthContext'
import { useState } from 'react'
import HomePage from './pages/homePage/HomePage'

export default function App() {
  const [auth, setAuth] = useState(localStorage.getItem("token"))
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route path="/subscriptions" element={<PlansPage />} />
        <Route path="/subscriptions/:idPlan" element={<PlanPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}
