import { useState } from 'react';
import { products, farmers } from '../data/data';
import { useApp } from '../context/AppContext';
import { Plus, Package, TrendingUp, Users, IndianRupee, Check, X, Edit3 } from 'lucide-react';

const mockOrders = [
  { id: 'KM001', customer: 'પ્રિyA ShAh', product: 'Kesar Mango 3kg', amount: 897, status: 'pending' },
  { id: 'KM002', customer: 'Raj Mehta', product: 'Groundnut 2kg', amount: 258, status: 'confirmed' },
  { id: 'KM003', customer: 'ગૌRi PAtEl', product: 'Desi Chana 5kg', amount: 445, status: 'delivered' },
];

export default function FarmerDashboard() {
  const { user, t } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [orders, setOrders] = useState(mockOrders);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', unit: 'kg' });

  const stats = [
    { label: t('કUL VIKRI', 'Total Sales'), value: '₹12,840', icon: <IndianRupee size={22} />, bg: '#2d8a4e', change: '+18%' },
    { label: t('Orders', 'Orders'), value: '47', icon: <Package size={22} />, bg: '#f5a623', change: '+5' },
    { label: t('Products', 'Products'), value: '8', icon: <TrendingUp size={22} />, bg: '#3b82f6', change: 'Active' },
    { label: t('Customers', 'Customers'), value: '124', icon: <Users size={22} />, bg: '#8b5cf6', change: '+12 new' },
  ];

  const updateOrderStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const tabs = [
    ['overview', '📊 Overview'], ['products', '🌾 Products'], ['orders', '📦 Orders'], ['analytics', '📈 Analytics']
  ];

  if (!user || user.role !== 'farmer') return (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <div style={{ fontSize: 64 }}>🔒</div>
      <h2 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 16 }}>
        {t('Farmer Login Required', 'Farmer Login Required')}
      </h2>
      <a href="/login" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
        {t('Login Karo', 'Login as Farmer')}
      </a>
    </div>
  );

  return (
    <div className="page-enter" style={{ background: '#f0faf4', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8a4e)', padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 26, fontFamily: 'Noto Sans Gujarati', marginBottom: 4 }}>
                👨‍🌾 {t('Khedut Dashboard', 'Farmer Dashboard')}
              </h1>
              <p style={{ color: '#a8d5b5', fontFamily: 'Noto Sans Gujarati' }}>
                {t('Swagat, ', 'Welcome, ')} {user.name}! 🌾
              </p>
            </div>
            <button onClick={() => setShowAddProduct(true)} className="btn-mango">
              <Plus size={18} /> {t('Product Oomero', 'Add Product')}
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, marginTop: 20, flexWrap: 'wrap' }}>
            {tabs.map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)} style={{
                padding: '8px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                background: activeTab === key ? '#fff' : 'rgba(255,255,255,0.15)',
                color: activeTab === key ? '#1a5c2a' : '#fff',
                fontWeight: 700, fontSize: 14, transition: 'all 0.2s',
              }}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '28px 20px' }}>
        {/* Overview */}
        {activeTab === 'overview' && (
          <>
            {/* Stats */}
            <div className="grid-4" style={{ marginBottom: 28 }}>
              {stats.map(({ label, value, icon, bg, change }) => (
                <div key={label} style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e8f5ed', boxShadow: '0 2px 12px rgba(45,138,78,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icon}
                    </div>
                    <span style={{ fontSize: 12, color: '#2d8a4e', fontWeight: 700, background: '#e8f5ed', padding: '3px 8px', borderRadius: 6 }}>{change}</span>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#1a2e1f', marginBottom: 4 }}>{value}</div>
                  <div style={{ fontSize: 13, color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Recent orders */}
            <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e8f5ed' }}>
              <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 16 }}>
                📦 Recent Orders
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f0faf4' }}>
                      {['Order ID', 'Customer', 'Product', 'Amount', 'Status', 'Action'].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#3d5a46', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(o => (
                      <tr key={o.id} style={{ borderTop: '1px solid #e8f5ed' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: '#1a5c2a' }}>{o.id}</td>
                        <td style={{ padding: '12px 16px', fontFamily: 'Noto Sans Gujarati', fontSize: 14 }}>{o.customer}</td>
                        <td style={{ padding: '12px 16px', fontSize: 14 }}>{o.product}</td>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: '#1a5c2a' }}>₹{o.amount}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{
                            padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                            background: o.status === 'delivered' ? '#e8f5ed' : o.status === 'confirmed' ? '#fff8e8' : '#fff5f5',
                            color: o.status === 'delivered' ? '#2d8a4e' : o.status === 'confirmed' ? '#e8921a' : '#e53e3e',
                          }}>
                            {o.status === 'delivered' ? '✓ Delivered' : o.status === 'confirmed' ? '⏳ Confirmed' : '🔔 Pending'}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          {o.status === 'pending' && (
                            <div style={{ display: 'flex', gap: 6 }}>
                              <button onClick={() => updateOrderStatus(o.id, 'confirmed')} style={{
                                background: '#e8f5ed', border: 'none', borderRadius: 6, padding: '6px 12px',
                                color: '#2d8a4e', cursor: 'pointer', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', gap: 4,
                              }}><Check size={13} /> Accept</button>
                              <button onClick={() => updateOrderStatus(o.id, 'rejected')} style={{
                                background: '#fff5f5', border: 'none', borderRadius: 6, padding: '6px 12px',
                                color: '#e53e3e', cursor: 'pointer', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', gap: 4,
                              }}><X size={13} /> Reject</button>
                            </div>
                          )}
                          {o.status !== 'pending' && <span style={{ color: '#bbb', fontSize: 12 }}>—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Products tab */}
        {activeTab === 'products' && (
          <div>
            <div className="grid-4">
              {products.slice(0, 4).map(p => (
                <div key={p.id} style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #e8f5ed', boxShadow: '0 2px 12px rgba(45,138,78,0.06)' }}>
                  <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 12 }}>{p.image}</div>
                  <h4 style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', color: '#1a2e1f', marginBottom: 8 }}>{p.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ color: '#2d8a4e', fontWeight: 700 }}>₹{p.price}/{p.unit}</span>
                    <span style={{ fontSize: 12, color: '#7a9c82' }}>Stock: {p.stock}{p.unit}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="btn-outline" style={{ flex: 1, padding: '8px 0', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                      <Edit3 size={13} /> Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, border: '1px solid #e8f5ed', textAlign: 'center' }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>📊</div>
            <h3 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 8 }}>
              {t('Analytics Dashboard', 'Analytics Dashboard')}
            </h3>
            <p style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>
              {t('Tamara vikri no graph ahi avshe', 'Your sales analytics will appear here')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 24 }}>
              {[['This Week', '₹3,240', '🔥'], ['This Month', '₹12,840', '📈'], ['Best Product', 'Kesar Mango', '🥭']].map(([l, v, e]) => (
                <div key={l} style={{ background: '#f0faf4', borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{e}</div>
                  <div style={{ fontWeight: 800, fontSize: 20, color: '#1a5c2a', marginBottom: 4 }}>{v}</div>
                  <div style={{ fontSize: 13, color: '#7a9c82' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, width: '100%', maxWidth: 500, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', fontSize: 20 }}>
                🌾 {t('Navo Product Oomero', 'Add New Product')}
              </h3>
              <button onClick={() => setShowAddProduct(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#aaa' }}>✕</button>
            </div>
            {[
              { label: t('Product nu Naam', 'Product Name'), key: 'name', placeholder: 'e.g. Kesar Mango' },
              { label: t('Bhaav (₹)', 'Price (₹)'), key: 'price', placeholder: '299', type: 'number' },
              { label: t('Stock', 'Stock (kg/pc)'), key: 'stock', placeholder: '100', type: 'number' },
            ].map(({ label, key, placeholder, type }) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 6 }}>{label}</label>
                <input className="input-field" type={type || 'text'} placeholder={placeholder}
                  value={newProduct[key]} onChange={e => setNewProduct(p => ({ ...p, [key]: e.target.value }))} />
              </div>
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button className="btn-primary" style={{ flex: 1, padding: '14px' }}
                onClick={() => setShowAddProduct(false)}>
                ✓ {t('Save karo', 'Save Product')}
              </button>
              <button onClick={() => setShowAddProduct(false)} style={{ flex: 1, padding: '14px', borderRadius: 10, border: '2px solid #d0e8d8', background: '#fff', cursor: 'pointer', color: '#2d8a4e', fontWeight: 700 }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
