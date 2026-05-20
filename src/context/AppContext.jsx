import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('khedut_cart') || '[]'); } catch { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('khedut_wishlist') || '[]'); } catch { return []; }
  });
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('khedut_user') || 'null'); } catch { return null; }
  });
  const [lang, setLang] = useState('gu'); // 'gu' or 'en'
  const [orders, setOrders] = useState(() => {
    try { return JSON.parse(localStorage.getItem('khedut_orders') || '[]'); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('khedut_cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('khedut_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    if (user) localStorage.setItem('khedut_user', JSON.stringify(user));
    else localStorage.removeItem('khedut_user');
  }, [user]);
  useEffect(() => {
    localStorage.setItem('khedut_orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };
  const clearCart = () => setCart([]);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const toggleWishlist = (product) => {
    setWishlist(prev =>
      prev.find(i => i.id === product.id)
        ? prev.filter(i => i.id !== product.id)
        : [...prev, product]
    );
  };
  const isWishlisted = (id) => wishlist.some(i => i.id === id);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const placeOrder = (orderData) => {
    const order = {
      ...orderData,
      id: 'KM' + Date.now(),
      date: new Date().toLocaleDateString('gu-IN'),
      status: 'confirmed',
      steps: [
        { label: 'ઓર્ડર કન્ફર્મ', done: true, time: new Date().toLocaleTimeString('gu-IN') },
        { label: 'ખેડૂત તૈયારી', done: false, time: '' },
        { label: 'ડિલિવરી', done: false, time: '' },
        { label: 'ડિલિવર', done: false, time: '' },
      ],
    };
    setOrders(prev => [order, ...prev]);
    clearCart();
    return order;
  };

  const t = (gu, en) => lang === 'gu' ? gu : en;

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount,
      wishlist, toggleWishlist, isWishlisted,
      user, login, logout,
      lang, setLang, t,
      orders, placeOrder,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
