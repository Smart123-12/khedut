import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { cartCount, wishlist, user, logout, lang, setLang, t } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQ.trim()) { navigate(`/products?search=${encodeURIComponent(searchQ)}`); setSearchOpen(false); setSearchQ(''); }
  };

  const navLinks = [
    { to: '/', label: t('હોम', 'Home') },
    { to: '/products', label: t('ઉત્પાદન', 'Products') },
    { to: '/farmers', label: t('ખેડૂત', 'Farmers') },
    { to: '/about', label: t('વિશે', 'About') },
    { to: '/contact', label: t('સંપર્ક', 'Contact') },
  ];

  return (
    <>
      {/* Top bar */}
      <div style={{ background: '#1E3A27', color: '#a8d5b5', fontSize: 12, padding: '6px 0', textAlign: 'center', fontFamily: 'Noto Sans Gujarati, sans-serif' }}>
        🚚 ₹500+ ઓર્ડર પર ફ્રી ડિલિવરી &nbsp;|&nbsp; 📞 +91 98765 43210 &nbsp;|&nbsp; 🌿 100% ઓર્ગેનિક ખેત ઉત્પાદન
      </div>

      <nav style={{ background: '#fff', borderBottom: '1px solid #e8e7e1', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(30,58,39,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #1E3A27, #2d6e35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                🌾
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, color: '#1E3A27', fontFamily: 'Inter, sans-serif', lineHeight: 1.1 }}>Khedut Mart</div>
                <div style={{ fontSize: 10, color: '#7a8c7e', fontFamily: 'Noto Sans Gujarati, sans-serif', lineHeight: 1 }}>ખેડૂત માર્ટ</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navLinks.map(item => (
                <Link key={item.to} to={item.to} style={{ color: '#3d5a46', textDecoration: 'none', padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500, transition: 'all 0.2s', fontFamily: 'Noto Sans Gujarati, Inter, sans-serif' }}
                  onMouseEnter={e => { e.target.style.background = '#eef6ef'; e.target.style.color = '#1E3A27'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#3d5a46'; }}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {/* Lang */}
              <button onClick={() => setLang(l => l === 'gu' ? 'en' : 'gu')} style={{ background: '#f4f3ef', border: '1.5px solid #e0dfd9', color: '#1E3A27', borderRadius: 50, padding: '5px 12px', cursor: 'pointer', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                <Globe size={13} /> {lang === 'gu' ? 'EN' : 'ગુ'}
              </button>

              {/* Search */}
              <button onClick={() => setSearchOpen(true)} style={{ background: 'transparent', border: 'none', color: '#3d5a46', width: 36, height: 36, borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Search size={18} />
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" style={{ position: 'relative', color: '#3d5a46', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <Heart size={18} />
                {wishlist.length > 0 && <span className="cart-badge">{wishlist.length}</span>}
              </Link>

              {/* Cart */}
              <Link to="/cart" style={{ position: 'relative', color: '#3d5a46', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <ShoppingCart size={18} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>

              {/* User */}
              {user ? (
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#1E3A27', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>
                    {user.name?.[0] || 'U'}
                  </div>
                  <button onClick={logout} className="hide-mobile" style={{ background: 'none', border: 'none', color: '#7a8c7e', cursor: 'pointer', fontSize: 13 }}>Logout</button>
                </div>
              ) : (
                <Link to="/login" className="btn-primary" style={{ textDecoration: 'none', padding: '8px 20px', fontSize: 13 }}>
                  {t('લૉગિન', 'Login')}
                </Link>
              )}

              {/* Mobile menu */}
              <button onClick={() => setMenuOpen(true)} style={{ display: 'none', background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }} id="mobile-menu-btn" className="show-mobile">
                <Menu size={22} color="#1E3A27" />
              </button>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div onClick={() => setSearchOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 80 }}>
            <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 20, padding: 28, width: '90%', maxWidth: 540, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <form onSubmit={handleSearch} style={{ display: 'flex', gap: 10 }}>
                <input className="input-field" placeholder={t('કેરી, ચણા, મગફળી...', 'Mango, chana, groundnut...')} value={searchQ} onChange={e => setSearchQ(e.target.value)} autoFocus style={{ flex: 1 }} />
                <button type="submit" className="btn-primary" style={{ padding: '10px 20px' }}><Search size={16} /></button>
              </form>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                {['🥭 Kesar Mango', '🥜 Mungfali', '🫘 Chana', '🌿 Organic'].map(s => (
                  <span key={s} className="tag" onClick={() => { setSearchQ(s.split(' ').slice(1).join(' ')); }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 200 }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 280, background: '#fff', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <span style={{ fontWeight: 800, color: '#1E3A27', fontSize: 18 }}>Khedut Mart 🌾</span>
              <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={22} color="#555" /></button>
            </div>
            {[...navLinks, { to: '/farmer-dashboard', label: '👨‍🌾 Farmer Dashboard' }, { to: '/admin', label: '⚙️ Admin' }].map(item => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 0', color: '#1E3A27', textDecoration: 'none', fontSize: 16, fontWeight: 600, borderBottom: '1px solid #eef6ef', fontFamily: 'Noto Sans Gujarati, sans-serif' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
