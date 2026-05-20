import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Checkout() {
  const { cart, cartTotal, placeOrder, user, t } = useApp();
  const navigate = useNavigate();
  const delivery = cartTotal >= 500 ? 0 : 49;
  const total = cartTotal + delivery;

  const [form, setForm] = useState({
    name: user?.name || '', phone: user?.phone || '',
    address: '', city: '', pincode: '', state: 'Gujarat',
    payMode: 'cod',
  });
  const [step, setStep] = useState(1);
  const [placing, setPlacing] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handlePlaceOrder = async () => {
    setPlacing(true);
    await new Promise(r => setTimeout(r, 1800));
    const order = placeOrder({ items: cart, total, address: form, payMode: form.payMode });
    navigate(`/order-tracking/${order.id}`);
  };

  return (
    <div className="page-enter">
      <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8a4e)', padding: '32px 0 24px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 28, fontFamily: 'Noto Sans Gujarati' }}>
            💳 {t('Checkout', 'Checkout')}
          </h1>
          {/* Steps */}
          <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
            {[['1', t('Address', 'Address')], ['2', t('Payment', 'Payment')], ['3', t('Confirm', 'Confirm')]].map(([n, l]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: Number(n) <= step ? '#f5a623' : 'rgba(255,255,255,0.2)',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                }}>{n}</div>
                <span style={{ color: Number(n) <= step ? '#fff' : '#a8d5b5', fontSize: 13, fontWeight: 600 }}>{l}</span>
                {n < '3' && <span style={{ color: 'rgba(255,255,255,0.4)' }}> › </span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>
          <div>
            {/* Step 1: Address */}
            <div style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #e8f5ed', marginBottom: 20 }}>
              <h2 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 20, fontSize: 18 }}>
                📍 {t('Delivery Address', 'Delivery Address')}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { name: 'name', label: t('Name', 'Full Name'), placeholder: t('Tamaru naam', 'Your name') },
                  { name: 'phone', label: t('Mobile', 'Mobile'), placeholder: '+91 98765 43210' },
                  { name: 'address', label: t('Address', 'Address'), placeholder: t('Ghar no address', 'Home address'), col: 2 },
                  { name: 'city', label: t('City/Village', 'City/Village'), placeholder: 'Rajkot / Talala' },
                  { name: 'pincode', label: 'PIN Code', placeholder: '360001' },
                ].map(({ name, label, placeholder, col }) => (
                  <div key={name} style={col === 2 ? { gridColumn: 'span 2' } : {}}>
                    <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 6, fontSize: 14 }}>
                      {label}
                    </label>
                    <input name={name} value={form[name]} onChange={handleChange}
                      placeholder={placeholder} className="input-field" />
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Payment */}
            <div style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #e8f5ed', marginBottom: 20 }}>
              <h2 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 20, fontSize: 18 }}>
                💳 {t('Payment Mode', 'Payment Mode')}
              </h2>
              {[
                { value: 'cod', icon: '💵', label: t('Cash on Delivery', 'Cash on Delivery'), sub: t('Delivery par rupiya aapo', 'Pay when delivered') },
                { value: 'upi', icon: '📱', label: 'UPI / GPay / PhonePe', sub: 'Instant payment' },
                { value: 'card', icon: '💳', label: t('Card', 'Credit/Debit Card'), sub: 'Secure via Razorpay' },
              ].map(({ value, icon, label, sub }) => (
                <label key={value} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px', borderRadius: 12,
                  border: `2px solid ${form.payMode === value ? '#2d8a4e' : '#e8f5ed'}`,
                  background: form.payMode === value ? '#f0faf4' : '#fff',
                  cursor: 'pointer', marginBottom: 12, transition: 'all 0.2s',
                }}>
                  <input type="radio" name="payMode" value={value}
                    checked={form.payMode === value} onChange={handleChange}
                    style={{ accentColor: '#2d8a4e', width: 18, height: 18 }} />
                  <span style={{ fontSize: 24 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', fontSize: 15 }}>{label}</div>
                    <div style={{ fontSize: 12, color: '#7a9c82' }}>{sub}</div>
                  </div>
                </label>
              ))}
            </div>

            {/* Place Order */}
            <button onClick={handlePlaceOrder} disabled={placing} style={{
              width: '100%', padding: '18px', borderRadius: 14, border: 'none',
              background: placing ? '#a8d5b5' : 'linear-gradient(135deg, #f5a623, #e8921a)',
              color: '#fff', fontSize: 18, fontWeight: 800, cursor: placing ? 'not-allowed' : 'pointer',
              boxShadow: '0 6px 20px rgba(245,166,35,0.4)', fontFamily: 'Noto Sans Gujarati',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}>
              {placing ? '⏳ Order Place thayi rahi che...' : `🛒 Order Place karo — ₹${total}`}
            </button>
          </div>

          {/* Order summary */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #e8f5ed', position: 'sticky', top: 80 }}>
            <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 16 }}>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 28 }}>{item.image}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a2e1f' }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: '#7a9c82' }}>x{item.qty} {item.unit}</div>
                </div>
                <div style={{ fontWeight: 700, color: '#1a5c2a' }}>₹{item.price * item.qty}</div>
              </div>
            ))}
            <div style={{ borderTop: '2px solid #e8f5ed', paddingTop: 16, marginTop: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>Subtotal</span>
                <span style={{ fontWeight: 600 }}>₹{cartTotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>Delivery</span>
                <span style={{ fontWeight: 600, color: delivery === 0 ? '#2d8a4e' : '#1a2e1f' }}>{delivery === 0 ? '🆓 Free' : `₹${delivery}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', fontSize: 17 }}>Total</span>
                <span style={{ fontWeight: 900, fontSize: 20, color: '#1a5c2a' }}>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
