import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import AOS from 'aos';
AOS.init();

function App() {

  return (
    <>
            <BrowserRouter>
              <Routes>
                  <Route index element={<LandingPage />} />
                  <Route path="/home" element={<LandingPage />} />
              </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
