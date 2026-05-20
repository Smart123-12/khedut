import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal, t, user } = useApp();
  const navigate = useNavigate();
  const delivery = cartTotal >= 500 ? 0 : 49;
  const total = cartTotal + delivery;

  if (cart.length === 0) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      <div style={{ fontSize: 80, marginBottom: 20 }}>🛒</div>
      <h2 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', fontSize: 24, marginBottom: 12 }}>
        {t('cart khaali che', 'Your cart is empty')}
      </h2>
      <p style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati', marginBottom: 24 }}>
        {t('uthapann oomero ane shopping karo!', 'Add products and start shopping!')}
      </p>
      <Link to="/products" className="btn-primary" style={{ textDecoration: 'none', padding: '14px 32px', fontSize: 16 }}>
        {t('uthapann juo', 'Browse Products')} →
      </Link>
    </div>
  );

  return (
    <div className="page-enter">
      <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8a4e)', padding: '32px 0 24px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 28, fontFamily: 'Noto Sans Gujarati' }}>
            🛒 {t('cart', 'My Cart')} ({cart.length} {t('uthapann', 'items')})
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, alignItems: 'start' }}>
          {/* Cart items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {cart.map(item => (
              <div key={item.id} style={{
                background: '#fff', borderRadius: 16, padding: 20,
                border: '1px solid #e8f5ed', boxShadow: '0 2px 12px rgba(45,138,78,0.08)',
                display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap',
              }}>
                {/* Emoji */}
                <div style={{
                  width: 80, height: 80, borderRadius: 12,
                  background: 'linear-gradient(135deg, #e8f5ed, #fff8e8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, flexShrink: 0,
                }}>{item.image}</div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 160 }}>
                  <h3 style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', color: '#1a2e1f', fontSize: 16, marginBottom: 4 }}>
                    {item.name}
                  </h3>
                  <p style={{ color: '#7a9c82', fontSize: 13, fontFamily: 'Noto Sans Gujarati' }}>
                    👨‍🌾 {item.farmer} — {item.farmerVillage}
                  </p>
                  <p style={{ color: '#2d8a4e', fontWeight: 700, fontSize: 16, marginTop: 6 }}>₹{item.price}/{item.unit}</p>
                </div>

                {/* Qty */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '2px solid #d0e8d8', borderRadius: 10, overflow: 'hidden' }}>
                  <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ width: 36, height: 36, background: '#f0faf4', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Minus size={14} color="#2d8a4e" />
                  </button>
                  <span style={{ width: 40, textAlign: 'center', fontWeight: 700 }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: 36, height: 36, background: '#f0faf4', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={14} color="#2d8a4e" />
                  </button>
                </div>

                {/* Subtotal */}
                <div style={{ fontWeight: 800, fontSize: 18, color: '#1a5c2a', minWidth: 80, textAlign: 'right' }}>
                  ₹{item.price * item.qty}
                </div>

                {/* Remove */}
                <button onClick={() => removeFromCart(item.id)} style={{
                  background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 8,
                  cursor: 'pointer', padding: 8, color: '#e53e3e',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            {/* Free delivery banner */}
            {cartTotal < 500 && (
              <div style={{ background: '#fff8e8', border: '2px solid #ffc84a', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 24 }}>🚚</span>
                <p style={{ fontFamily: 'Noto Sans Gujarati', color: '#8b5e3c', fontWeight: 600 }}>
                  {t('₹500 par free delivery!', 'Add')} ₹{500 - cartTotal} {t('vdhare uthapann oomero free delivery mate!', 'more for FREE delivery!')}
                </p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: 28,
            border: '1px solid #e8f5ed', boxShadow: '0 4px 20px rgba(45,138,78,0.1)',
            position: 'sticky', top: 80,
          }}>
            <h2 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 20, fontSize: 20 }}>
              {t('Order Summary', 'Order Summary')}
            </h2>

            {[
              [t('Subtotal', 'Subtotal'), `₹${cartTotal}`],
              [t('Delivery', 'Delivery'), delivery === 0 ? '🆓 Free' : `₹${delivery}`],
              [t('Discount', 'Discount'), '-₹0'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #e8f5ed' }}>
                <span style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>{label}</span>
                <span style={{ fontWeight: 600, color: '#1a2e1f' }}>{val}</span>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <span style={{ fontWeight: 800, fontSize: 18, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a' }}>{t('Total', 'Total')}</span>
              <span style={{ fontWeight: 900, fontSize: 22, color: '#1a5c2a' }}>₹{total}</span>
            </div>

            {/* Coupon */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <input className="input-field" placeholder={t('Coupon Code', 'Coupon code')} style={{ flex: 1, padding: '10px 14px' }} />
              <button className="btn-outline" style={{ padding: '10px 16px', fontSize: 14, whiteSpace: 'nowrap' }}>
                {t('Apply', 'Apply')}
              </button>
            </div>

            <button onClick={() => navigate(user ? '/checkout' : '/login')} style={{
              width: '100%', padding: '16px', borderRadius: 14, border: 'none',
              background: 'linear-gradient(135deg, #f5a623, #e8921a)',
              color: '#fff', fontSize: 17, fontWeight: 800, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              boxShadow: '0 6px 20px rgba(245,166,35,0.4)', fontFamily: 'Noto Sans Gujarati',
            }}>
              {t('Checkout karo', 'Proceed to Checkout')} <ArrowRight size={20} />
            </button>

            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: '#7a9c82' }}>🔒 Secure</span>
              <span style={{ fontSize: 12, color: '#7a9c82' }}>💳 Razorpay</span>
              <span style={{ fontSize: 12, color: '#7a9c82' }}>🚚 COD Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
