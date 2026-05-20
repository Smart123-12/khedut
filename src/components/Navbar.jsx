import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, X, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { cartCount, wishlist, user, logout, lang, setLang, t } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQ.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQ)}`);
      setSearchOpen(false);
      setSearchQ('');
    }
  };

  const navLinks = [
    { to: '/', label: t('હોમ', 'Home') },
    { to: '/products', label: t('શ્રેણીઓ', 'Categories') },
    { to: '/farmers', label: t('ગામડાની વાતો', 'Village Stories') },
    { to: '/farmer-dashboard', label: t('ખેડૂત રજીસ્ટ્રેશન', 'Farmer Registration') },
  ];

  return (
    <>
      {/* Top Banner (Rural notice) */}
      <div className="bg-primary text-[#a1d494] text-xs py-1.5 text-center font-medium">
        🚚 {t('₹500+ ઓર્ડર પર ફ્રી ડિલિવરી', 'Free delivery on orders of ₹500+')} &nbsp;|&nbsp; 📞 +91 98765 43210 &nbsp;|&nbsp; 🌿 {t('100% ઓર્ગેનિક ખેત ઉત્પાદન', '100% Organic Farm Products')}
      </div>

      {/* Top Navigation */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-sm flex justify-between items-center px-container-margin py-stack-sm max-w-[1280px] mx-auto border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img 
              alt="Khedut Mart Logo" 
              className="h-10 w-auto" 
              src="data:image/png;base64,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"
            />
            <span className="hidden md:block font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
              {t('ખેડૂત માર્ટ', 'Khedut Mart')}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-stack-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-label-lg text-label-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-secondary'
                    : 'text-[#42493e] hover:text-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right Actions Menu */}
        <div className="flex items-center gap-4">
          {/* Gujarati/English Language Switcher */}
          <button
            onClick={() => setLang((l) => (l === 'gu' ? 'en' : 'gu'))}
            className="p-2 text-primary hover:bg-[#eae8e3] rounded-full transition-transform active:scale-95 flex items-center gap-1 font-bold text-sm"
            title={t('ભાષા બદલો', 'Switch Language')}
          >
            <Globe size={18} />
            <span>{lang === 'gu' ? 'EN' : 'ગુ'}</span>
          </button>

          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-primary hover:bg-[#eae8e3] rounded-full transition-transform active:scale-95"
            title={t('શોધો', 'Search')}
          >
            <span className="material-symbols-outlined align-middle">search</span>
          </button>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="p-2 text-primary hover:bg-[#eae8e3] rounded-full transition-transform active:scale-95 relative"
            title={t('ઈચ્છાસૂચિ', 'Wishlist')}
          >
            <span className="material-symbols-outlined align-middle">favorite</span>
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#feb700] text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Shopping Cart Link */}
          <Link
            to="/cart"
            className="p-2 text-primary hover:bg-[#eae8e3] rounded-full transition-transform active:scale-95 relative"
            title={t('કાર્ટ', 'Shopping Cart')}
          >
            <span className="material-symbols-outlined align-middle">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#feb700] text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Account / Profile */}
          {user ? (
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm"
                title={user.name}
              >
                {user.name?.[0] || 'U'}
              </div>
              <button 
                onClick={logout} 
                className="hidden md:block text-xs text-outline font-medium hover:text-primary transition-colors"
              >
                {t('લૉગઆઉટ', 'Logout')}
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="p-2 text-primary hover:bg-[#eae8e3] rounded-full transition-transform active:scale-95"
              title={t('પ્રવેશ', 'Login')}
            >
              <span className="material-symbols-outlined align-middle">account_circle</span>
            </Link>
          )}

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-primary hover:bg-[#eae8e3] rounded-full transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined align-middle">menu</span>
          </button>
        </div>
      </nav>

      {/* Search overlay dialog */}
      {searchOpen && (
        <div 
          onClick={() => setSearchOpen(false)} 
          className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-24 px-4 backdrop-blur-xs"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white rounded-3xl p-6 w-full max-w-[540px] shadow-2xl border border-outline-variant animate-up"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline-md text-[#1E3A27] font-bold">
                {t('પ્રોડક્ટ શોધો', 'Search Products')}
              </h3>
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full hover:bg-surface-container-high transition-colors"
              >
                <X size={20} className="text-[#1E3A27]" />
              </button>
            </div>
            <form onSubmit={handleSearch} className="flex gap-2">
              <input 
                className="w-full px-4 py-3 border border-outline-variant rounded-xl focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-sm" 
                placeholder={t('કેરી, ચણા, મગફળી...', 'Mango, chana, groundnut...')} 
                value={searchQ} 
                onChange={(e) => setSearchQ(e.target.value)} 
                autoFocus 
              />
              <button 
                type="submit" 
                className="px-5 bg-primary text-white rounded-xl hover:bg-primary-container transition-all flex items-center"
              >
                <Search size={16} />
              </button>
            </form>
            <div className="flex flex-wrap gap-2 mt-4">
              {['🥭 Kesar Mango', '🥜 Mungfali', '🫘 Chana', '🌿 Organic'].map(s => (
                <span 
                  key={s} 
                  className="px-3 py-1 bg-surface-container-low border border-outline-variant hover:border-primary rounded-full text-xs font-medium cursor-pointer transition-colors"
                  onClick={() => { setSearchQ(s.split(' ').slice(1).join(' ')); }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation Menu */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)} 
          className="fixed inset-0 bg-black/45 z-50 flex justify-end"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-72 bg-surface h-full p-6 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <span className="font-headline-md text-primary font-bold">Khedut Mart 🌾</span>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-1 hover:bg-[#eae8e3] rounded-full"
              >
                <X size={24} className="text-primary" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-xl text-primary font-bold hover:bg-[#eae8e3] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {user ? (
              <div className="mt-auto border-t border-outline-variant pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {user.name?.[0] || 'U'}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1E3A27]">{user.name}</div>
                    <div className="text-xs text-outline">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => { logout(); setMenuOpen(false); }}
                  className="w-full py-3 bg-[#eae8e3] text-primary font-bold rounded-xl active:scale-95 transition-transform"
                >
                  {t('લૉગઆઉટ', 'Logout')}
                </button>
              </div>
            ) : (
              <div className="mt-auto border-t border-outline-variant pt-4">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center w-full py-3 bg-primary text-white font-bold rounded-xl active:scale-95 transition-transform"
                >
                  {t('પ્રવેશ / લૉગિન', 'Login / Register')}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
