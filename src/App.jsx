import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import Test from './pages/Test';
import Signup from "./pages/Signup";
import Menu from "./components/Menu";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/home" element={<Home />}/>
          
          <Route exact path="/test" element={<Test />}/> {/** TODO: delete when home is ready */}
          <Route exact path="/menu" element={<Menu />}/> {/** TODO: delete when done */}

          <Route path="*" element={<Navigate to="/login" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
