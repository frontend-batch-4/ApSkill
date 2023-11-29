import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import KelasSelesai from "./pages/KelasSelesai";
import KelasBerlangsung from "./pages/KelasBerlangsung";
import Profile from "./pages/Profile";

// pages
// contoh cara import komponen 👇👇👇
// import NamaKomponen from './pages/NamaKomponen';

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/kelasselesai" element={<KelasSelesai/>} />
      <Route path="/kelasberlangsung" element={<KelasBerlangsung/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}
