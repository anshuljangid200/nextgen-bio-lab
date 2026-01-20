import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Microscope, ChevronRight, Zap, Beaker, FlaskConical, Dna, Calculator } from 'lucide-react';
import { ThreeScene } from './components/ThreeScene';
import { Calculators } from './Calculators';
import './App.css';

const teamMembers = [
  {
    name: "Foram Mokani",
    role: "MSc Biotechnology | Univ. of Bath",
    image: "/assets/logo.png",
    bio: "Pioneering research in Molecular Biology and Bioprocessing. Expertise in neurodegenerative pathways and innovative algal-based health solutions.",
  },
  {
    name: "Karan Panchal",
    role: "Founder | Tip BioScience",
    image: "/assets/logo.png",
    bio: "Visionary leader bridging biotechnology and strategic management. Focused on FESEM imaging and advanced material science research.",
  },
  {
    name: "Manthan Viradiya",
    role: "Co-Founder | AI & Cybersecurity",
    image: "/assets/manthan.png",
    bio: "Architecting the intersection of AI and data security. Certified Cyber Cadet with a mission to secure the future of biometric data.",
  },
  {
    name: "Samrat",
    role: "Microbiology Scholar | AACR & ASCO",
    image: "/assets/samrat.png",
    bio: "Microbiology student with a focus on oncology. Summer Research Fellow at University of Tsukuba, Japan. Selected for iGEM Community Paris Desi program among top 30 students globally.",
  },
  {
    name: "NextGen Researcher",
    role: "Biotechnology | NIT Warangal",
    image: "/assets/nit_student.png",
    bio: "Biotechnology undergraduate at NIT Warangal specializing in wet-lab research, biochemistry, and cancer biology. Actively exploring CRISPR technology and Drug Discovery.",
  },
  {
    name: "Sai Shresta AG",
    role: "Computational Bio Specialist",
    image: "/assets/sai.png",
    bio: "Unlocking the secrets of genomics through advanced bioinformatics. IEEE EMBS member recognized for excellence in computational research.",
  },
  {
    name: "Vishad Chauhan",
    role: "Microbiology Research Lead",
    image: "/assets/logo.png",
    bio: "Leading critical market analysis for student ventures while spearheading literature-driven polycarbonate analysis at NextGen BioLab.",
  },
  {
    name: "Anshul Jangid",
    role: "Lead Systems Architect",
    image: "https://github.com/anshuljangid.png",
    bio: "Digital strategist responsible for the NextGen BioLab digital infrastructure. Crafting immersive experiences with cutting-edge web technologies.",
  }
];

const products = [
  { title: "Purification Kits", desc: "Premium DNA, RNA, and Plasmid purification solutions for high-yield research." },
  { title: "PCR Master Mixes", desc: "Optimized mixes for high-fidelity PCR and qPCR applications." },
  { title: "DNA Ladders", desc: "Precision ladders range from 50bp to 1kb for accurate molecular characterization." },
  { title: "NGS Services", desc: "Whole Genome, Exome, and Transcriptome sequencing with advanced data analysis." }
];

function App() {
  const [page, setPage] = useState('home');

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
        <div style={{ display: 'flex', gap: '2rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>
          <a href="/#hero">HOME</a>
          <a href="/#solutions">SOLUTIONS</a>
          <a href="#calculators" style={{ color: page === 'calculators' ? 'var(--secondary)' : 'inherit' }}>CALCULATORS</a>
          <a href="/#team">PIONEERS</a>
        </div>
        <button className="btn-primary" style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}>
          CONTACT US
        </button>
      </nav>

      {page === 'calculators' ? (
        <Calculators />
      ) : (
        <>
          <section id="hero">
            <div className="container" style={{ position: 'relative', zIndex: 20 }}>
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
                  <div style={{ width: '40px', height: '1px', background: 'var(--secondary)' }}></div>
                  PRECISION BIOTECH SOLUTIONS
                </div>
                <h1 className="hero-title" style={{ color: 'var(--primary)' }}>
                  Engineering <br />
                  <span className="gradient-text">Life's Blueprint.</span>
                </h1>
                <p className="hero-subtitle">
                  NextGen BioLab bridges the gap between researchers' needs and innovative biotechnology solutions. High-quality products, purpose built.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <button className="btn btn-primary" onClick={() => window.location.hash = 'calculators'}>
                    Try Bio-Calculators <Calculator size={18} />
                  </button>
                  <button className="btn btn-outline">Consult Experts</button>
                </div>
              </motion.div>
            </div>
            <ThreeScene />
            <div className="scroll-indicator">
              <span>SCROLL</span>
              <div className="scroll-line"></div>
            </div>
          </section>

          <section id="solutions" style={{ background: '#FFFFFF' }}>
            <div className="container">
              <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Innovative <span className="gradient-text">SciPhi™</span> Brand</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                    Our proprietary brand meets international standards, providing researchers with reliable instruments and purification kits for molecular genetics and beyond.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {products.map((p, i) => (
                      <div key={i} className="glass" style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary)', background: '#F8FAFC' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{p.title}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div style={{ width: '100%', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FlaskConical size={120} color="var(--secondary)" className="float" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" style={{ background: '#F8FAFC' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Bridging the <span className="gradient-text">Innovation Gap</span></h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                  Empowering IITs, AIIMS, and global research institutions with advanced molecular characterization and genomic characterization services.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {[
                  { icon: <Microscope size={32} />, title: "Molecular Genetics", desc: "Expertise in characterization of viruses and genomic pathways." },
                  { icon: <Dna size={32} />, title: "NGS Excellence", desc: "High-throughput sequencing including Whole Exome and Transcriptome." },
                  { icon: <Beaker size={32} />, title: "SciPhi™ Training", desc: "Workshops in Bioinformatics, Cell Culture, and Molecular Docking." }
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
                        <Linkedin size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
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
    </div>
  );
}

export default App;
