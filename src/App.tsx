<<<<<<< HEAD
import './App.css'
import Header from './components/Header'
import Hotels from './components/Hotels'
function App() {

  return (
    <>
    <Header/>
    <Hotels/>
    </>
  )
}

export default App
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Check from "./pages/Check";
import Home from "./pages/Home";
import FinalCheckout from "./pages/FinalCheckout";

function App() {
  return (
    <>
      <div className="m-3">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/next" element={<Check />} />
            <Route path="/final-checkout" element={<FinalCheckout />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
>>>>>>> de06de4 (latest)
