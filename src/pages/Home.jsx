import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { t } = useApp();
  const navigate = useNavigate();
  const [sliderIndex, setSliderIndex] = useState(0);

  const farmersData = [
    {
      name: t('રમીલાબેન વઘાસિયા', 'Ramilaaben Vaghasiya'),
      specialty: t('મગફળીના નિષ્ણાત (Groundnut Specialist)', 'Groundnut Specialist'),
      location: t('સાસણ ગીર', 'Sasan Gir'),
      tag: t('Organic Certified', 'Organic Certified'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtWqRxFG8jrTyOioFYpStKeJ7V4COBxGUXNle4H1Mb1-lhIWUWEWDQ7fIJcWv2pSjnRLl-o1Zo8iIBoqAcR9exGR2V4DEUQUQ6-YJU0jvGqBxhq4Tbm8DTAmXkheU_YFVO3KLX10N7SAdAkiFbT_RcW-gO3dIQC3gmvOZ99ORTa5UAdLSYx_B8sxPhaVoWNTt8oRCFdwyQZiu5EMBopS9jy1VlmgYPO5wSS4rAUaQzlTn5Lo71We4O83qLyIBNgW-U8JF9xTQYng'
    },
    {
      name: t('હિતેશભાઈ ગાંગાણી', 'Hiteshbhai Gangani'),
      specialty: t('નાળિયેરની ખેતી (Coconut Farming)', 'Coconut Farming'),
      location: t('મહુવા, ભાવનગર', 'Mahuva, Bhavnagar'),
      tag: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYPViNj9Ct21GmaKsclrJK7MFuGOil6wHsum06iSkzMkqNP-TA3AGfxInUL9y4tSQpl0eTd92HgilUyx14TYF9j_kTzGeddDHOheVBqjvLmZn1CXXynPAobmUJ6pIGr60HzU7gEkvnW6SA5jBdfPMBxUHbEduij7GdwOJ4WxcYw111IXuWieM4kuBIOoTyzddv0-949XDq7ywbAf44wEsaRCW2xp7mccTpuTMY_vgLUv9iD3ny27HMx5Lmizrg8bYXBqu77rm36Q'
    },
    {
      name: t('રાઘવજીભાઈ ગોહિલ', 'Raghavjibhai Gohil'),
      specialty: t('કઠોળના ખેતી (Pulses Farmer)', 'Pulses Farmer'),
      location: t('અમરેલી', 'Amreli'),
      tag: t('Top Seller', 'Top Seller'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRYa_yqdLKoMIlQF6CONIkEWhm8FyRbYUqEsMEmw0hYz0Zoxl-lTmP3_Ko4Pn9zoBzqv4bjMABxRcgntR4nY4ZiCpQgPW-wp9eAoOcil90Mt0qSRzYmFg6piPWjIxAOuZn2tOxt4gzYxMvZSfG0lSNCk9n-_gq14QSeg0YWBKupBib_Y3smbF5gqg5v7SqG1CMDyv_zI7QHFP16ZCBGr3f6k3I7R5bdSzJdE-evnJAyFt2KJs3KvYtOBnlwSyguwzP-71wT_Mluw'
    },
    {
      name: t('વિનુભાઈ સભાયા', 'Vinubhai Sabhaya'),
      specialty: t('કેસરના નિષ્ણાત (Mango Specialist)', 'Mango Specialist'),
      location: t('જૂનાગઢ', 'Junagadh'),
      tag: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUPOgXXq0810s7voD0vocoz3qgDGWR4IkQnc_WigUr1ENmNoFzvy2nmfkg8SNoBbltge5IyEhoa1p-N26Nv46ShTV76kLcmi4kEPnWznG6agjO4TJv7RZTllnjV0HzKo59nGBKaySsWODbEpTvl15r6NgxrSwv0MEfHqqmWL1AQk5POA4Lub_jT7gN6woGSeQ2JVCrA47P2tUBDrDAo6FIuOwAwWTrc_WVoD6q9yuCF-aWFcihjPoXY7Q_Owvbnt9C8UD66DW12w'
    }
  ];

  const handleNextFarmer = () => {
    setSliderIndex((prev) => (prev + 1) % farmersData.length);
  };

  const handlePrevFarmer = () => {
    setSliderIndex((prev) => (prev - 1 + farmersData.length) % farmersData.length);
  };

  return (
    <div className="overflow-x-hidden bg-surface text-on-surface">
      {/* Hero Section */}
      <header className="relative pt-12 pb-12 md:pt-20 md:pb-20 px-container-margin overflow-hidden bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-stack-lg items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg mb-4">
              {t('તાજું ફળ, સીધું ખેતરથી | Fresh Farm Produce', 'Fresh Fruit, Straight from the Farm | Fresh Farm Produce')}
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary dark:text-primary-fixed mb-6 leading-tight">
              {t('ગામડાનું તાજું સીધું તમારા ઘર સુધી', 'Fresh from the village, straight to your home')}
              <span className="block text-body-lg font-body-lg text-on-surface-variant mt-2">
                {t('Fresh from the village, straight to your home', 'Fresh from the village, straight to your home')}
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
              {t(
                'ગીરની શુદ્ધ કેસર કેરીનો અસલી સ્વાદ હવે તમારા ઘરે. કેમિકલ મુક્ત અને કુદરતી રીતે પકવેલી કેરીઓ.',
                'Enjoy the authentic taste of Gir Kesar Mangoes at home. Chemical-free and naturally ripened.'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/products?category=1')} 
                className="px-8 py-4 bg-primary text-on-primary rounded-xl font-headline-md text-headline-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
              >
                {t('કેસર કેરીની ઓફર જુઓ', 'View Kesar Mango Offer')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={() => navigate('/products')} 
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-headline-md text-headline-md hover:bg-primary hover:text-on-primary transition-all"
              >
                {t('તમામ પ્રોડક્ટ્સ', 'All Products')}
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary-container rounded-3xl rotate-3 scale-105 opacity-20 transition-transform group-hover:rotate-1"></div>
            <img 
              className="relative w-full aspect-video md:aspect-square object-cover rounded-3xl shadow-xl transition-transform group-hover:scale-[1.02]" 
              alt="Gir Kesar mangoes crate"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqNgm7pi7b7D7CCi1icW5UUlf8ILPL1sEkLizbnVftxJ_nXKnm0h-TROBXob1Dy3lhEuJ0ZsrQUSo2NDMln-VjMoBAhVZHBtaGXajgvE2lUL6Zl9GrKTWLDpRThhZTRUjkwo40CoVB-F2c_JeiADCAo9_vfiNKDtXo_KgEFh1pZ0s1yAkKrhLU9DuhiEj22FR_12OD2AXq3UQSIXMEqKl4NdMWOWNP4PvE7Nty5AZ696v2jbWC7xRQkBiczfNjwqISP6P3vX3F8Q"
            />
          </div>
        </div>
      </header>

      {/* Product Category Bento Grid */}
      <section className="py-stack-lg px-container-margin max-w-[1280px] mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed">
            {t('શ્રેણીઓ (Categories)', 'Categories')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t('ખેતરની તાજગી, તમારા રસોડામાં (Farm freshness, in your kitchen)', 'Farm freshness, in your kitchen')}
          </p>
        </div>
        <div className="bento-grid">
          {/* Kesar Mango - Large Item */}
          <div 
            onClick={() => navigate('/products?category=1')}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group cursor-pointer bg-white border border-outline-variant shadow-sm hover:shadow-md transition-all h-[400px] md:h-auto"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              alt="Kesar Mango Slices"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0XHPcEfs2ySCh8VZm3ShnH7kCVqiOy6uGlaxfLMRNOlLMfWjZzQ_Pooje30srrautD7v_kKhvY6iQj-XZAtMirxYpOCju9UL7g6KfY5YhBzwDMTkps5Qu8dJAc0dKs_eJgu827olfaAJDdhi4jNtH2UJngHp2fhlJizVkKo474RnQ5B4mdNklP1uEkPw5qYND3gfAwGU2U5NXgyLKx-DoV4Qot3Z9FPfbJhNomOT1sTzf6D_HyKYEm1Yrq2-jEudAfhVaR8nsZg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-headline-md text-headline-md text-on-primary">
                {t('કેસર કેરી (Kesar Mango)', 'Kesar Mango')}
              </h3>
              <p className="text-on-primary/90 font-body-md">
                {t('તળાજા અને ગીરની પ્રખ્યાત કેસર', 'Talala and Gir famous Kesar')}
              </p>
              <button className="mt-4 w-fit px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-lg">
                {t('હમણાં ખરીદો', 'Shop Now')}
              </button>
            </div>
          </div>

          {/* Gir Mango */}
          <div 
            onClick={() => navigate('/products?category=2')}
            className="relative overflow-hidden rounded-3xl group cursor-pointer bg-white border border-outline-variant min-h-[200px]"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" 
              alt="Gir Payari Mango"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBokYji2jf_1b_CE2B3vO0_bA8eCn6TjM6ysmLai7t4i1-cP0JmoQhZl2Lk-WLNvS_V3PZ4_6Ohib8MzxM1-B-2vMLDK0W5DWVSz7-SKObMGlZiBXExM01mUJxDHE8zKqLVpGFwKtLaJFmA8C4wss9wVzaqRGVXrLzeS0pxQyv5SWgameaSZTwGMH01T_T-xYs8d9f3qN5mjR0mmQrf43j3scczh37ndH0uk7hYd562qBsZUkE4vmfELZfR5iwdEtbkMjGEvHcPPw"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="font-label-lg text-label-lg text-white">
                {t('ગીર પાયરી કેરી (Gir Mango)', 'Gir Payari Mango')}
              </h3>
            </div>
          </div>

          {/* Coconut Water */}
          <div 
            onClick={() => navigate('/products?category=3')}
            className="relative overflow-hidden rounded-3xl group cursor-pointer bg-white border border-outline-variant min-h-[200px]"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" 
              alt="Coconut Water"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCihZG1dPZr8ZdVEgu69aUhxaFxcjMNgbmQEjsq6rMcgSnKSceKuj9Rjs1K3uV2jZBrlKbMXi-a0PJsmhwKbH5sZ5OZdDi7y3t04KoVUniKdLllX9VEhial5LC-PncPovZLsSzBDpJnYhOLip8wtJfcDkvJc9zjvjYm66MSMCsrgUc0QdqveIVldvGYQqYjgtpyW2Ko5cA-j_Fs493uu4BdmFbLugAUri-S1erhR_yJs55VduQZxnTd2E1FgmH5MISWD00dQOg0cg"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="font-label-lg text-label-lg text-white">
                {t('નાળિયેર પાણી (Coconut Water)', 'Coconut Water')}
              </h3>
            </div>
          </div>

          {/* Organic Staples */}
          <div 
            onClick={() => navigate('/products?category=5')}
            className="md:col-span-2 relative overflow-hidden rounded-3xl group cursor-pointer bg-white border border-outline-variant min-h-[200px]"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" 
              alt="Organic Staples"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvMboxX10Hu-lB5fueyFMVOhI4_6RhX7QXdx5vbmf0GNiaI6v3-n1mDw-pdYRWeTPsB_Z9hgWkmVRbfn_hljAC3PVThkuWfS2F_bt2RoHWz9Pf10vXUuJEl-vb9dENmmahsZJZ_xlv6GxHilrgTeP5P3XNZe5tYQJwoA3lquntW9Ue7Kb47i-UOjOdHVI2QYcoUbkVJElyc8tEb05PbGnIV8yn-sejUuV_GUmaMz2DA6q_HgYj5fpoN1dhRXumCf5EpFqkEC38_Q"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tertiary/80 to-transparent flex flex-col justify-center p-8">
              <h3 className="font-headline-md text-headline-md text-on-primary">
                {t('શુદ્ધ કઠોળ અને તેલીબિયાં', 'Pure Staples & Pulses')}
              </h3>
              <p className="text-on-primary/90 font-body-md">
                {t('ચણા અને મગફળી (Organic Staples)', 'Chana and Groundnuts (Organic Staples)')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Village Stories */}
      <section className="py-stack-lg bg-surface-container-high organic-texture">
        <div className="max-w-[1280px] mx-auto px-container-margin">
          <div className="flex flex-col md:flex-row items-center gap-stack-lg">
            <div className="w-full md:w-1/2">
              <img 
                className="w-full aspect-square object-cover rounded-[40px] shadow-2xl border-8 border-white" 
                alt="Gujarati Farmer Mansukhbhai Patel"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV5nCFvZ176h59rmph-Ict4Re1a0JwCNCqQMGVMMs4ibcp70VU68SplFJiHtcU02RUohf37gvBov4fmV8L-sTuP1SjFtjVP-RquK6wq_DAmljW1DzsrWLASYaafcZDh5KIIQWU3cNIZW58OVkwsfX6l4QZVLvNrwDwyKCFFTPm-aNmMwxqbmOTEOrpoUuZ5CALKtFb4VxWCvNLETPGLN40bD86g1GwbBsbp9ZbZpoO5-crlMqr6-_rj-YDLRPU_7eK4NvYUQiIwQ"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed">
                {t('ગામડાની વાતો (Village Stories)', 'Village Stories')}
              </h2>
              <blockquote className="relative">
                <span className="text-8xl text-secondary opacity-20 absolute -top-10 -left-4">"</span>
                <p className="font-headline-md text-headline-md text-on-surface italic leading-relaxed relative z-10">
                  {t(
                    '"અમે ફક્ત ફળ નથી ઉગાડતા, અમે વિશ્વાસ ઉગાડીએ છીએ. દરેક કેરીમાં મારા ગામની માટીની મીઠાશ છે."',
                    '"We don\'t just grow fruit, we grow trust. Every mango carries the sweetness of my village\'s soil."'
                  )}
                  <span className="block text-body-lg font-body-lg text-on-surface-variant mt-4 not-italic">
                    {t(
                      '(We don\'t just grow fruit, we grow trust. Every mango carries the sweetness of my village\'s soil.)',
                      '(We don\'t just grow fruit, we grow trust. Every mango carries the sweetness of my village\'s soil.)'
                    )}
                  </span>
                </p>
              </blockquote>
              <div className="pt-4 border-t border-outline">
                <p className="font-label-lg text-label-lg text-primary dark:text-primary-fixed">
                  {t('મનસુખભાઈ પટેલ (Mansukhbhai Patel)', 'Mansukhbhai Patel')}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {t('તળાજા, ભાવનગર', 'Talaja, Bhavnagar')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farmers Slider */}
      <section className="py-stack-lg px-container-margin max-w-[1280px] mx-auto overflow-hidden">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed">
              {t('સૌરાષ્ટ્રના પ્રગતિશીલ ખેડૂતો', 'Saurashtra\'s Progressive Farmers')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t('Featured Farmers from Saurashtra', 'Featured Farmers from Saurashtra')}
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevFarmer}
              className="p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleNextFarmer}
              className="p-3 rounded-full bg-primary text-on-primary hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Farmers responsive carousel layout */}
        <div className="flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar">
          {farmersData.map((farmer, index) => {
            const isVisible = index === sliderIndex || (window.innerWidth >= 768);
            return (
              <div 
                key={index} 
                className={`min-w-[300px] flex-1 bg-white rounded-3xl p-6 shadow-sm border border-outline-variant snap-start group hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? 'block' : 'hidden md:block'
                }`}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
                    alt={farmer.name}
                    src={farmer.img}
                  />
                  {farmer.tag && (
                    <div className="absolute top-2 right-2 bg-primary text-on-primary text-xs px-2 py-1 rounded-full">
                      {farmer.tag}
                    </div>
                  )}
                </div>
                <h3 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed">
                  {farmer.name}
                </h3>
                <p className="font-label-lg text-label-lg text-secondary mb-4">
                  {farmer.specialty}
                </p>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-md">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {farmer.location}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Floating Action Button (Mobile) */}
      <button 
        onClick={() => navigate('/products')}
        className="md:hidden fixed bottom-20 right-4 z-50 w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex items-center justify-center animate-bounce active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          shopping_basket
        </span>
      </button>

      {/* Bottom Nav Bar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-2 pt-2 md:hidden bg-surface-container-lowest dark:bg-surface-dim shadow-[0_-4px_6px_-1px_rgba(45,90,39,0.1)] rounded-t-xl">
        <button 
          onClick={() => navigate('/')} 
          className="flex flex-col items-center justify-center text-primary active:scale-90 duration-150"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">{t('હોમ', 'Home')}</span>
        </button>
        <button 
          onClick={() => navigate('/products')} 
          className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
        >
          <span className="material-symbols-outlined">category</span>
          <span className="font-label-sm text-label-sm">{t('શ્રેણીઓ', 'Categories')}</span>
        </button>
        <button 
          onClick={() => navigate('/farmers')} 
          className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
        >
          <span className="material-symbols-outlined">auto_stories</span>
          <span className="font-label-sm text-label-sm">{t('વાતો', 'Stories')}</span>
        </button>
        <button 
          onClick={() => navigate('/farmer-dashboard')} 
          className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-sm text-label-sm">{t('નોંધણી', 'Register')}</span>
        </button>
      </nav>
    </div>
  );
}
