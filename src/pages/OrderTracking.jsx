import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CheckCircle, Clock, Package, Truck } from 'lucide-react';

export default function OrderTracking() {
  const { id } = useParams();
  const { orders, t } = useApp();
  const order = orders.find(o => o.id === id) || {
    id, date: new Date().toLocaleDateString('gu-IN'),
    total: 0, status: 'confirmed',
    steps: [
      { label: 'ઓর्डর Confirm', done: true, time: '10:30 AM' },
      { label: 'ખéડੂt Preparation', done: true, time: '11:00 AM' },
      { label: 'Delivery Out', done: false, time: '' },
      { label: 'Delivered ✓', done: false, time: '' },
    ],
  };

  const statusColors = { confirmed: '#2d8a4e', preparing: '#f5a623', shipped: '#3b82f6', delivered: '#2d8a4e' };

  return (
    <div className="page-enter">
      <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8a4e)', padding: '40px 0 30px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 28, fontFamily: 'Noto Sans Gujarati', marginBottom: 8 }}>
            📦 {t('Order Tracking', 'Order Tracking')}
          </h1>
          <p style={{ color: '#a8d5b5', fontFamily: 'Noto Sans Gujarati' }}>Order ID: {order.id}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px', maxWidth: 700 }}>
        {/* Status card */}
        <div style={{
          background: 'linear-gradient(135deg, #1a5c2a, #2d8a4e)',
          borderRadius: 24, padding: 32, marginBottom: 28, textAlign: 'center',
          boxShadow: '0 12px 40px rgba(26,92,42,0.3)',
        }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>✅</div>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 24, fontFamily: 'Noto Sans Gujarati', marginBottom: 8 }}>
            {t('Order Confirm thayo!', 'Order Confirmed!')}
          </h2>
          <p style={{ color: '#a8d5b5', fontFamily: 'Noto Sans Gujarati' }}>
            {t('Tamaro order 24-48 kalakmaa pahonchashe', 'Your order will arrive in 24-48 hours')}
          </p>
        </div>

        {/* Tracking steps */}
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, marginBottom: 24, border: '1px solid #e8f5ed', boxShadow: '0 4px 20px rgba(45,138,78,0.08)' }}>
          <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 28, fontSize: 18 }}>
            📍 {t('Order Status', 'Order Status')}
          </h3>
          <div style={{ position: 'relative' }}>
            {order.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: i < order.steps.length - 1 ? 0 : 0, position: 'relative' }}>
                {/* Line */}
                {i < order.steps.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 19, top: 44, bottom: -24, width: 2,
                    background: step.done ? '#2d8a4e' : '#e8f5ed',
                    zIndex: 0,
                  }} />
                )}
                {/* Icon */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0, zIndex: 1,
                  background: step.done ? 'linear-gradient(135deg, #2d8a4e, #1a5c2a)' : '#f0faf4',
                  border: `3px solid ${step.done ? '#2d8a4e' : '#d0e8d8'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: step.done ? '0 4px 12px rgba(45,138,78,0.3)' : 'none',
                }}>
                  {step.done
                    ? <CheckCircle size={20} color="#fff" />
                    : <Clock size={18} color="#d0e8d8" />
                  }
                </div>
                {/* Content */}
                <div style={{ flex: 1, paddingBottom: 28 }}>
                  <div style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', color: step.done ? '#1a5c2a' : '#aaa', fontSize: 15, marginBottom: 4 }}>
                    {step.label}
                  </div>
                  {step.time && <div style={{ fontSize: 12, color: '#7a9c82' }}>{step.time}</div>}
                  {!step.done && <div style={{ fontSize: 12, color: '#bbb', fontFamily: 'Noto Sans Gujarati' }}>{t('Ramva aavshe...', 'Pending...')}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estimated delivery */}
        <div style={{
          background: 'linear-gradient(135deg, #fff8e8, #fff)',
          borderRadius: 20, padding: 24, marginBottom: 24,
          border: '2px solid #ffc84a',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: 40 }}>🚚</div>
            <div>
              <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#8b5e3c', fontSize: 17 }}>
                {t('Expected Delivery', 'Expected Delivery')}
              </h3>
              <p style={{ color: '#e8921a', fontWeight: 700, fontSize: 18, marginTop: 4 }}>
                {t('24-48 kalakmaa', 'Within 24-48 hours')}
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp support */}
        <a href="https://wa.me/919876543210" style={{
          display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center',
          background: '#25D366', borderRadius: 14, padding: '16px 24px', textDecoration: 'none',
          boxShadow: '0 6px 20px rgba(37,211,102,0.3)',
        }}>
          <span style={{ fontSize: 28 }}>💬</span>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, fontFamily: 'Noto Sans Gujarati' }}>
              {t('WhatsApp Support', 'WhatsApp Support')}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>+91 98765 43210</div>
          </div>
        </a>
      </div>
    </div>
  );
}
