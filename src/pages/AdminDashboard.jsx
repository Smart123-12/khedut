import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { products, farmers } from '../data/data';
import { Users, Package, ShoppingBag, TrendingUp, Tag, Bell, Settings, Edit3, Trash2, Check } from 'lucide-react';

const allOrders = [
  { id: 'KM001', customer: 'Priya Shah', product: 'Kesar Mango 3kg', farmer: 'Rambhai Patel', amount: 897, status: 'pending', date: '19/05/2025' },
  { id: 'KM002', customer: 'Raj Mehta', product: 'Groundnut 2kg', farmer: 'Bhavan Bhai', amount: 258, status: 'confirmed', date: '19/05/2025' },
  { id: 'KM003', customer: 'Gauri Patel', product: 'Desi Chana 5kg', farmer: 'Harshad Bhai', amount: 445, status: 'delivered', date: '18/05/2025' },
  { id: 'KM004', customer: 'Amit Kumar', product: 'Coconut x6', farmer: 'Jagdish Bhai', amount: 210, status: 'confirmed', date: '18/05/2025' },
];

const coupons = [
  { code: 'KHEDUT10', discount: '10%', uses: 148, active: true },
  { code: 'MANGO50', discount: '₹50 OFF', uses: 89, active: true },
  { code: 'NEWUSER', discount: '15%', uses: 234, active: false },
];

