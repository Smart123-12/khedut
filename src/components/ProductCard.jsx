import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted, t } = useApp();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card" style={{ position: 'relative', cursor: 'pointer' }}>
      {/* Wishlist btn */}
      <button onClick={(e) => { e.preventDefault(); toggleWishlist(product); }} style={{
        position: 'absolute', top: 12, right: 12, zIndex: 2,
        width: 36, height: 36, borderRadius: '50%',
        background: '#fff', border: '1px solid #e8f5ed',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.2s',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <Heart size={16} fill={isWishlisted(product.id) ? '#e53e3e' : 'none'}
          color={isWishlisted(product.id) ? '#e53e3e' : '#aaa'} />
      </button>

      {/* Badge */}
      {product.badge && (
        <div style={{
          position: 'absolute', top: 12, left: 12, zIndex: 2,
          background: product.badgeType === 'mango'
            ? 'linear-gradient(135deg, #f5a623, #e8921a)'
            : 'linear-gradient(135deg, #2d8a4e, #1a5c2a)',
          color: '#fff', padding: '4px 10px', borderRadius: 6,
          fontSize: 11, fontWeight: 700, fontFamily: 'Noto Sans Gujarati, sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>{product.badge}</div>
      )}

      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {/* Image area */}
        <div style={{
          height: 180, background: 'linear-gradient(135deg, #e8f5ed 0%, #fff8e8 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 72, position: 'relative', overflow: 'hidden',
        }}>
          <span style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.15)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          >{product.image}</span>
          {product.organic && (
            <div style={{
              position: 'absolute', bottom: 8, left: 8,
              background: 'rgba(45,138,78,0.9)', color: '#fff',
              padding: '3px 8px', borderRadius: 4, fontSize: 10, fontWeight: 600,
            }}>🌿 Organic</div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ fontSize: 11, color: '#7a9c82', marginBottom: 4, fontFamily: 'Noto Sans Gujarati' }}>
            📍 {product.farmerVillage}
          </div>
          <h3 style={{
            fontSize: 15, fontWeight: 700, color: '#1a2e1f',
            marginBottom: 6, lineHeight: 1.3,
            fontFamily: 'Noto Sans Gujarati, sans-serif',
          }}>{product.name}</h3>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <div className="stars" style={{ fontSize: 13 }}>
              {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
            </div>
            <span style={{ fontSize: 12, color: '#7a9c82' }}>({product.reviews})</span>
          </div>

          {/* Price row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="price">₹{product.price}</span>
            <span style={{ fontSize: 14, color: '#aaa', textDecoration: 'line-through' }}>₹{product.oldPrice}</span>
            <span style={{ fontSize: 11, color: '#e53e3e', background: '#fff5f5', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
              {discount}% OFF
            </span>
            <span style={{ fontSize: 12, color: '#7a9c82' }}>/ {product.unit}</span>
          </div>
        </div>
      </Link>

      {/* Add to cart */}
      <div style={{ padding: '0 16px 16px', display: 'flex', gap: 8 }}>
        <button onClick={handleAdd} style={{
          flex: 1, padding: '10px 0', borderRadius: 10, border: 'none',
          background: added
            ? 'linear-gradient(135deg, #4caf72, #2d8a4e)'
            : 'linear-gradient(135deg, #2d8a4e, #1a5c2a)',
          color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer',
          transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          boxShadow: '0 4px 12px rgba(45,138,78,0.3)',
          fontFamily: 'Noto Sans Gujarati, sans-serif',
        }}>
          <ShoppingCart size={15} />
          {added ? t('ઉમેર્યું ✓', 'Added ✓') : t('કાર્ટમાં ઉમેરો', 'Add to Cart')}
        </button>
        <Link to={`/product/${product.id}`} style={{
          width: 38, height: 38, borderRadius: 10,
          background: '#e8f5ed', border: '1px solid #d0e8d8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#2d8a4e', textDecoration: 'none',
        }}>
          <Eye size={16} />
        </Link>
      </div>
    </div>
  );
}
