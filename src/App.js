import "./App.css";
import Homee from "./screens/Homee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import SignUp from "./screens/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";
import Canteen from './screens/Canteen';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Homee />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
          <Route exaxt path="/canteen" element={<Canteen/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
