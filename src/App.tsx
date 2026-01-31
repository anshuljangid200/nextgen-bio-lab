import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Microscope, ChevronRight, Zap, Beaker, Dna, Calculator, Layers, Activity, FileText, Target, Users, X } from 'lucide-react';
import { ThreeScene } from './components/ThreeScene';
import { Calculators } from './Calculators';
import { ChatBot } from './components/ChatBot';
import './App.css';

const teamMembers = [
  {
    name: "Karan Panchal",
    role: "Founder | Tip BioScience",
    image: "/assets/karan.png",
    bio: "Visionary leader bridging biotechnology and strategic management. Focused on FESEM imaging and advanced material science research.",
    linkedin: "#",
  },
  {
    name: "Foram Mokani",
    role: "Co-Founder | MSc Biotechnology | Univ. of Bath",
    image: "/assets/logo.png",
    bio: "Pioneering research in Molecular Biology and Bioprocessing. Expertise in neurodegenerative pathways and innovative algal-based health solutions.",
    linkedin: "https://www.linkedin.com/in/foram-mokani-493831242/",
  },
  {
    name: "Manthan Viradiya",
    role: "Co-Founder | Artificial Intelligence And Data Science",
    image: "/assets/logo.png",
    bio: "Architecting the intersection of Artificial Intelligence And Data Science. Certified Cyber Cadet with a mission to secure the future of biometric data.",
    linkedin: "#",
  },
  {
    name: "Samrat",
    role: "Microbiology Scholar | AACR & ASCO",
    image: "/assets/samrat.png",
    bio: "Microbiology student with a focus on oncology. Summer Research Fellow at University of Tsukuba, Japan. Selected for iGEM Community Paris Desi program among top 30 students globally.",
    linkedin: "https://www.linkedin.com/in/samratpaul-biotech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sai Manogna",
    role: "Biotechnology | NIT Warangal",
    image: "/assets/nit_student.png",
    bio: "Biotechnology undergraduate at NIT Warangal specializing in wet-lab research, biochemistry, and cancer biology. Actively exploring CRISPR technology and Drug Discovery.",
    linkedin: "https://www.linkedin.com/in/nsaimanognareddy/",
  },
  {
    name: "Sai Shresta",
    role: "Computational Bio Specialist",
    image: "/assets/sai.png",
    bio: "Unlocking the secrets of genomics through advanced bioinformatics. IEEE EMBS member recognized for excellence in computational research.",
    linkedin: "https://www.linkedin.com/in/sai-shresta-ambati-ganga-b677ba305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Vishad Chauhan",
    role: "Microbiology Research Lead",
    image: "/assets/manthan.png",
    bio: "Leading critical market analysis for student ventures while spearheading literature-driven polycarbonate analysis at Micrylis Biotech.",
    linkedin: "https://www.linkedin.com/in/vishad-chauhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Anshul Jangid",
    role: "Lead Systems Architect",
    image: "https://github.com/anshuljangid.png",
    bio: "Chief Technology Architect and Lead Developer. Responsible for building the entire Micrylis Biotech digital ecosystem and managing the end-to-end technology infrastructure.",
    linkedin: "https://www.linkedin.com/in/anshul-jangid-78a406256/",
  }
];

