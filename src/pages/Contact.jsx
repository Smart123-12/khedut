import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); setSent(true); };

  return (
    <div className="page-enter">
      <div style={{ background: '#1E3A27', padding: '48px 0 36px' }}>
        <div className="container text-center">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 32, fontFamily: 'Noto Sans Gujarati', marginBottom: 8 }}>
            {t('Sampark Karo', 'Contact Us')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Noto Sans Gujarati' }}>Amari team 24/7 madad mate taiyar che</p>
        </div>
      </div>

      <div className="container" style={{ padding: '52px 24px' }}>
        <div className="grid-2" style={{ gap: 40, alignItems: 'start' }}>
          {/* Info */}
          <div>
            <h2 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', fontSize: 24, marginBottom: 24 }}>Amara Sambandhe</h2>
            {[
              { icon: <Phone size={20} />, label: t('Phone', 'Phone'), value: '+91 98765 43210' },
              { icon: <Mail size={20} />, label: 'Email', value: 'help@khedutmart.in' },
              { icon: <MapPin size={20} />, label: t('Address', 'Office'), value: 'Rajkot, Saurashtra, Gujarat 360001' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#eef6ef', color: '#1E3A27', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: '#7a8c7e', fontFamily: 'Noto Sans Gujarati', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontWeight: 600, color: '#1E3A27', fontSize: 15 }}>{value}</div>
                </div>
              </div>
            ))}

            <a href="https://wa.me/919876543210" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '14px 24px', borderRadius: 50, textDecoration: 'none', fontWeight: 700, fontSize: 15, marginTop: 8, boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}>
              <MessageCircle size={20} /> WhatsApp Support
            </a>

            <div style={{ marginTop: 36, background: '#eef6ef', borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', marginBottom: 10, fontSize: 17 }}>⏰ Support Hours</h3>
              <p style={{ color: '#3d5a46', fontFamily: 'Noto Sans Gujarati', lineHeight: 1.8 }}>
                Monday – Saturday: 8 AM – 8 PM<br />
                Sunday: 9 AM – 5 PM<br />
                WhatsApp: 24/7
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 36, border: '1.5px solid var(--border)', boxShadow: 'var(--shadow)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', fontSize: 22, marginBottom: 8 }}>Message Moko Thayo!</h3>
                <p style={{ color: '#7a8c7e', fontFamily: 'Noto Sans Gujarati' }}>Amari team 24 kalakmaa jawab aapshe.</p>
                <button onClick={() => setSent(false)} className="btn-primary" style={{ marginTop: 20 }}>Navi Message</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', marginBottom: 24, fontSize: 20 }}>Message Moko</h3>
                <form onSubmit={submit}>
                  {[
                    { name: 'name', label: 'Name', placeholder: 'Tamaru naam' },
                    { name: 'email', label: 'Email', placeholder: 'email@example.com', type: 'email' },
                    { name: 'phone', label: 'Mobile', placeholder: '+91 98765 43210' },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name} style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', marginBottom: 6, fontSize: 14 }}>{label}</label>
                      <input className="input-field" name={name} type={type || 'text'} placeholder={placeholder} value={form[name]} onChange={handle} required />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', marginBottom: 6, fontSize: 14 }}>Message</label>
                    <textarea className="input-field" name="message" rows={4} placeholder="Tamaro sawaal ya samsa..." value={form.message} onChange={handle} required style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: 15 }}>
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
