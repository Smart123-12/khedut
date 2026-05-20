import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#1E3A27', color: '#a8d5b5' }}>
      <div className="container" style={{ padding: '52px 24px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 36 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: '#E5A93B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🌾</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: 18, fontFamily: 'Inter, sans-serif' }}>Khedut Mart</div>
                <div style={{ fontSize: 11, color: '#6b9e7a', fontFamily: 'Noto Sans Gujarati, sans-serif' }}>ખેડૂત માર્ટ</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.9, fontFamily: 'Noto Sans Gujarati, sans-serif', marginBottom: 18, color: '#6b9e7a' }}>
              ગામડાનું તાજું સીધું તમારા ઘર સુધી.<br />
              ખેડૂત ટૂ ગ્રાહક — કોઈ વચેટિઓ નહીં.
            </p>
            {/* Social emoji buttons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[['📸', 'Instagram'], ['📘', 'Facebook'], ['▶️', 'YouTube']].map(([e, l]) => (
                <a key={l} href="#" title={l} style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={ev => ev.currentTarget.style.background = 'rgba(229,169,59,0.3)'}
                  onMouseLeave={ev => ev.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                  {e}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontFamily: 'Noto Sans Gujarati', fontSize: 15 }}>ઝડપી લિંક</h4>
            {[['/', 'હોમ'], ['/products', 'ઉત્પáदन'], ['/farmers', 'ખéडूत'], ['/about', 'વிशे'], ['/contact', 'સámparak'], ['/farmer-dashboard', 'Khedut Dashboard']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: '#6b9e7a', textDecoration: 'none', marginBottom: 10, fontSize: 14, fontFamily: 'Noto Sans Gujarati, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#E5A93B'}
                onMouseLeave={e => e.target.style.color = '#6b9e7a'}>
                → {label}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontFamily: 'Noto Sans Gujarati', fontSize: 15 }}>Categories</h4>
            {['🥭 Kesar Mango', '🥭 Gir Mango', '🥥 Coconut', '🫘 Chana-Kathol', '🥜 Mungfali', '🌿 Organic'].map(c => (
              <Link key={c} to="/products" style={{ display: 'block', color: '#6b9e7a', textDecoration: 'none', marginBottom: 10, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#E5A93B'}
                onMouseLeave={e => e.target.style.color = '#6b9e7a'}>
                {c}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16, fontFamily: 'Noto Sans Gujarati', fontSize: 15 }}>સámparak</h4>
            {[
              { icon: <Phone size={15} />, text: '+91 98765 43210' },
              { icon: <Mail size={15} />, text: 'help@khedutmart.in' },
              { icon: <MapPin size={15} />, text: 'Rajkot, Saurashtra, Gujarat' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                <span style={{ color: '#E5A93B', marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ fontSize: 14, color: '#6b9e7a', fontFamily: 'Noto Sans Gujarati, sans-serif' }}>{c.text}</span>
              </div>
            ))}
            <a href="https://wa.me/919876543210" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', padding: '10px 18px', borderRadius: 50, textDecoration: 'none', fontSize: 13, fontWeight: 600, marginTop: 8, boxShadow: '0 4px 12px rgba(37,211,102,0.3)' }}>
              💬 WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '18px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#4a7a56', fontFamily: 'Noto Sans Gujarati, sans-serif' }}>
          © 2025 Khedut Mart · Made with 💚 for Gujarat Farmers · ખéडूत मार्ट
        </p>
      </div>
    </footer>
  );
}
