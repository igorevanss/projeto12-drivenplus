import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyles";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/sign-up" element={<RegistrationPage />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
