import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useApp();
  return (
    <div className="page-enter">
      {/* Hero */}
      <div style={{ background: '#1E3A27', padding: '64px 0 48px' }}>
        <div className="container text-center">
          <div style={{ fontSize: 56, marginBottom: 14 }}>🌾</div>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 36, fontFamily: 'Noto Sans Gujarati', marginBottom: 14 }}>
            Khedut Mart Vishé
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Noto Sans Gujarati', fontSize: 18, maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
            "ગામડાનું તાજું સીધું તમારા ઘર સુધી"
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        {/* Mission */}
        <div className="grid-2" style={{ gap: 48, alignItems: 'center', marginBottom: 72 }}>
          <div>
            <div className="badge badge-mango" style={{ marginBottom: 14 }}>🎯 Amaro Lakshya</div>
            <h2 style={{ fontWeight: 900, fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', fontSize: 28, marginBottom: 16, lineHeight: 1.3 }}>
              Khedut ane Graahak ne Seedha Jodo
            </h2>
            <p style={{ color: '#3d5a46', fontFamily: 'Noto Sans Gujarati', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Gujarat ane Saurashtra na kheduto seedha tamne fresh products apava chhe — koi vachatiyo nahi, koi vahevaar nahi. Barabar bhaav, sidhu vyavahar.
            </p>
            <p style={{ color: '#7a8c7e', fontFamily: 'Noto Sans Gujarati', fontSize: 15, lineHeight: 1.8 }}>
              Amari platform par 500+ certified kheduto chhe je Kesar Mango, Gir Mango, Organic vegetables, Groundnut, Chana ane badha gamdana products directly vecha chhe.
            </p>
          </div>
          <div style={{ background: '#eef6ef', borderRadius: 24, padding: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 80, marginBottom: 20 }}>🚜</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['500+', 'Farmers'], ['50K+', 'Orders'], ['100+', 'Villages'], ['4.8★', 'Rating']].map(([v, l]) => (
                <div key={l} style={{ background: '#fff', borderRadius: 14, padding: '16px 12px', textAlign: 'center', border: '1.5px solid var(--border)' }}>
                  <div style={{ fontWeight: 900, fontSize: 22, color: '#1E3A27' }}>{v}</div>
                  <div style={{ fontSize: 12, color: '#7a8c7e', fontFamily: 'Noto Sans Gujarati' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 72 }}>
          <h2 className="section-title text-center" style={{ marginBottom: 40 }}>Amara Mulyo</h2>
          <div className="grid-3">
            {[
              { icon: '🌿', title: 'Organic First', desc: 'Chemical-free, natural farming. Tamari health amari priority.' },
              { icon: '👨‍🌾', title: 'Khedut Nu Bhavishya', desc: 'Pratek purchase thi khedutni aavak vadhe chhe.' },
              { icon: '🚚', title: 'Fresh Delivery', desc: '24-48 kalakmaa farm thi tamara ghar sudhi.' },
              { icon: '💚', title: 'Zero Middlemen', desc: 'Koi vachatiyo nahi = khedutne vadhu, tamne oci keemat.' },
              { icon: '🏆', title: 'GI Certified', desc: 'Kesar ane Gir Mango GI tag certified authenticity.' },
              { icon: '📱', title: 'Easy Orders', desc: 'Gujarati bhashama seedhu, simple, mobile-friendly.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontWeight: 800, color: '#1E3A27', marginBottom: 8, fontSize: 17 }}>{title}</h3>
                <p style={{ color: '#7a8c7e', fontSize: 14, fontFamily: 'Noto Sans Gujarati', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#1E3A27', borderRadius: 24, padding: 48, textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 900, fontFamily: 'Noto Sans Gujarati', fontSize: 28, marginBottom: 12 }}>
            Khedut Mart Family ma Jovani karo 🌾
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Noto Sans Gujarati', marginBottom: 28, fontSize: 16 }}>
            Fresh products, farmer stories, ane Gujarat ni tasty products.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-mango" style={{ textDecoration: 'none', padding: '14px 30px', fontSize: 15 }}>Shop Now →</Link>
            <Link to="/contact" className="btn-outline-white" style={{ textDecoration: 'none', padding: '13px 28px', fontSize: 15 }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