export default function AdminDashboard() {
  const { user, t } = useApp();
  const [tab, setTab] = useState('overview');
  const [orders, setOrders] = useState(allOrders);

  const stats = [
    { label: 'Total Revenue', value: '₹4,82,340', icon: <TrendingUp size={22} />, color: '#2d6e35', bg: '#eef6ef', change: '+22%' },
    { label: 'Total Orders', value: '1,284', icon: <ShoppingBag size={22} />, color: '#E5A93B', bg: '#fef8ec', change: '+8%' },
    { label: 'Farmers', value: '512', icon: <Users size={22} />, color: '#3b82f6', bg: '#eff6ff', change: '+14' },
    { label: 'Products', value: '234', icon: <Package size={22} />, color: '#8b5cf6', bg: '#f5f3ff', change: '+6' },
  ];

  const tabs = [['overview','📊 Overview'],['orders','📦 Orders'],['farmers','👨‍🌾 Farmers'],['products','🌾 Products'],['coupons','🏷️ Coupons'],['analytics','📈 Analytics']];

  if (!user || user.role !== 'admin') return (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <div style={{ fontSize: 64 }}>🔒</div>
      <h2 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', marginBottom: 16 }}>Admin Access Required</h2>
      <a href="/login" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Login as Admin</a>
    </div>
  );

  return (
    <div className="page-enter" style={{ background: '#F4F3EF', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#1E3A27', padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 24, fontFamily: 'Noto Sans Gujarati', marginBottom: 4 }}>⚙️ Admin Dashboard</h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Khedut Mart Management Panel</p>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#E5A93B', color: '#1E3A27', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>A</div>
              <span style={{ color: '#fff', fontSize: 14 }}>{user.name}</span>
            </div>
          </div>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, marginTop: 20, flexWrap: 'wrap' }}>
            {tabs.map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} style={{ padding: '8px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', background: tab === k ? '#fff' : 'rgba(255,255,255,0.12)', color: tab === k ? '#1E3A27' : '#fff', fontWeight: 700, fontSize: 13, transition: 'all 0.2s' }}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '28px 24px' }}>

        {/* OVERVIEW */}
        {tab === 'overview' && (
          <>
            <div className="grid-4" style={{ marginBottom: 28 }}>
              {stats.map(({ label, value, icon, color, bg, change }) => (
                <div key={label} style={{ background: '#fff', borderRadius: 18, padding: 24, border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 14, background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
                    <span style={{ fontSize: 12, background: '#eef6ef', color: '#2d6e35', padding: '4px 10px', borderRadius: 20, fontWeight: 700 }}>{change}</span>
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: '#1E3A27', marginBottom: 4 }}>{value}</div>
                  <div style={{ fontSize: 13, color: '#7a8c7e' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Recent Orders Table */}
            <div style={{ background: '#fff', borderRadius: 18, padding: 28, border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h3 style={{ fontWeight: 800, color: '#1E3A27', fontSize: 18 }}>📦 Recent Orders</h3>
                <button onClick={() => setTab('orders')} className="btn-outline" style={{ padding: '8px 16px', fontSize: 13 }}>View All</button>
              </div>
              <OrderTable orders={orders.slice(0, 4)} onUpdate={(id, s) => setOrders(prev => prev.map(o => o.id === id ? { ...o, status: s } : o))} />
            </div>
          </>
        )}

        {/* ORDERS */}
        {tab === 'orders' && (
          <div style={{ background: '#fff', borderRadius: 18, padding: 28, border: '1.5px solid var(--border)' }}>
            <h3 style={{ fontWeight: 800, color: '#1E3A27', fontSize: 18, marginBottom: 20 }}>All Orders</h3>
            <OrderTable orders={orders} onUpdate={(id, s) => setOrders(prev => prev.map(o => o.id === id ? { ...o, status: s } : o))} />
          </div>
        )}

        {/* FARMERS */}
        {tab === 'farmers' && (
          <div className="grid-3">
            {farmers.map(f => (
              <div key={f.id} style={{ background: '#fff', borderRadius: 18, padding: 24, border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ fontSize: 36 }}>{f.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27' }}>{f.name}</div>
                    <div style={{ fontSize: 12, color: '#7a8c7e' }}>📍 {f.village}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#7a8c7e', marginBottom: 14 }}>
                  <span>⭐ {f.rating}</span><span>🛒 {f.sales} sales</span><span>📦 {f.products} products</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span className="badge badge-green" style={{ flex: 1, justifyContent: 'center' }}>{f.verified ? '✓ Verified' : 'Pending'}</span>
                  <button style={{ width: 34, height: 30, background: '#fff0f0', border: '1px solid #fca5a5', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e53e3e' }}><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PRODUCTS */}
        {tab === 'products' && (
          <div>
            <div style={{ background: '#fff', borderRadius: 18, padding: 28, border: '1.5px solid var(--border)', marginBottom: 20 }}>
              <h3 style={{ fontWeight: 800, color: '#1E3A27', fontSize: 18, marginBottom: 20 }}>All Products ({products.length})</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#F4F3EF' }}>
                      {['Product', 'Category', 'Price', 'Stock', 'Farmer', 'Status', ''].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#3d5a46', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id} style={{ borderTop: '1px solid #e8e7e1' }}>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{ fontSize: 24 }}>{p.image}</span>
                            <span style={{ fontWeight: 600, fontFamily: 'Noto Sans Gujarati', fontSize: 14, color: '#1E3A27' }}>{p.name}</span>
                          </div>
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: '#7a8c7e' }}>{p.categoryId}</td>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: '#2d6e35' }}>₹{p.price}/{p.unit}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13 }}>{p.stock}{p.unit}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, fontFamily: 'Noto Sans Gujarati' }}>{p.farmer}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span className={p.organic ? 'badge badge-green' : 'badge badge-mango'} style={{ fontSize: 11 }}>
                            {p.organic ? '🌿 Organic' : 'Regular'}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#7a8c7e' }}><Edit3 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* COUPONS */}
        {tab === 'coupons' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontWeight: 800, color: '#1E3A27', fontSize: 20 }}>🏷️ Coupon Management</h3>
              <button className="btn-primary" style={{ padding: '10px 20px', fontSize: 13 }}><Tag size={15} /> Add Coupon</button>
            </div>
            <div className="grid-3">
              {coupons.map(c => (
                <div key={c.code} style={{ background: '#fff', borderRadius: 16, padding: 24, border: `2px dashed ${c.active ? '#2d6e35' : '#ddd'}`, boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontWeight: 900, fontSize: 20, fontFamily: 'Inter, monospace', color: '#1E3A27', letterSpacing: 2 }}>{c.code}</span>
                    <span className={c.active ? 'badge badge-green' : 'badge'} style={{ background: c.active ? '#eef6ef' : '#f4f3ef', color: c.active ? '#2d6e35' : '#aaa' }}>
                      {c.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#E5A93B', marginBottom: 8 }}>{c.discount}</div>
                  <div style={{ fontSize: 13, color: '#7a8c7e' }}>{c.uses} times used</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANALYTICS */}
        {tab === 'analytics' && (
          <div style={{ background: '#fff', borderRadius: 18, padding: 40, border: '1.5px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>📊</div>
            <h3 style={{ fontWeight: 800, color: '#1E3A27', fontSize: 22, marginBottom: 8 }}>Analytics Dashboard</h3>
            <p style={{ color: '#7a8c7e', marginBottom: 28 }}>Revenue, orders, and growth insights</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, maxWidth: 700, margin: '0 auto' }}>
              {[['₹4.8L', 'Total Revenue'], ['1,284', 'Total Orders'], ['512', 'Farmers'], ['4.8', 'Avg Rating'], ['₹375', 'Avg Order'], ['92%', 'Satisfaction']].map(([v, l]) => (
                <div key={l} style={{ background: '#F4F3EF', borderRadius: 14, padding: '20px 16px' }}>
                  <div style={{ fontWeight: 900, fontSize: 22, color: '#1E3A27', marginBottom: 4 }}>{v}</div>
                  <div style={{ fontSize: 12, color: '#7a8c7e' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OrderTable({ orders, onUpdate }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#F4F3EF' }}>
            {['Order ID', 'Customer', 'Product', 'Farmer', 'Amount', 'Date', 'Status', 'Action'].map(h => (
              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#3d5a46', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id} style={{ borderTop: '1px solid #e8e7e1' }}>
              <td style={{ padding: '12px 14px', fontWeight: 700, color: '#1E3A27', fontSize: 13 }}>{o.id}</td>
              <td style={{ padding: '12px 14px', fontSize: 13 }}>{o.customer}</td>
              <td style={{ padding: '12px 14px', fontSize: 13, color: '#3d5a46' }}>{o.product}</td>
              <td style={{ padding: '12px 14px', fontSize: 13, fontFamily: 'Noto Sans Gujarati', color: '#7a8c7e' }}>{o.farmer}</td>
              <td style={{ padding: '12px 14px', fontWeight: 700, color: '#2d6e35', fontSize: 13 }}>₹{o.amount}</td>
              <td style={{ padding: '12px 14px', fontSize: 12, color: '#7a8c7e' }}>{o.date}</td>
              <td style={{ padding: '12px 14px' }}>
                <span style={{ padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: o.status === 'delivered' ? '#eef6ef' : o.status === 'confirmed' ? '#fef8ec' : '#fff', color: o.status === 'delivered' ? '#2d6e35' : o.status === 'confirmed' ? '#E5A93B' : '#e53e3e', border: '1px solid currentColor' }}>
                  {o.status === 'delivered' ? '✓ Delivered' : o.status === 'confirmed' ? '⏳ Confirmed' : '🔔 Pending'}
                </span>
              </td>
              <td style={{ padding: '12px 14px' }}>
                {o.status === 'pending' && (
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button onClick={() => onUpdate(o.id, 'confirmed')} style={{ background: '#eef6ef', border: 'none', borderRadius: 6, padding: '5px 10px', color: '#2d6e35', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}><Check size={12} /></button>
                    <button onClick={() => onUpdate(o.id, 'cancelled')} style={{ background: '#fff0f0', border: 'none', borderRadius: 6, padding: '5px 10px', color: '#e53e3e', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>✕</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
