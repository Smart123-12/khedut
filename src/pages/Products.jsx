import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/data';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const { t } = useApp();
  const [searchParams] = useSearchParams();
  const initCat = searchParams.get('category') ? Number(searchParams.get('category')) : null;
  const initSearch = searchParams.get('search') || '';

  const [search, setSearch] = useState(initSearch);
  const [activeCat, setActiveCat] = useState(initCat);
  const [sortBy, setSortBy] = useState('default');
  const [onlyOrganic, setOnlyOrganic] = useState(false);
  const [priceMax, setPriceMax] = useState(1000);
  const [showFilter, setShowFilter] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCat) list = list.filter(p => p.categoryId === activeCat);
    if (search) list = list.filter(p =>
      p.name.includes(search) || p.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.includes(search) || p.farmerVillage.includes(search)
    );
    if (onlyOrganic) list = list.filter(p => p.organic);
    list = list.filter(p => p.price <= priceMax);
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'newest') list.reverse();
    return list;
  }, [activeCat, search, sortBy, onlyOrganic, priceMax]);

  return (
    <div className="page-enter">
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d8a4e)', padding: '40px 0 30px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 32, fontFamily: 'Noto Sans Gujarati', marginBottom: 8 }}>
            {t('બધા ઉત્પાદન', 'All Products')}
          </h1>
          <p style={{ color: '#a8d5b5', fontFamily: 'Noto Sans Gujarati' }}>
            {filtered.length} {t('ઉત્પાદન મળ્યા', 'products found')}
          </p>

          {/* Search bar */}
          <div style={{ marginTop: 20, display: 'flex', gap: 12, maxWidth: 600 }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#aaa' }} />
              <input
                className="input-field"
                placeholder={t('ઉત્પાદન શોધો...', 'Search products...')}
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: 44 }}
              />
            </div>
            <button onClick={() => setShowFilter(!showFilter)} style={{
              background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', borderRadius: 10, padding: '0 18px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600,
            }}>
              <SlidersHorizontal size={16} /> {t('ફિલ્ટર', 'Filter')}
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 20px' }}>
        {/* Categories */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          <button className={`tag ${!activeCat ? 'active' : ''}`} onClick={() => setActiveCat(null)}>
            🛒 {t('બધા', 'All')}
          </button>
          {categories.map(cat => (
            <button key={cat.id} className={`tag ${activeCat === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCat(activeCat === cat.id ? null : cat.id)}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Filter panel */}
        {showFilter && (
          <div style={{
            background: '#fff', borderRadius: 16, padding: 24, marginBottom: 24,
            border: '1px solid #e8f5ed', boxShadow: '0 4px 20px rgba(45,138,78,0.1)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              <div>
                <label style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', marginBottom: 10, display: 'block', color: '#1a5c2a' }}>
                  {t('ક્રમ', 'Sort By')}
                </label>
                <select className="input-field" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="default">{t('ડિફૉલ્ટ', 'Default')}</option>
                  <option value="price-asc">{t('ઓછો ભાવ', 'Price: Low to High')}</option>
                  <option value="price-desc">{t('વધુ ભાવ', 'Price: High to Low')}</option>
                  <option value="rating">{t('રેટિંગ', 'Best Rating')}</option>
                  <option value="newest">{t('નવો', 'Newest')}</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', marginBottom: 10, display: 'block', color: '#1a5c2a' }}>
                  {t('મૅક્સ ભાવ', 'Max Price')}: ₹{priceMax}
                </label>
                <input type="range" min={25} max={1000} value={priceMax}
                  onChange={e => setPriceMax(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#2d8a4e' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" id="organic" checked={onlyOrganic}
                  onChange={e => setOnlyOrganic(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: '#2d8a4e' }} />
                <label htmlFor="organic" style={{ fontWeight: 700, fontFamily: 'Noto Sans Gujarati', color: '#1a5c2a', cursor: 'pointer' }}>
                  🌿 {t('માત્ર ઓર્ગેનિક', 'Organic Only')}
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid-4">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🔍</div>
            <h3 style={{ color: '#1a5c2a', fontFamily: 'Noto Sans Gujarati', fontSize: 22, marginBottom: 8 }}>
              {t('ઉત્પाদन ન મળ્યા', 'No products found')}
            </h3>
            <p style={{ color: '#7a9c82', fontFamily: 'Noto Sans Gujarati' }}>
              {t('શોધ અથવા ફિલ્ટર બદલો', 'Try different search or filters')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
