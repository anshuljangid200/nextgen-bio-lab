import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Microscope, ChevronRight, Zap, Beaker, Dna, Calculator, MapPin, Layers, Activity } from 'lucide-react';
import { ThreeScene } from './components/ThreeScene';
import { Calculators } from './Calculators';
import './App.css';

const teamMembers = [
  {
    name: "Foram Mokani",
    role: "Co-Founder | MSc Biotechnology | Univ. of Bath",
    image: "/assets/logo.png",
    bio: "Pioneering research in Molecular Biology and Bioprocessing. Expertise in neurodegenerative pathways and innovative algal-based health solutions.",
    linkedin: "https://www.linkedin.com/in/foram-mokani-493831242/",
  },
  {
    name: "Karan Panchal",
    role: "Founder | Tip BioScience",
    image: "/assets/logo.png",
    bio: "Visionary leader bridging biotechnology and strategic management. Focused on FESEM imaging and advanced material science research.",
    linkedin: "#",
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
    bio: "Leading critical market analysis for student ventures while spearheading literature-driven polycarbonate analysis at NextGen BioLab.",
    linkedin: "https://www.linkedin.com/in/vishad-chauhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Anshul Jangid",
    role: "Lead Systems Architect",
    image: "https://github.com/anshuljangid.png",
    bio: "Chief Technology Architect and Lead Developer. Responsible for building the entire NextGen BioLab digital ecosystem and managing the end-to-end technology infrastructure.",
    linkedin: "https://www.linkedin.com/in/anshuljangid",
  }
];


