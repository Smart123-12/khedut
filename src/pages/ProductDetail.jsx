import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Star, Truck, Shield, Leaf, Plus, Minus } from 'lucide-react';
import { products } from '../data/data';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted, t } = useApp();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('desc');
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === Number(id));
  if (!product) return (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <div style={{ fontSize: 64 }}>😕</div>
      <h2 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a' }}>{t('ઉત્પáदन ન મળ્યો', 'Product not found')}</h2>
      <Link to="/products" className="btn-primary" style={{ textDecoration: 'none', marginTop: 20, display: 'inline-flex' }}>
        {t('પાછા જાઓ', 'Go Back')}
      </Link>
    </div>
  );

  const related = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);
  const discount = Math.round((1 - product.price / product.oldPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-enter">
      <div className="container" style={{ padding: '32px 20px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#7a9c82', textDecoration: 'none', fontSize: 14 }}>હોમ</Link>
          <span style={{ color: '#ccc' }}>/</span>
          <Link to="/products" style={{ color: '#7a9c82', textDecoration: 'none', fontSize: 14 }}>ઉत्पादन</Link>
          <span style={{ color: '#ccc' }}>/</span>
          <span style={{ color: '#1a5c2a', fontSize: 14, fontFamily: 'Noto Sans Gujarati', fontWeight: 600 }}>{product.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Left - Image */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #e8f5ed 0%, #fff8e8 100%)',
              borderRadius: 24, height: 400, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 140, position: 'relative',
              border: '2px solid #e8f5ed',
            }}>
              {product.image}
              {product.organic && (
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: '#2d8a4e', color: '#fff', padding: '6px 14px',
                  borderRadius: 8, fontSize: 13, fontWeight: 700,
                }}>🌿 Organic</div>
              )}
            </div>
            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
              {product.tags.map(tag => (
                <span key={tag} className="badge badge-green" style={{ padding: '6px 14px', fontSize: 13 }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div>
            <div style={{ fontSize: 13, color: '#7a9c82', marginBottom: 8, fontFamily: 'Noto Sans Gujarati' }}>
              📍 {product.farmer} — {product.farmerVillage}
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#1a2e1f', marginBottom: 8, fontFamily: 'Noto Sans Gujarati', lineHeight: 1.3 }}>
              {product.name}
            </h1>
            <p style={{ color: '#3d5a46', fontSize: 15, marginBottom: 16, fontFamily: 'Noto Sans Gujarati' }}>
              {product.nameEn}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {'★'.repeat(5).split('').map((_, i) => (
                  <span key={i} style={{ color: i < Math.round(product.rating) ? '#f5a623' : '#ddd', fontSize: 20 }}>★</span>
                ))}
              </div>
              <span style={{ fontWeight: 700, color: '#1a2e1f', fontSize: 16 }}>{product.rating}</span>
              <span style={{ color: '#7a9c82', fontSize: 14 }}>({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: '#1a5c2a' }}>₹{product.price}</span>
              <span style={{ fontSize: 18, color: '#aaa', textDecoration: 'line-through' }}>₹{product.oldPrice}</span>
              <span style={{ background: '#fff5f5', color: '#e53e3e', padding: '4px 10px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}>
                {discount}% OFF
              </span>
              <span style={{ color: '#7a9c82', fontSize: 14 }}>/ {product.unit}</span>
            </div>

            {/* Stock */}
            <div style={{ marginBottom: 20 }}>
              <span style={{ color: product.stock > 50 ? '#2d8a4e' : '#e8921a', fontWeight: 600, fontSize: 14, fontFamily: 'Noto Sans Gujarati' }}>
                {product.stock > 50 ? `✓ ${t('ઉपলબ્ध', 'In Stock')} (${product.stock}kg)` : `⚠ ${t('ઓछو', 'Limited Stock')}: ${product.stock}kg`}
              </span>
            </div>

            {/* Qty selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <span style={{ fontWeight: 600, fontFamily: 'Noto Sans Gujarati' }}>{t('જथ્થો', 'Quantity')}:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '2px solid #d0e8d8', borderRadius: 12, overflow: 'hidden' }}>
                <button onClick={() => setQty(q => Math.max(product.minOrder, q - 1))} style={{
                  width: 40, height: 40, background: '#f0faf4', border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><Minus size={16} color="#2d8a4e" /></button>
                <span style={{ width: 48, textAlign: 'center', fontWeight: 700, fontSize: 16 }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{
                  width: 40, height: 40, background: '#f0faf4', border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><Plus size={16} color="#2d8a4e" /></button>
              </div>
              <span style={{ color: '#7a9c82', fontSize: 14 }}>Min: {product.minOrder}{product.unit}</span>
            </div>

            {/* Total */}
            <div style={{ background: '#f0faf4', borderRadius: 12, padding: '12px 16px', marginBottom: 24 }}>
              <span style={{ fontFamily: 'Noto Sans Gujarati', color: '#3d5a46' }}>
                {t('કુલ', 'Total')}: </span>
              <span style={{ fontWeight: 900, fontSize: 20, color: '#1a5c2a' }}>
                ₹{product.price * qty}
              </span>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <button onClick={handleAddToCart} style={{
                flex: 1, padding: '14px 24px', borderRadius: 12, border: 'none',
                background: added ? 'linear-gradient(135deg, #4caf72, #2d8a4e)' : 'linear-gradient(135deg, #2d8a4e, #1a5c2a)',
                color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: '0 6px 20px rgba(45,138,78,0.35)', transition: 'all 0.3s',
                fontFamily: 'Noto Sans Gujarati',
              }}>
                <ShoppingCart size={18} />
                {added ? t('ઉmered ✓', 'Added ✓') : t('kcartma ઉmero', 'Add to Cart')}
              </button>
              <button onClick={() => { handleAddToCart(); navigate('/cart'); }} className="btn-mango" style={{ padding: '14px 24px', fontSize: 16 }}>
                {t('હmNo ખarido', 'Buy Now')}
              </button>
              <button onClick={() => toggleWishlist(product)} style={{
                width: 50, height: 50, borderRadius: 12,
                background: isWishlisted(product.id) ? '#fff5f5' : '#f0faf4',
                border: `2px solid ${isWishlisted(product.id) ? '#fca5a5' : '#d0e8d8'}`,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Heart size={20} fill={isWishlisted(product.id) ? '#e53e3e' : 'none'}
                  color={isWishlisted(product.id) ? '#e53e3e' : '#2d8a4e'} />
              </button>
            </div>

            {/* Features */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { icon: <Truck size={16} />, text: t('ઝpdi delivery', 'Fast Delivery') },
                { icon: <Shield size={16} />, text: t('fresh guarantee', 'Fresh Guarantee') },
                { icon: <Leaf size={16} />, text: t('direct khedo', 'Farm Direct') },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#2d8a4e', fontSize: 13, fontWeight: 600 }}>
                  {icon} {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid #e8f5ed', marginBottom: 24 }}>
            {[['desc', t('વvornaN', 'Description')], ['farmer', t('khedut', 'Farmer Info')], ['reviews', 'Reviews']].map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} style={{
                padding: '12px 24px', border: 'none', cursor: 'pointer', fontWeight: 700,
                fontSize: 15, fontFamily: 'Noto Sans Gujarati, sans-serif',
                background: 'none', borderBottom: tab === k ? '3px solid #2d8a4e' : '3px solid transparent',
                color: tab === k ? '#2d8a4e' : '#7a9c82', marginBottom: -2, transition: 'all 0.2s',
              }}>{label}</button>
            ))}
          </div>
          {tab === 'desc' && (
            <div style={{ lineHeight: 1.9, color: '#3d5a46', fontFamily: 'Noto Sans Gujarati, sans-serif', fontSize: 16 }}>
              <p style={{ marginBottom: 16 }}>{product.desc}</p>
              <p style={{ color: '#7a9c82', fontSize: 14 }}>{product.descEn}</p>
            </div>
          )}
          {tab === 'farmer' && (
            <div style={{ background: '#f0faf4', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ fontSize: 48 }}>👨‍🌾</div>
                <div>
                  <h3 style={{ fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', fontSize: 20, fontWeight: 800 }}>{product.farmer}</h3>
                  <p style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>📍 {product.farmerVillage}</p>
                  <span className="badge badge-green" style={{ marginTop: 8 }}>✓ Verified Farmer</span>
                </div>
              </div>
            </div>
          )}
          {tab === 'reviews' && (
            <div style={{ textAlign: 'center', padding: 40, color: '#7a9c82' }}>
              <div style={{ fontSize: 48 }}>💬</div>
              <p style={{ fontFamily: 'Noto Sans Gujarati', fontSize: 16 }}>
                {t('reviews loading...', 'Reviews loading...')}
              </p>
            </div>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2 className="section-title" style={{ marginBottom: 24 }}>{t('સmbandhit utpadn', 'Related Products')}</h2>
            <div className="grid-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
