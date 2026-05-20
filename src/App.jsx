import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Login from './pages/Login';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Wishlist from './pages/Wishlist';
import Farmers from './pages/Farmers';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <AppProvider>
      <Router basename="/khedut">
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-tracking/:id" element={<OrderTracking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/farmers" element={<Farmers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center' }}>
      <div style={{ fontSize: 72, marginBottom: 20 }}>🌾</div>
      <h2 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', fontSize: 24, marginBottom: 10 }}>Page Not Found</h2>
      <p style={{ color: '#7a8c7e', marginBottom: 24 }}>This page doesn't exist!</p>
      <a href="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', gap: 6 }}>← Go Home</a>
    </div>
  );
}
