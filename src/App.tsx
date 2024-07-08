import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'primeicons/primeicons.css';

const Home = React.lazy(() => import('./pages/landing/Home'));
const Login = React.lazy(() => import('./pages/landing/Login'));
const Register = React.lazy(() => import('./pages/landing/Register'));
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const DashHome = React.lazy(() => import('./pages/dashboard/DashHome'));
const EventTypes = React.lazy(() => import('./pages/dashboard/EventTypes'));
const Events = React.lazy(() => import('./pages/dashboard/Events'));
const Availability = React.lazy(() => import('./pages/dashboard/Availability'));
const Analytics = React.lazy(() => import('./pages/dashboard/Analytics'));
const AdminCenter = React.lazy(() => import('./pages/dashboard/AdminCenter'));
const Profile = React.lazy(() => import('./pages/dashboard/Profile'));

export default function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashHome />} />
            <Route path="eventTypes" element={<EventTypes />} />
            <Route path="events" element={<Events />} />
            <Route path="availability" element={<Availability />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="adminCenter" element={<AdminCenter />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