const AboutPage = () => (
  <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.8rem', marginBottom: '1.2rem', color: 'var(--primary)', fontWeight: 800 }}>About <span className="gradient-text">Micrylis</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Leading the way in sustainable laboratory innovation through precision engineering, advanced material science, and a deep-rooted commitment to the scientific community.
        </p>
      </div>

      <div className="about-grid-top" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 700 }}>Our Mission</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            At Micrylis, we bridge the gap between high-end research requirements and sustainable manufacturing. We empower researchers with precision tools that are technically superior and environmentally responsible.
          </p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '-0.3rem' }}>100%</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>Precision Driven</div>
            </div>
            <div>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '-0.3rem' }}>BIO-PP</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>Eco Innovations</div>
            </div>
          </div>
        </div>
        <div className="glass" style={{ padding: '3rem', borderRadius: '32px', background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', color: '#fff', boxShadow: '0 20px 40px rgba(30, 58, 138, 0.2)' }}>
          <Target size={48} style={{ marginBottom: '1.5rem', opacity: 0.9 }} />
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700 }}>A Global Vision</h3>
          <p style={{ opacity: 0.9, lineHeight: '1.7', fontSize: '1rem' }}>
            We envision a future where laboratories globally operate with tools as kind to the planet as they are helpful to science. India-born innovation for a global scientific community.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '3.5rem', fontWeight: 700 }}>Our Core Values</h2>
        <div className="about-grid-bottom" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {[
            { icon: <FileText size={32} />, title: "Uncompromising Quality", desc: "Adhering to ISO 9001:2015 standards, ensuring every pipette meets rigorous volumetric accuracy." },
            { icon: <Users size={32} />, title: "Scientific Partnership", desc: "We don't just sell tools; we partner with scholars to understand the evolving needs of modern wet-labs." },
            { icon: <Beaker size={32} />, title: "Circular Innovation", desc: "From Bio-PP material sourcing to recyclability, sustainability is woven into our engineering DNA." }
          ].map((item, i) => (
            <div key={i} style={{ padding: '2.5rem', borderRadius: '24px', background: 'white', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>{item.icon}</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 700 }}>{item.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const PioneersPage = () => (
  <div style={{ background: '#F8FAFC', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
    {/* Background Decorative Elements */}
    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '40%', background: 'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40%', height: '40%', background: 'radial-gradient(circle at 0% 100%, rgba(30, 58, 138, 0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container" style={{ paddingTop: '4.5rem', paddingBottom: '5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <h1 style={{ fontSize: '3.8rem', marginBottom: '1rem', color: 'var(--primary)', letterSpacing: '-0.03em', fontWeight: 800 }}>
            Meet the <span className="gradient-text">Pioneers</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Micrylis is powered by a multidisciplinary assembly of scientists, engineers, and visionaries. Our team bridges the gap between biological research and industrial-grade precision.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'white', padding: '1rem 1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.4rem' }}>14+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase' }}>Patents Pending</div>
            </div>
            <div style={{ background: 'white', padding: '1rem 1.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.4rem' }}>India</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase' }}>Birth of Innovation</div>
            </div>
          </div>
        </div>
        <div className="glass" style={{ padding: '2rem', borderRadius: '24px', position: 'relative', background: 'rgba(255,255,255,0.8)' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 700 }}>Our Research Focus</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <Zap size={16} color="var(--secondary)" /> Bio-Polymer Chemical Resilience
            </li>
            <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <Activity size={16} color="var(--secondary)" /> Volumetric Precision Standards
            </li>
            <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <Target size={16} color="var(--secondary)" /> Sustainable Lab Consumables
            </li>
          </ul>
        </div>
      </div>

      <div className="team-grid" style={{ marginTop: '0' }}>
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -10 }}
          >
            <div style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '180px',
                height: '180px',
                background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                borderRadius: '50px',
                opacity: 0.08,
                zIndex: 0,
                filter: 'blur(10px)'
              }}></div>
              <img src={member.image} alt={member.name} className="member-img" style={{ position: 'relative', zIndex: 1, marginBottom: '0', height: '180px', width: '180px' }} />
            </div>
            <h3 className="member-name" style={{ fontSize: '1.6rem', textAlign: 'center' }}>{member.name}</h3>
            <p className="member-role" style={{ textAlign: 'center', marginBottom: '1.2rem', minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem' }}>{member.role}</p>
            <p className="member-bio" style={{ fontSize: '0.9rem', textAlign: 'center' }}>{member.bio}</p>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ background: '#F1F5F9', padding: '0.6rem', borderRadius: '12px', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Linkedin size={20} />
                </a>
              </div>
              <button className="details-btn" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
                RESEARCH PROFILE <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);


function App() {
  const [page, setPage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'calculators') setPage('calculators');
      else if (hash === 'about') setPage('about');
      else if (hash === 'pioneers') setPage('pioneers');
      else setPage('home');
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="App">
      <nav className="glass" style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1100px', zIndex: 1000, padding: '0.8rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => window.location.hash = ''}>
          <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={20} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', color: 'var(--primary)' }}>MICRYLIS</span>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="/#hero" onClick={() => { setPage('home'); setIsMobileMenuOpen(false); }} style={{ color: page === 'home' ? 'var(--secondary)' : 'inherit' }}>HOME</a>
          <a href="/#solutions" onClick={() => { setPage('home'); setIsMobileMenuOpen(false); }}>SOLUTIONS</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ color: page === 'about' ? 'var(--secondary)' : 'inherit' }}>ABOUT US</a>
          <div className="dropdown">
            <a href="#calculators" style={{ color: page === 'calculators' ? 'var(--secondary)' : 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              CALCULATORS
            </a>
            <div className="dropdown-content">
              <a href="#calculators" className="dropdown-item" onClick={() => { window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'mw' })); setIsMobileMenuOpen(false); }}>
                <Beaker size={16} /> Molecular Weight
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => { window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'coverage' })); setIsMobileMenuOpen(false); }}>
                <Dna size={16} /> NGS Coverage
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => { window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'tm' })); setIsMobileMenuOpen(false); }}>
                <Dna size={16} /> Tm Calculator
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => { window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'hwe' })); setIsMobileMenuOpen(false); }}>
                <Activity size={16} /> H-W Equilibrium
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => { window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'hemo' })); setIsMobileMenuOpen(false); }}>
                <Beaker size={16} /> Hemocytometer
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => { window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'biodiversity' })); setIsMobileMenuOpen(false); }}>
                <Activity size={16} /> Biodiversity
              </a>
            </div>
          </div>
          <a href="#pioneers" onClick={() => setIsMobileMenuOpen(false)} style={{ color: page === 'pioneers' ? 'var(--secondary)' : 'inherit' }}>PIONEERS</a>
          <button
            className="btn-primary mobile-contact-btn"
            onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }}
            style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.8rem', border: 'none', cursor: 'pointer', display: 'none' }}
          >
            CONTACT US
          </button>
        </div>
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Zap size={24} />}
        </div>
        <button
          className="btn-primary desktop-contact-btn"
          onClick={() => setIsContactOpen(true)}
          style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}
        >
          CONTACT US
        </button>
      </nav>

      {page === 'calculators' ? (
        <Calculators />
      ) : page === 'about' ? (
        <AboutPage />
      ) : page === 'pioneers' ? (
        <PioneersPage />
      ) : (
        <>
          <section id="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ textAlign: 'left', margin: 0, maxWidth: 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.2em' }}>
                    <div style={{ width: '30px', height: '1px', background: 'var(--secondary)' }}></div>
                    MICRYLIS PRECISION PIPETTES
                  </div>
                  <h1 className="hero-title" style={{ color: 'var(--primary)', fontSize: '4.5rem', marginBottom: '2rem', textAlign: 'left' }}>
                    Building the Future of <br />
                    <span className="gradient-text">Precision Labware</span>
                  </h1>
                  <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 3rem 0', maxWidth: '650px', fontSize: '1.2rem' }}>
                    Developing next generation laboratory pipettes using medical-grade Bio Based Polypropylene. Precision engineering meets sustainable innovation, designed and manufactured in India.
                  </p>
                  <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '4rem' }}>
                    <button className="btn btn-primary" onClick={() => window.location.hash = 'calculators'}>
                      Try Bio-Calculators <Calculator size={18} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '0.8rem 2rem' }} onClick={() => window.location.hash = 'about'}>About Us</button>
                  </div>

                  <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                    {[
                      { label: 'Precision', value: '99.9%' },
                      { label: 'Accuracy', value: 'ISO Standard' },
                      { label: 'Eco-Impact', value: '-40% Carbon' }
                    ].map((s, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>{s.value}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                  <div className="hero-image-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
                    {/* Decorative Background Glow */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>

                    <motion.img
                      src="/model-without-bg.png"
                      alt="Micrylis Pipette Model"
                      style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.1))' }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Floating Tech Badge */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: '10%',
                        right: '-5%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        zIndex: 10
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ padding: '0.5rem', background: '#EFF6FF', borderRadius: '10px' }}>
                          <Beaker size={20} color="#3B82F6" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Composition</div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)' }}>Bio-PP Blend</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Precision Badge */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '-10%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        zIndex: 10
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ padding: '0.5rem', background: '#F0FDF4', borderRadius: '10px' }}>
                          <Target size={20} color="#10B981" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Standard</div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)' }}>ISO 9001:2015</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            <ThreeScene />
            <div className="scroll-indicator">
              <span>EXPLORE</span>
              <div className="scroll-line"></div>
            </div>
          </section>

          <section id="demo" style={{ background: '#F8FAFC', padding: '8rem 0' }}>
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
                  <div style={{ width: '40px', height: '1px', background: 'var(--secondary)' }}></div>
                  SEE IT IN ACTION
                  <div style={{ width: '40px', height: '1px', background: 'var(--secondary)' }}></div>
                </div>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                  How Our <span className="gradient-text">Model Works</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                  Discover the power and precision of our biotechnology solutions through this comprehensive demonstration
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass"
                style={{
                  maxWidth: '1000px',
                  margin: '0 auto',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '20px solid white',
                        borderTop: '12px solid transparent',
                        borderBottom: '12px solid transparent',
                        marginLeft: '5px'
                      }}></div>
                    </motion.div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 700 }}>Demo Video Coming Soon</h3>
                    <p style={{ fontSize: '1rem', opacity: 0.9 }}>Watch how our model revolutionizes biotechnology research</p>
                  </div>
                </div>
              </motion.div>

              <section id="features-highlights" style={{ padding: '6rem 0' }}>
                <div className="container">
                  <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>Engineered for <span className="gradient-text">Absolute Accuracy</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Setting new benchmarks in liquid handling technology.</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
                    {[
                      {
                        Icon: Microscope,
                        title: 'Molecular Precision',
                        desc: 'Optimized for sensitive assays with minimal mechanical friction for ultra-smooth dispensing.',
                        color: '#3B82F6',
                        tag: 'Advanced'
                      },
                      {
                        Icon: Zap,
                        title: 'Ergonomic Speed',
                        desc: 'Designed to reduce pipette fatigue while maintaining rapid cycle times in high-throughput labs.',
                        color: '#10B981',
                        tag: 'UX Focused'
                      },
                      {
                        Icon: Dna,
                        title: 'Bio-Certified',
                        desc: 'Every unit is tested for DNAse/RNAse free status, ensuring safety for critical genomic research.',
                        color: '#F59E0B',
                        tag: 'Pure'
                      }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          padding: '3rem 2rem',
                          background: 'white',
                          borderRadius: '32px',
                          border: '1px solid rgba(0,0,0,0.02)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}
                      >
                        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.65rem', fontWeight: 800, background: `${feature.color}10`, color: feature.color, padding: '0.2rem 0.6rem', borderRadius: '6px', textTransform: 'uppercase' }}>{feature.tag}</div>
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '16px',
                          background: `${feature.color}10`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '2rem'
                        }}>
                          <feature.Icon size={30} color={feature.color} />
                        </div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700 }}>{feature.title}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Redesigned Material Innovation Section */}
          <section id="solutions" style={{ padding: '8rem 0', background: '#F8FAFC', position: 'relative' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'center' }}>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                  >
                    <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '2px solid var(--secondary)', borderRadius: '32px', opacity: 0.1, zIndex: 0 }}></div>
                    <img
                      src="/pip.jpeg"
                      alt="Micrylis Innovation"
                      style={{ width: '100%', maxWidth: '450px', borderRadius: '24px', position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                    />
                  </motion.div>
                </div>
                <div>
                  <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>REVOLUTIONARY MATERIALS</div>
                  <h2 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 800, lineHeight: 1.1 }}>Precision meets <span className="gradient-text">Sustainability</span></h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                    By leveraging medical-grade Bio-PP blends, we deliver labware that maintains extreme chemical stability while reducing laboratory carbon footprints by up to 40%.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {[
                      { title: "Non-Leachable", icon: <Layers size={20} />, desc: "Zero chemical interference." },
                      { title: "Hydrophobic", icon: <Beaker size={20} />, desc: "Low-retention technology." }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--secondary)' }}>{item.icon}</div>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1rem' }}>{item.title}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Interactive CTA Section */}
          {/* Core Mission Section */}
          <section id="features" style={{ padding: '8rem 0', background: '#FFFFFF' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>OUR CORE MISSION</div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 800 }}>Defining the future of <span className="gradient-text">Labware</span></h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Micrylis Biotech is dedicated to redefining precision labware through advanced material science, precision engineering, and sustainable manufacturing.
                </p>
              </div>

              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {[
                  { icon: <Microscope size={32} />, title: "Precision Performance", desc: "Consistent volumetric accuracy and repeatability across multiple dispensing cycles." },
                  { icon: <Dna size={32} />, title: "Medical-Grade Quality", desc: "Low extractables and leachables for sensitive biological and diagnostic workflows." },
                  { icon: <Beaker size={32} />, title: "Sustainable Manufacturing", desc: "Fully recyclable components with reduced carbon footprint via localized production." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    style={{ padding: '3rem 2rem', textAlign: 'center', background: '#F8FAFC', borderRadius: '32px', border: '1px solid rgba(0,0,0,0.02)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ y: -5, background: 'white', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
                  >
                    <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{feature.icon}</div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem', color: 'var(--primary)', fontWeight: 700 }}>{feature.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* New Interactive CTA Section */}
          <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
            <div className="container">
              <motion.div
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, #172554 100%)',
                  borderRadius: '48px',
                  padding: '6rem 3rem',
                  textAlign: 'center',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 40px 100px rgba(30, 58, 138, 0.3)'
                }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 60%)' }}></div>

                <h2 style={{ fontSize: '3.8rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Ready to upgrade your lab?</h2>
                <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                  Join the forefront of biotechnology innovation. Experience the precision and sustainability of Micrylis labware.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <button className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)', padding: '1.2rem 3.5rem', fontWeight: 700, borderRadius: '14px' }} onClick={() => setIsContactOpen(true)}>GET A QUOTE</button>
                  <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '1.2rem 3.5rem', fontWeight: 700, borderRadius: '14px', backdropFilter: 'blur(10px)' }} onClick={() => window.location.hash = 'about'}>LEARN MORE</button>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <footer>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
            <div style={{ maxWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} color="white" />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', color: 'var(--primary)' }}>MICRYLIS</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                ISO 9001:2015 Certified. Bridging the gap between researchers' needs and innovative biotechnology solutions.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>SOLUTIONS</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Purification Kits</li>
                <li>NGS Sequencing</li>
                <li>PCR Master Mixes</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ cursor: 'pointer' }} onClick={() => window.location.hash = 'about'}>About Us</li>
                <li style={{ cursor: 'pointer' }} onClick={() => window.location.hash = 'pioneers'}>Our Team</li>
                <li>Certifications</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>CONNECT</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#"><Linkedin size={20} color="var(--secondary)" /></a>
                <a href="mailto:contact@micrylisbiotech.com"><Mail size={20} color="var(--secondary)" /></a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <p>© 2026 Micrylis Biotech. Precision biology, purpose built.</p>
            <p>Designed & Developed by <span style={{ color: 'var(--primary)' }}>Anshul Jangid</span></p>
          </div>
        </div>
      </footer>

      <ChatBot />

      {isContactOpen && (
        <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
          <motion.div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Get in Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
              Have questions about our precision labware? Our team of experts is here to help.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); setIsContactOpen(false); }}>
              <div className="form-group">
                <label>FULL NAME</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea rows={4} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                SEND MESSAGE
              </button>
            </form>
            <button
              onClick={() => setIsContactOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--text-muted)'
              }}
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
