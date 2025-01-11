import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import AdminDashboard from './screens/AdminDashboard';
const App = () => {
  return (
    <>
    <Navbar />
    <Router>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Router>
    <Footer />
    </>
  );
};

export default App;
