import { farmers } from '../data/data';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Farmers() {
  const { t } = useApp();
  return (
    <div className="page-enter">
      <div style={{ background: '#1E3A27', padding: '48px 0 36px' }}>
        <div className="container text-center">
          <div style={{ fontSize: 48, marginBottom: 10 }}>👨‍🌾</div>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 32, fontFamily: 'Noto Sans Gujarati', marginBottom: 8 }}>
            {t('Amara Khedut', 'Our Farmers')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Noto Sans Gujarati', fontSize: 16 }}>
            Gujarat-Saurashtra na shreshth kheduto
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        <div className="grid-3">
          {farmers.map(f => (
            <div key={f.id} className="card" style={{ padding: 32 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#eef6ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>{f.emoji}</div>
                <div>
                  <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', fontSize: 18 }}>{f.name}</h3>
                  <p style={{ color: '#7a8c7e', fontSize: 13, fontFamily: 'Noto Sans Gujarati' }}>📍 {f.village}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                {'★'.repeat(5).split('').map((_, i) => <span key={i} style={{ color: i < Math.round(f.rating) ? '#E5A93B' : '#ddd', fontSize: 16 }}>★</span>)}
                <span style={{ fontSize: 13, color: '#7a8c7e', marginLeft: 6 }}>({f.rating})</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                <span className="badge badge-green">🌾 {f.experience} experience</span>
                <span className="badge badge-mango">🛒 {f.sales} sales</span>
                {f.verified && <span className="badge badge-green">✓ Verified</span>}
              </div>
              <p style={{ color: '#3d5a46', fontSize: 14, lineHeight: 1.7, fontFamily: 'Noto Sans Gujarati', marginBottom: 16 }}>{f.story}</p>
              <p style={{ color: '#2d6e35', fontSize: 13, fontWeight: 600, fontFamily: 'Noto Sans Gujarati', marginBottom: 16 }}>🌟 {f.specialty}</p>
              <Link to="/products" className="btn-outline" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center', padding: '10px' }}>
                Products Juo →
              </Link>
            </div>
          ))}
        </div>

        {/* Village stories */}
        <div style={{ marginTop: 60, background: '#1E3A27', borderRadius: 24, padding: 40, textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 28, fontFamily: 'Noto Sans Gujarati', marginBottom: 12 }}>🏡 Village Stories</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Noto Sans Gujarati', fontSize: 16, maxWidth: 500, margin: '0 auto 24px' }}>
            Gamdana khedutoni mehnat ane tamari rasoi vacche seedhi connection.
          </p>
          <button className="btn-mango" style={{ padding: '14px 32px', fontSize: 15 }}>Read Stories →</button>
        </div>
      </div>
    </div>
  );
}
