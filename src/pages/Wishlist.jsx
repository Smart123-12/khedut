import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist, toggleWishlist, t } = useApp();

  if (wishlist.length === 0) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      <Heart size={64} color="#e0dfd9" strokeWidth={1.5} style={{ marginBottom: 20 }} />
      <h2 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1E3A27', fontSize: 22, marginBottom: 10 }}>{t('Wishlist khaali', 'Wishlist is empty')}</h2>
      <p style={{ color: '#7a8c7e', fontFamily: 'Noto Sans Gujarati', marginBottom: 24 }}>{t('Products save karo', 'Save products you love!')}</p>
      <Link to="/products" className="btn-primary" style={{ textDecoration: 'none' }}>Browse Products</Link>
    </div>
  );

  return (
    <div className="page-enter">
      <div style={{ background: '#1E3A27', padding: '36px 0 28px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 28, fontFamily: 'Noto Sans Gujarati' }}>
            ❤️ {t('Wishlist', 'My Wishlist')} ({wishlist.length})
          </h1>
        </div>
      </div>
      <div className="container" style={{ padding: '36px 24px' }}>
        <div className="grid-4">
          {wishlist.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
