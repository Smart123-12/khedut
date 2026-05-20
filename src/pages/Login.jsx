import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Login() {
  const { login, t } = useApp();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1=phone, 2=otp
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');

  const sendOtp = async () => {
    if (!phone || phone.length < 10) { setError('Valid mobile number enter karo'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setStep(2);
    setLoading(false);
    setError('');
  };

  const verifyOtp = async () => {
    if (otp.length < 4) { setError('OTP enter karo'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    login({ name: name || 'ગ્રાહક', phone, role, id: Date.now() });
    navigate(role === 'farmer' ? '/farmer-dashboard' : role === 'admin' ? '/admin' : '/');
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #e8f5ed 0%, #fff8e8 100%)', padding: 20,
    }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 56, marginBottom: 8 }}>🌾</div>
          <h1 style={{ fontWeight: 900, color: '#1a5c2a', fontSize: 28, fontFamily: 'Poppins' }}>Khedut Mart</h1>
          <p style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati', fontSize: 15 }}>
            {t('ગામડાનું તાજું સીધું ઘર', 'Fresh from Village to Home')}
          </p>
        </div>

        <div style={{
          background: '#fff', borderRadius: 24, padding: 36,
          boxShadow: '0 20px 60px rgba(45,138,78,0.15)',
          border: '1px solid #e8f5ed',
        }}>
          <h2 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 8, fontSize: 22 }}>
            {step === 1 ? (isRegister ? '👋 Register' : t('Login karo', 'Login')) : '🔐 OTP Verify'}
          </h2>
          <p style={{ color: '#7a9c82', fontSize: 14, marginBottom: 28, fontFamily: 'Noto Sans Gujarati' }}>
            {step === 1
              ? t('Tamaro mobile number enter karo', 'Enter your mobile number')
              : `OTP send thayo: +91 ${phone}`}
          </p>

          {error && (
            <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 10, padding: '10px 14px', marginBottom: 16, color: '#e53e3e', fontSize: 14 }}>
              ⚠ {error}
            </div>
          )}

          {step === 1 && (
            <>
              {isRegister && (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 6 }}>
                    {t('Name', 'Full Name')} *
                  </label>
                  <input className="input-field" value={name} onChange={e => setName(e.target.value)}
                    placeholder={t('Tamaru naam', 'Your name')} />
                </div>
              )}

              {/* Role selector */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 8 }}>
                  {t('Tame kon cho?', 'I am a...')}
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[['customer', '🛒', t('Customer', 'Customer')], ['farmer', '👨‍🌾', t('Khedut', 'Farmer')], ['admin', '⚙️', 'Admin']].map(([r, icon, label]) => (
                    <button key={r} onClick={() => setRole(r)} style={{
                      flex: 1, padding: '10px 6px', borderRadius: 10, cursor: 'pointer',
                      border: `2px solid ${role === r ? '#2d8a4e' : '#e8f5ed'}`,
                      background: role === r ? '#f0faf4' : '#fff',
                      color: role === r ? '#1a5c2a' : '#7a9c82',
                      fontWeight: 700, fontSize: 12, fontFamily: 'Noto Sans Gujarati',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    }}>
                      <span style={{ fontSize: 22 }}>{icon}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 6 }}>
                  📱 {t('Mobile Number', 'Mobile Number')} *
                </label>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #d0e8d8', borderRadius: 10, overflow: 'hidden' }}>
                  <span style={{ padding: '12px 14px', background: '#f0faf4', color: '#7a9c82', fontWeight: 600, borderRight: '1px solid #d0e8d8' }}>+91</span>
                  <input value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210" style={{ flex: 1, padding: '12px 14px', border: 'none', outline: 'none', fontSize: 16, fontFamily: 'Inter' }} />
                </div>
              </div>

              <button onClick={sendOtp} disabled={loading} style={{
                width: '100%', padding: '15px', borderRadius: 12, border: 'none',
                background: loading ? '#a8d5b5' : 'linear-gradient(135deg, #2d8a4e, #1a5c2a)',
                color: '#fff', fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 6px 20px rgba(45,138,78,0.3)', fontFamily: 'Noto Sans Gujarati',
              }}>
                {loading ? '⏳ OTP send thai rayo...' : `📱 OTP ${t('moklo', 'Send OTP')}`}
              </button>

              <div style={{ textAlign: 'center', marginTop: 16, fontSize: 14 }}>
                <span style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>
                  {isRegister ? t('Account che?', 'Have account?') : t('Navu account?', 'New user?')} {' '}
                </span>
                <button onClick={() => setIsRegister(!isRegister)} style={{ background: 'none', border: 'none', color: '#2d8a4e', fontWeight: 700, cursor: 'pointer', fontFamily: 'Noto Sans Gujarati' }}>
                  {isRegister ? t('Login karo', 'Login') : t('Register karo', 'Register')}
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 600, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', marginBottom: 6 }}>
                  🔐 OTP Enter karo
                </label>
                <input
                  className="input-field"
                  value={otp}
                  onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="6-digit OTP"
                  style={{ fontSize: 24, letterSpacing: 8, textAlign: 'center', fontWeight: 700 }}
                  maxLength={6}
                />
                <div style={{ background: '#f0faf4', borderRadius: 8, padding: '8px 12px', marginTop: 8, fontSize: 13, color: '#2d8a4e', fontFamily: 'Noto Sans Gujarati' }}>
                  💡 Demo mate koi paN OTP type karo (e.g. 1234)
                </div>
              </div>

              <button onClick={verifyOtp} disabled={loading} style={{
                width: '100%', padding: '15px', borderRadius: 12, border: 'none',
                background: loading ? '#a8d5b5' : 'linear-gradient(135deg, #f5a623, #e8921a)',
                color: '#fff', fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 6px 20px rgba(245,166,35,0.35)', fontFamily: 'Noto Sans Gujarati',
                marginBottom: 12,
              }}>
                {loading ? '⏳ Verify thai rayo...' : '✓ Verify & Login'}
              </button>

              <button onClick={() => setStep(1)} style={{
                width: '100%', padding: '12px', borderRadius: 12, border: '2px solid #d0e8d8',
                background: '#fff', color: '#2d8a4e', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'Noto Sans Gujarati',
              }}>
                ← {t('Pacho jao', 'Go Back')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
