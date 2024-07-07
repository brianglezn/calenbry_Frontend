import React from "react";
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('./pages/landing/Home'));
const Login = React.lazy(() => import('./pages/landing/Login'));
const Register = React.lazy(() => import('./pages/landing/Register'));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
