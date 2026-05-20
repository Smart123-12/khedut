import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Leaf, Star, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products, categories, farmers, testimonials } from '../data/data';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { t } = useApp();
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  const heroSlides = [
    { emoji: '🥭', tag: 'GI Certified · Gir Forest', title: 'કેસર કેરી', titleEn: 'Kesar Mango', sub: 'ગીર જંગલ નજીક ઉગાડેલ GI Certified મીઠી કેસર', price: '₹299/kg', badge: '40% OFF', catId: 1 },
    { emoji: '🥜', tag: 'Saurashtra Special', title: 'ગીર મગફળી', titleEn: 'Gir Groundnut', sub: 'જૂnagadhana kheta mathi seedha tamara ghar', price: '₹129/kg', badge: 'Bestseller', catId: 6 },
    { emoji: '🌿', tag: '100% Organic', title: 'ઓર્ગેनিक ઉત્પáदन', titleEn: 'Organic Products', sub: 'Koi chemical nahi — sudhu kudrat', price: 'Explore', badge: 'Certified', catId: 7 },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentBanner(b => (b + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[currentBanner];

  return (
    <div className="page-enter">

      {/* ── HERO ── */}
      <section style={{ background: '#1E3A27', overflow: 'hidden', position: 'relative', minHeight: 520 }}>
        {/* subtle texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(229,169,59,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'rgba(229,169,59,0.08)', pointerEvents: 'none' }} />

        <div className="container" style={{ padding: '72px 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>

            {/* Text */}
            <div key={currentBanner} className="animate-up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(229,169,59,0.18)', border: '1px solid rgba(229,169,59,0.35)', borderRadius: 50, padding: '6px 16px', marginBottom: 20 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E5A93B', display: 'inline-block' }} />
                <span style={{ color: '#E5A93B', fontSize: 12, fontWeight: 600 }}>{slide.tag}</span>
              </div>

              <h1 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(32px, 5vw, 58px)', lineHeight: 1.1, marginBottom: 8, fontFamily: 'Noto Sans Gujarati, Inter, sans-serif' }}>
                {slide.title}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, fontStyle: 'italic', marginBottom: 16 }}>{slide.titleEn}</p>

              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, fontFamily: 'Noto Sans Gujarati, sans-serif', maxWidth: 400 }}>
                {slide.sub}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36, flexWrap: 'wrap' }}>
                <span style={{ color: '#E5A93B', fontSize: 28, fontWeight: 900 }}>{slide.price}</span>
                <span style={{ background: '#E5A93B', color: '#1E3A27', padding: '5px 14px', borderRadius: 50, fontSize: 13, fontWeight: 700 }}>{slide.badge}</span>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={() => navigate(`/products?category=${slide.catId}`)} className="btn-mango" style={{ padding: '14px 30px', fontSize: 15 }}>
                  {t('હenow ood karo', 'Shop Now')} <ArrowRight size={17} />
                </button>
                <button onClick={() => navigate('/farmers')} className="btn-outline-white" style={{ padding: '13px 26px', fontSize: 15 }}>
                  {t('kel meet karo', 'Meet Farmers')}
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
                {[['500+', t('kel', 'Farmers')], ['50K+', t('oord', 'Orders')], ['4.8★', t('Rating', 'Rating')]].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ color: '#E5A93B', fontWeight: 900, fontSize: 22 }}>{v}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 2, fontFamily: 'Noto Sans Gujarati, sans-serif' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emoji visual */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div key={currentBanner} className="animate-float" style={{ textAlign: 'center' }}>
                <div style={{ width: 260, height: 260, borderRadius: '50%', background: 'rgba(229,169,59,0.12)', border: '2px solid rgba(229,169,59,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 130, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}>
                  {slide.emoji}
                </div>
              </div>
            </div>
          </div>

          {/* Slide dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentBanner(i)} style={{ width: i === currentBanner ? 28 : 8, height: 8, borderRadius: 4, background: i === currentBanner ? '#E5A93B' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e8e7e1', padding: '18px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(20px,5vw,60px)', flexWrap: 'wrap' }}>
            {[
              { icon: <Truck size={18} />, label: t('zap delivery', 'Fast Delivery'), sub: '24-48 hrs' },
              { icon: <ShieldCheck size={18} />, label: t('100% fresh', '100% Fresh'), sub: t('Guarantee', 'Guarantee') },
              { icon: <Leaf size={18} />, label: t('Organic', 'Organic'), sub: 'Certified' },
              { icon: <Star size={18} />, label: t('GI Certified', 'GI Certified'), sub: 'Kesar Mango' },
            ].map(({ icon, label, sub }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ color: '#2d6e35', background: '#eef6ef', borderRadius: 10, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1E3A27', fontFamily: 'Noto Sans Gujarati, sans-serif' }}>{label}</div>
                  <div style={{ fontSize: 11, color: '#7a8c7e' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
            <div>
              <h2 className="section-title">{t('Category', 'Shop by Category')}</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>{t('tamara product pasan karo', 'Find what you need')}</p>
            </div>
            <Link to="/products" style={{ color: '#2d6e35', textDecoration: 'none', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              {t('bdhaa juo', 'View all')} <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 14 }}>
            {categories.map(cat => (
              <Link key={cat.id} to={`/products?category=${cat.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 16, padding: '20px 12px', textAlign: 'center', border: '1.5px solid var(--border)', transition: 'all 0.25s', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1E3A27'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,39,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ fontSize: 34, marginBottom: 8 }}>{cat.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#1E3A27', fontFamily: 'Noto Sans Gujarati, sans-serif', marginBottom: 3 }}>{cat.name}</div>
                  <div style={{ fontSize: 11, color: '#7a8c7e' }}>{cat.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section" style={{ background: '#fff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
            <div>
              <div className="badge badge-mango" style={{ marginBottom: 10 }}>🔥 {t('hot products', 'Trending')}</div>
              <h2 className="section-title">{t('bestseller products', 'Bestselling Products')}</h2>
            </div>
            <Link to="/products" className="btn-outline" style={{ textDecoration: 'none', padding: '10px 22px', fontSize: 13 }}>
              {t('bdhaa juo', 'View All')} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid-4">
            {products.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── MANGO OFFER BANNER ── */}
      <section style={{ background: 'var(--bg)', padding: '48px 0' }}>
        <div className="container">
          <div style={{ background: '#1E3A27', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', padding: 'clamp(28px, 5vw, 52px)', gap: 24, boxShadow: '0 12px 40px rgba(30,58,39,0.2)' }}>
            <div>
              <div className="badge badge-mango" style={{ marginBottom: 12 }}>🌿 Seasonal Offer</div>
              <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 38px)', fontFamily: 'Noto Sans Gujarati, sans-serif', marginBottom: 12, lineHeight: 1.2 }}>
                Kesar Mango 40% OFF 🥭
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginBottom: 24, fontFamily: 'Noto Sans Gujarati, sans-serif', lineHeight: 1.8 }}>
                GI Certified · Gir Forest · ₹299/kg<br />
                ₹500+ par free delivery
              </p>
              <button onClick={() => navigate('/products?category=1')} className="btn-mango" style={{ padding: '14px 30px', fontSize: 15 }}>
                🥭 Order Karo <ArrowRight size={17} />
              </button>
            </div>
            <div className="animate-float" style={{ fontSize: 'clamp(64px, 10vw, 120px)', textAlign: 'center' }}>🥭</div>
          </div>
        </div>
      </section>

      {/* ── FEATURED FARMERS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <div className="badge badge-green" style={{ marginBottom: 12 }}>👨‍🌾 {t('amara khedut', 'Our Farmers')}</div>
            <h2 className="section-title">{t('gamdana khedut', 'Village Farmers')}</h2>
            <p className="section-subtitle">{t('seethi tam to ghar', 'Direct farm to your home')}</p>
          </div>
          <div className="grid-4">
            {farmers.map(f => (
              <div key={f.id} className="card" style={{ padding: 24, textAlign: 'center', border: '1.5px solid var(--border)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#eef6ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 14px' }}>{f.emoji}</div>
                <h3 style={{ fontWeight: 800, fontFamily: 'Noto Sans Gujarati, sans-serif', fontSize: 16, marginBottom: 4, color: '#1E3A27' }}>{f.name}</h3>
                <p style={{ color: '#7a8c7e', fontSize: 12, marginBottom: 8, fontFamily: 'Noto Sans Gujarati, sans-serif' }}>📍 {f.village}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 10 }}>
                  {'★'.repeat(5).split('').map((_, i) => <span key={i} style={{ color: i < Math.round(f.rating) ? '#E5A93B' : '#ddd', fontSize: 14 }}>★</span>)}
                </div>
                {f.verified && <span className="badge badge-green">✓ Verified</span>}
                <p style={{ fontSize: 12, color: '#7a8c7e', marginTop: 10, lineHeight: 1.6, fontFamily: 'Noto Sans Gujarati, sans-serif' }}>{f.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 className="section-title">{t('graahak na abhipray', 'Customer Reviews')}</h2>
            <p className="section-subtitle">{t('khush graahako', 'Happy customers across Gujarat')}</p>
          </div>
          <div className="grid-4">
            {testimonials.map(r => (
              <div key={r.id} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                  {'★'.repeat(r.rating).split('').map((_, i) => <span key={i} style={{ color: '#E5A93B', fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ color: '#3d5a46', fontSize: 14, lineHeight: 1.75, marginBottom: 16, fontFamily: 'Noto Sans Gujarati, sans-serif' }}>"{r.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #1E3A27, #E5A93B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: '#7a8c7e' }}>{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FARMER CTA ── */}
      <section style={{ background: '#E5A93B', padding: '60px 0' }}>
        <div className="container text-center">
          <div style={{ fontSize: 48, marginBottom: 12 }}>🚜</div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(22px, 4vw, 36px)', color: '#1E3A27', marginBottom: 12, fontFamily: 'Noto Sans Gujarati, sans-serif' }}>
            Khedut Cho? Athari Join Karo!
          </h2>
          <p style={{ color: 'rgba(30,58,39,0.75)', fontSize: 16, marginBottom: 28, fontFamily: 'Noto Sans Gujarati, sans-serif' }}>
            500+ khedut already Khedut Mart par. Seedhu graahak sudhi vecho.
          </p>
          <Link to="/farmer-dashboard" className="btn-primary" style={{ textDecoration: 'none', padding: '15px 36px', fontSize: 16, boxShadow: '0 8px 24px rgba(30,58,39,0.25)' }}>
            Khedut Registration →
          </Link>
        </div>
      </section>

      {/* WhatsApp */}
      <a href="https://wa.me/919876543210" className="wa-float" target="_blank" rel="noopener noreferrer">💬</a>
    </div>
  );
}
