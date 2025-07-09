import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Home from './pages/Home'
import Generations from './pages/Generations'
import Footer from './components/Footer'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Footer />
    </BrowserRouter>
  )
}

function Layout() {
  const location = useLocation();
  const originalNavbarPath = ["/", "/home"]; // add "/" if Home is at root

  const showOriginal = originalNavbarPath.includes(location.pathname);

  return (
    <div>
      {showOriginal ? <Navbar /> : <Navbar2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generations" element={<Generations />} />
      </Routes>
    </div>
  );
}


export default App