function App() {
  const [page, setPage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'calculators') setPage('calculators');
      else setPage('home');
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="App">
      <nav className="glass" style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1100px', zIndex: 1000, padding: '0.8rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => window.location.hash = ''}>
          <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={20} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', color: 'var(--primary)' }}>NEXTGEN <span style={{ color: 'var(--secondary)' }}>BIO</span></span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', alignItems: 'center' }}>
          <a href="/#hero">HOME</a>
          <a href="/#solutions">SOLUTIONS</a>
          <div className="dropdown">
            <a href="#calculators" style={{ color: page === 'calculators' ? 'var(--secondary)' : 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              CALCULATORS
            </a>
            <div className="dropdown-content">
              <a href="#calculators" className="dropdown-item" onClick={() => window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'mw' }))}>
                <Beaker size={16} /> Molecular Weight
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'coverage' }))}>
                <Dna size={16} /> NGS Coverage
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'tm' }))}>
                <Dna size={16} /> Tm Calculator
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'hwe' }))}>
                <Activity size={16} /> H-W Equilibrium
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'hemo' }))}>
                <Beaker size={16} /> Hemocytometer
              </a>
              <a href="#calculators" className="dropdown-item" onClick={() => window.dispatchEvent(new CustomEvent('changeCalculator', { detail: 'biodiversity' }))}>
                <Activity size={16} /> Biodiversity
              </a>
            </div>
          </div>
          <a href="/#team">PIONEERS</a>
        </div>
        <button
          className="btn-primary"
          onClick={() => setIsContactOpen(true)}
          style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}
        >
          CONTACT US
        </button>
      </nav>

      {page === 'calculators' ? (
        <Calculators />
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
                    NEXTGEN BIO PIPETTES
                  </div>
                  <h1 className="hero-title" style={{ color: 'var(--primary)', fontSize: '4.5rem', marginBottom: '2rem', textAlign: 'left' }}>
                    Building the Future of <br />
                    <span className="gradient-text">Precision Labware</span>
                  </h1>
                  <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 3rem 0', maxWidth: '650px', fontSize: '1.2rem' }}>
                    Developing next-generation laboratory pipettes using medical-grade Bio-Based Polypropylene. Precision engineering meets sustainable innovation—designed and manufactured in India.
                  </p>
                  <div style={{ display: 'flex', gap: '1.2rem' }}>
                    <button className="btn btn-primary" onClick={() => window.location.hash = 'calculators'}>
                      Try Bio-Calculators <Calculator size={18} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>Consult Experts</button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                  <div className="hero-image-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <motion.img
                      src="/model-without-bg.png"
                      alt="NextGen Pipette Model"
                      style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.15))' }}
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '-10%',
                      right: '-10%',
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '20px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      zIndex: 10
                    }}>
                      <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.2rem' }}>Precision</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Engineered for Excellence</div>
                    </div>
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
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
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

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                marginTop: '4rem',
                maxWidth: '900px',
                margin: '4rem auto 0'
              }}>
                {[
                  {
                    Icon: Microscope,
                    title: 'Precision Analysis',
                    desc: 'Advanced molecular characterization',
                    color: '#3B82F6'
                  },
                  {
                    Icon: Zap,
                    title: 'Fast Results',
                    desc: 'Quick turnaround time for research',
                    color: '#10B981'
                  },
                  {
                    Icon: Dna,
                    title: 'Accurate Data',
                    desc: 'High-fidelity genomic insights',
                    color: '#F59E0B'
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="glass"
                    style={{
                      textAlign: 'center',
                      padding: '2.5rem 1.5rem',
                      background: 'white',
                      borderRadius: '16px',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      border: `2px solid ${feature.color}30`
                    }}>
                      <feature.Icon size={32} color={feature.color} strokeWidth={2} />
                    </div>
                    <h4 style={{
                      color: 'var(--primary)',
                      marginBottom: '0.8rem',
                      fontSize: '1.2rem',
                      fontWeight: 700
                    }}>{feature.title}</h4>
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="solutions" style={{ background: '#FFFFFF' }}>
            <div className="container">
              <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Advanced Material <span className="gradient-text">Innovation</span></h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                    Our pipettes are engineered using medical-grade Bio-Based Polypropylene (Bio-PP) and Polypropylene (PP) blends, combining precision engineering with sustainable material innovation for the next generation of laboratory consumables.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {[
                      { title: "Bio-Materials", icon: <Beaker size={24} />, desc: "Bio-Based Polypropylene with high chemical resistance." },
                      { title: "Precision", icon: <Zap size={24} />, desc: "Consistent volumetric accuracy and repeatability." },
                      { title: "Local Pride", icon: <MapPin size={24} />, desc: "Designed and manufactured in India." },
                      { title: "Eco-Friendly", icon: <Layers size={24} />, desc: "Fully recyclable with reduced carbon footprint." }
                    ].map((p, i) => (
                      <div key={i} className="glass" style={{
                        padding: '1.5rem',
                        background: 'white',
                        border: '1px solid rgba(0,0,0,0.03)',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.8rem',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{
                          width: '45px',
                          height: '45px',
                          background: 'rgba(59, 130, 246, 0.1)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--secondary)'
                        }}>
                          {p.icon}
                        </div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 700 }}>{p.title}</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                      padding: '8px',
                      background: 'linear-gradient(135deg, #1E3A8A, #3B82F6, #60A5FA)',
                      borderRadius: '24px',
                      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
                      maxWidth: '450px'
                    }}
                  >
                    <div style={{
                      background: 'white',
                      borderRadius: '18px',
                      padding: '1.2rem',
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)'
                    }}>
                      <motion.img
                        src="/pip.jpeg"
                        alt="SciPhi Pipette"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '12px',
                          display: 'block',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="float"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" style={{ background: '#F8FAFC' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Who <span className="gradient-text">We Are</span></h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                  NextGen Bio Pipettes is an emerging laboratory technology initiative dedicated to redefining precision labware through advanced material science, precision engineering, and sustainable manufacturing. Designed and manufactured in India for global quality standards.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {[
                  { icon: <Microscope size={32} />, title: "Precision Performance", desc: "Consistent volumetric accuracy and repeatability across multiple dispensing cycles." },
                  { icon: <Dna size={32} />, title: "Medical-Grade Quality", desc: "Low extractables and leachables for sensitive biological and diagnostic workflows." },
                  { icon: <Beaker size={32} />, title: "Sustainable Manufacturing", desc: "Fully recyclable components with reduced carbon footprint via localized production." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="glass"
                    style={{ padding: '3rem 2rem', textAlign: 'center', background: 'white' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>{feature.icon}</div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', color: 'var(--primary)' }}>{feature.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="team" style={{ background: 'white' }}>
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
                <div>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>The <span className="gradient-text">Pioneers</span></h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>A multidisciplinary team of scholars and researchers shaping the future.</p>
                </div>
                <div style={{ display: 'flex', gap: '3rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>100+</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>CLIENTS</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>ISO 9001</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>CERTIFIED</div>
                  </div>
                </div>
              </div>
              <div className="team-grid">
                {teamMembers.map((member, i) => (
                  <motion.div
                    key={i}
                    className="team-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img src={member.image} alt={member.name} className="member-img" />
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                        </a>
                        <Mail size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                      </div>
                      <button style={{ background: 'transparent', border: 'none', color: 'var(--secondary)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        DETAILS <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                <span style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', color: 'var(--primary)' }}>NEXTGEN <span style={{ color: 'var(--secondary)' }}>BIO</span></span>
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
                <li>About Us</li>
                <li>Our Team</li>
                <li>Certifications</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>CONNECT</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Linkedin size={20} color="var(--secondary)" />
                <Mail size={20} color="var(--secondary)" />
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <p>© 2026 NextGen BioLab. Precision biology, purpose built.</p>
            <p>Designed & Developed by <span style={{ color: 'var(--primary)' }}>Anshul Jangid</span></p>
          </div>
        </div>
      </footer>

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
