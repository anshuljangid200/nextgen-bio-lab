import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Microscope, ChevronRight, Zap, Beaker, Dna, Calculator, Activity, FileText, Target, Users, X, RotateCcw, Check } from 'lucide-react';
import { ThreeScene } from './components/ThreeScene';
import { Calculators } from './Calculators';
import { ChatBot } from './components/ChatBot';
import './App.css';

const teamMembers = [
  {
    name: "Karan Panchal",
    role: "Founder",
    image: "/assets/karan.png",
    bio: "Visionary leader bridging biotechnology and strategic management. Focused on FESEM imaging and advanced material science research.",
    linkedin: "#",
  },
  {
    name: "Foram Mokani",
    role: "Co-Founder",
    image: "/assets/logo.png",
    bio: "Pioneering research in Molecular Biology and Bioprocessing. Expertise in neurodegenerative pathways and innovative algal-based health solutions.",
    linkedin: "https://www.linkedin.com/in/foram-mokani-493831242/",
  },
  {
    name: "Manthan Viradiya",
    role: "Co-Founder",
    image: "/assets/logo.png",
    bio: "Architecting the intersection of Artificial Intelligence And Data Science. Certified Cyber Cadet with a mission to secure the future of biometric data.",
    linkedin: "#",
  },
  {
    name: "Samrat",
    role: "Microbiology Scholar",
    image: "/assets/samrat.png",
    bio: "Microbiology student with a focus on oncology. Summer Research Fellow at University of Tsukuba, Japan. Selected for iGEM Community Paris Desi program among top 30 students globally.",
    linkedin: "https://www.linkedin.com/in/samratpaul-biotech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sai Manogna",
    role: "Biotechnology Researcher",
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

const AboutPage = ({ activeSection = 'overview' }: { activeSection?: string }) => {

  return (
    <div style={{ background: '#F4F7FA', minHeight: '100vh' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>



        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {activeSection === 'overview' && (
              <div className="about-sections-group">
                {/* Individual Section Header */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                  <div style={{
                    padding: '0.8rem 2.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 25px rgba(30,58,138,0.2)'
                  }}>
                    Overview
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>Building a Sustainable Scientific Future Together</h2>
                    <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.15rem' }}>
                      <p style={{ marginBottom: '1.5rem' }}>
                        Micrylis was founded on the belief that scientific excellence and environmental stewardship are complementary, not competing, values. Our sustainable pipette tips prove that laboratories need not choose between research quality and planetary health. With equivalent performance, competitive pricing, and comprehensive end-of-life management, the barriers to sustainable laboratory practice are falling.
                      </p>
                      <p style={{ marginBottom: '1.5rem' }}>
                        We invite you to join us in redefining precision for a sustainable future. The transition to sustainable laboratory practices is not just an environmental imperative—it is a scientific and ethical responsibility. Every research discovery, every diagnostic test, and every quality control analysis depends on tools that should not compromise the planet we are working to understand and protect.
                      </p>

                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 800, marginTop: '2rem', marginBottom: '1rem' }}>Scientific Design & Quality</h3>
                      <p style={{ marginBottom: '1rem' }}>
                        Our pipette tips represent the intersection of analytical precision and ecological innovation. Micrylis tips are engineered to:
                      </p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li>Achieve consistent liquid handling performance with minimal coefficient of variation.</li>
                        <li>Ensure tight fit and minimal leakage across major micropipette platforms.</li>
                        <li>Maintain chemical inertness, low retention, and smooth internal geometry for accurate sample transfer.</li>
                      </ul>
                      <p style={{ marginBottom: '1.5rem' }}>
                        Traditional industry leaders emphasize stringent quality control, precision molding, and materials engineered for repeatability and clarity in pipetting tasks. Pipette consumables from global suppliers are broadly validated for compatibility with high-accuracy requirements in research and diagnostics.
                      </p>

                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 800, marginTop: '2rem', marginBottom: '1rem' }}>Manufacturing Focus</h3>
                      <p>
                        While proprietary methods remain confidential, our core ethos embraces sustainable manufacturing practices, including reduced waste generation, energy optimized processes, and minimized packaging burden.
                      </p>
                    </div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      style={{ padding: '1rem', borderRadius: '48px', background: 'white', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                    >
                      <img src="/assets/about_overview.jpg" alt="Lab Research" style={{ width: '100%', borderRadius: '40px' }} />
                    </motion.div>
                  </div>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                  <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: 'var(--primary)', marginBottom: '3rem', fontWeight: 900, letterSpacing: '-0.02em' }}>Our Core Values</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
                    {[
                      { icon: <FileText size={36} />, title: "Precision Quality", desc: "Adhering to strict global ISO standards, ensuring every pipette meets rigorous volumetric accuracy." },
                      { icon: <Users size={36} />, title: "Scientific Partnership", desc: "We partner with elite scholars to understand the evolving needs of modern high-throughput labs." },
                      { icon: <RotateCcw size={36} />, title: "Circular Innovation", desc: "From Bio-PP material sourcing to recyclability, sustainability is woven into our engineering DNA." }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        style={{ padding: '3.5rem 2.5rem', borderRadius: '40px', background: 'white', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}
                      >
                        <div style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>{item.icon}</div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.5rem', fontWeight: 800 }}>{item.title}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'sustainability' && (
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Individual Section Header */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                  <div style={{
                    padding: '0.8rem 2.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 25px rgba(30,58,138,0.2)'
                  }}>
                    Sustainability
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: 'var(--primary)', marginBottom: '2rem', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em' }}>Sustainable Lifecycle</h2>

                <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Sustainability is not a marketing message for Micrylis - it is the core of our business model and the reason we exist. We believe that the transition to a circular, carbon-neutral economy is both an environmental imperative and an economic opportunity. Our comprehensive approach addresses every aspect of the product lifecycle:
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                    <motion.img
                      src="/assets/about_sustainability.png"
                      alt="Sustainable Lifecycle"
                      style={{ maxWidth: '100%', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>a. Sustainable Sourcing</h3>
                      <p style={{ marginBottom: '1rem' }}><strong>Raw Material Selection:</strong> We exclusively use second-generation biopolymers derived from waste and residual streams. Our primary feedstock—waste cooking oil from food service operations—would otherwise be destined for disposal or low-value applications. By converting this waste into high-performance laboratory consumables, we close material loops and reduce dependence on virgin fossil fuels.</p>
                      <p><strong>Agricultural Residue Utilization:</strong> Our natural fiber reinforcement comes from rice husks and sugarcane bagasse—agricultural byproducts traditionally burned in open fields, contributing to air pollution. By incorporating these materials, we provide an economic value stream for farmers while reducing agricultural waste.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>b. Carbon-Neutral Manufacturing</h3>
                      <p style={{ marginBottom: '1rem' }}><strong>Renewable Energy:</strong> Our manufacturing facilities are powered by 100% renewable electricity sourced from wind and solar farms.</p>
                      <p><strong>Carbon Offset Programs:</strong> For unavoidable emissions (employee commuting, business travel), we invest in verified carbon offset projects including reforestation initiatives and renewable energy development in emerging economies. We prioritize projects that provide co-benefits such as biodiversity conservation and community development.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>c. Water Stewardship</h3>
                      <p style={{ marginBottom: '1rem' }}><strong>Closed-Loop Water Systems:</strong> Advanced water recycling technology allows us to recirculate 95% of process water. Cooling water is continuously filtered and reused, while wash water undergoes membrane filtration and UV treatment before reintroduction to the process.</p>
                      <p style={{ marginBottom: '1rem' }}><strong>Water Quality Monitoring:</strong> Real-time monitoring ensures that any discharge meets or exceeds local water quality standards. Annual third-party audits verify compliance with environmental regulations.</p>
                      <p><strong>Rainwater Harvesting:</strong> Facility rooftops are equipped with rainwater collection systems that capture precipitation for use in landscaping and non-process applications, reducing demand on municipal water supplies.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>d. Zero Waste Manufacturing</h3>
                      <p style={{ marginBottom: '1rem' }}><strong>Material Recovery:</strong> Production scrap (runners, rejected parts) is collected and reprocessed back into feedstock for non-critical components, achieving 98% material utilization efficiency.</p>
                      <p style={{ marginBottom: '1rem' }}><strong>Packaging Minimization:</strong> We have systematically reduced packaging materials by 85% through innovations such as biodegradable racks, reload systems, and elimination of inner plastic bags.</p>
                      <p><strong>Supplier Take-Back:</strong> We work with packaging suppliers who accept returns of excess or damaged packaging materials for recycling, ensuring nothing goes to landfill.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>e. Continuous Improvement and Transparency</h3>
                      <p style={{ marginBottom: '1rem' }}><strong>Annual Sustainability Report:</strong> We publish a comprehensive annual report documenting our environmental performance including carbon emissions, water usage, waste diversion, and progress toward sustainability goals. This report is independently verified and publicly available.</p>
                      <p style={{ marginBottom: '1rem' }}><strong>Science-Based Targets:</strong> Our emissions reduction targets are aligned with the Paris Agreement's goal of limiting global temperature rise to 1.5°C. We have committed to achieving net-zero emissions across our value chain by 2050.</p>
                      <p><strong>Stakeholder Engagement:</strong> We actively solicit feedback from customers, suppliers, employees, and environmental organizations to identify opportunities for improvement.</p>
                    </section>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'applications' && (
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Individual Section Header */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                  <div style={{
                    padding: '0.8rem 2.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 25px rgba(30,58,138,0.2)'
                  }}>
                    Applications
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em' }}>Multidisciplinary Applications</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                  Micrylis sustainable pipette tips are designed for multidisciplinary scientific applications, including but not limited to:
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                  <motion.img
                    src="/assets/home_sustainability.jpg"
                    alt="Research Applications"
                    style={{ maxWidth: '800px', width: '100%', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <section>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>a. Molecular Biology</h3>
                    <p style={{ marginBottom: '1rem' }}><strong>DNA and RNA Work:</strong> Precise transfer of nucleic acid samples is essential for applications including PCR amplification, gene cloning, sequencing library preparation, and real-time qPCR. Micrylis filter tips provide aerosol barrier protection to prevent cross-contamination while maintaining the sterility and purity required for these sensitive techniques. Our tips are certified RNase-free and DNase-free, ensuring sample integrity.</p>
                    <p><strong>Polymerase Chain Reaction (PCR):</strong> PCR requires accurate pipetting of template DNA, primers, nucleotides, and polymerase enzyme in precise ratios. Volume inaccuracies as small as 2% can significantly impact amplification efficiency. Micrylis tips maintain ±1.0% accuracy across their full volume range, ensuring reproducible PCR results. Low retention tips are particularly valuable when working with viscous master mixes.</p>
                  </section>

                  <section>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>b. Cell Culture and Cell Biology</h3>
                    <p style={{ marginBottom: '1rem' }}><strong>Mammalian Cell Culture:</strong> Sterile technique is paramount in cell culture to prevent microbial contamination. Micrylis sterile pipette tips are gamma-sterilized and individually packaged or provided in sterile racks. Wide-bore tips reduce shear stress when transferring sensitive cell lines, improving viability. Extended length tips allow access to deep culture vessels while maintaining aseptic conditions.</p>
                    <p><strong>Cell Line Authentication:</strong> Flow cytometry, immunophenotyping, and mycoplasma testing all depend on accurate cell counting and sample preparation. Precise pipetting with certified tips ensures reliable results in these quality control applications.</p>
                  </section>

                  <section>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>c. Clinical Diagnostics</h3>
                    <p style={{ marginBottom: '1rem' }}><strong>Blood Chemistry Analysis:</strong> Clinical laboratories process millions of patient samples annually. Serum and plasma assays for glucose, cholesterol, liver enzymes, and electrolytes require precise liquid handling to generate accurate diagnostic results. Micrylis tips meet medical device manufacturing standards and are compatible with clinical analyzers from major manufacturers.</p>
                    <p style={{ marginBottom: '1rem' }}><strong>Immunoassays:</strong> ELISA, chemiluminescence, and multiplex bead assays are foundation techniques in clinical diagnostics. These assays involve serial dilutions, reagent additions, and sample transfers across microplate formats. Consistent pipetting is essential for standard curve reliability and accurate quantification of antibodies, hormones, tumor markers, and infectious disease antigens.</p>
                    <p><strong>Hematology:</strong> Blood cell counting, coagulation studies, and hemoglobin electrophoresis all require accurate pipetting of whole blood, plasma, or specialized reagents. Non-pyrogenic certification prevents false-positive results in tests sensitive to endotoxin contamination.</p>
                  </section>

                  <section>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>d. Pharmaceutical Research and Development</h3>
                    <p style={{ marginBottom: '1rem' }}><strong>Formulation Development:</strong> Pharmaceutical formulation requires precise measurement of active pharmaceutical ingredients (APIs), excipients, buffers, and stabilizers. Low retention tips minimize loss of expensive compounds during serial dilution and dose preparation studies. Chemical resistance ensures compatibility with organic solvents used in drug solubilization.</p>
                  </section>

                  <section>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>e. Proper Handling and Usage Guidelines</h3>
                    <p style={{ marginBottom: '1rem' }}><strong>Water Quality Testing:</strong> Environmental monitoring laboratories analyze water samples for bacterial contamination, heavy metals, pesticides, and nutrient levels. Micrylis tips facilitate accurate preparation of standard curves and sample dilutions required for spectrophotometric and chromatographic analysis.</p>
                    <p style={{ marginBottom: '1rem' }}><strong>Soil Microbiology:</strong> Isolation and enumeration of soil bacteria, fungi, and archaea involves serial dilution plating and selective media preparation. Sterile tips prevent cross-contamination between environmental samples and control cultures.</p>
                    <p><strong>Plant Genomics:</strong> DNA extraction from plant tissues (rich in polysaccharides and phenolic compounds) and subsequent PCR analysis for GMO detection or trait mapping require precise liquid handling. Filter tips protect valuable samples from contamination during multi-step protocols.</p>
                  </section>
                </div>
              </div>
            )}

            {activeSection === 'rd' && (
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Individual Section Header */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                  <div style={{
                    padding: '0.8rem 2.5rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '100px',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 25px rgba(30,58,138,0.2)'
                  }}>
                    R&D
                  </div>
                </div>

                <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '4rem', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em' }}>R&D Workstreams</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '2.5rem' }}>Our ongoing R&D efforts focus on realizing the vision of sustainable liquid handling. Key workstreams include:</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>a. Prototype Testing</h3>
                      <p>Each tip design is rigorously tested for volume accuracy, mechanical robustness, chemical compatibility (e.g resistance to solvents), and sterilizability. We also evaluate how the biodegradable material behaves in lab workflows—ensuring that liquids don't permeate or stick in undesirable ways.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>b. Manufacturing Scale-Up</h3>
                      <p>Moving from lab-scale molding to pilot production involves building high-precision molds and process controls. We are establishing clean production facilities and planning for future automation. Quality control is a priority: in-line cameras and calibration rigs will be used to verify tip geometry and performance on every batch.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>c. Eco-Certification & Analysis</h3>
                      <p>We perform life-cycle analyses (LCA) to quantify CO₂ and waste reductions versus conventional tips. We aim to earn eco-labels (e.g. independent certifications of environmental impact) to validate our sustainability claims. This parallels how industry leaders engage in green initiatives; for instance, some have invested in closed-loop recycling and renewable-energy manufacturing, and Micrylis will pursue similar green practices.</p>
                    </section>

                    <section>
                      <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>d. Expansion and Collaboration</h3>
                      <p>We are exploring partnerships with academic labs and environmental agencies to pilot our tips in real-world studies. Plans include developing multichannel tips and integration with automated pipetting systems. In the near future we will break ground on a larger production facility, expand our team of scientists and engineers, and scale from thousands to millions of tips per month.</p>
                    </section>
                  </div>

                  <p style={{ marginTop: '3rem', fontStyle: 'italic', borderLeft: '4px solid var(--secondary)', paddingLeft: '1.5rem' }}>
                    Overall, our R&D strategy mirrors the innovation-led culture of labware incumbents but is singularly focused on sustainability. We will continually refine our products and processes, with a goal to rapidly scale up as soon as prototypes are validated.
                  </p>

                  <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <motion.img
                      src="/assets/about_rd.png"
                      alt="R&D Innovation"
                      style={{ maxWidth: '100%', borderRadius: '48px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div >
    </div >
  );
};

const PioneersPage = () => (
  <div style={{ background: '#F4F7FA', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
    {/* Background Decorative Elements */}
    <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '45%', background: 'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '45%', height: '45%', background: 'radial-gradient(circle at 0% 100%, rgba(30, 58, 138, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container" style={{ paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center', marginBottom: '6rem' }}>
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: 'var(--primary)', letterSpacing: '-0.04em', fontWeight: 900 }}
          >
            Meet the <span className="gradient-text">Pioneers</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '3rem', fontWeight: 500 }}
          >
            Micrylis is powered by a multidisciplinary collective of scientific minds, engineering leads, and biotech visionaries dedicated to industrial-grade precision.
          </motion.p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <motion.div
              whileHover={{ y: -5 }}
              style={{ background: 'white', padding: '1.5rem 2.5rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '2rem', letterSpacing: '-0.02em' }}>Novel</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>IP Protected</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              style={{ background: 'white', padding: '1.5rem 2.5rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '2rem', letterSpacing: '-0.02em' }}>Impact</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scientific First</div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ padding: '3.5rem', borderRadius: '48px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', border: '1px solid white', boxShadow: '0 25px 50px rgba(0,0,0,0.05)' }}
        >
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '2rem', fontWeight: 800 }}>Core Research Ethos</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Zap size={20} color="var(--secondary)" />, text: "Bio-Polymer Chemical Resilience" },
              { icon: <Activity size={20} color="var(--secondary)" />, text: "Volumetric Precision Standards" },
              { icon: <Target size={20} color="var(--secondary)" />, text: "Sustainable Circular Logistics" }
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '1.2rem', fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600, alignItems: 'center' }}>
                <div style={{ background: 'var(--accent)', padding: '0.6rem', borderRadius: '12px', display: 'flex' }}>{item.icon}</div>
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -15 }}
            style={{
              background: 'white',
              borderRadius: '40px',
              padding: '3rem 2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <div style={{ position: 'relative', marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '180px',
                height: '180px',
                background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
                borderRadius: '60px',
                opacity: 0.12,
                zIndex: 0,
                filter: 'blur(15px)'
              }}></div>
              <img src={member.image} alt={member.name} style={{ position: 'relative', zIndex: 1, height: '180px', width: '180px', borderRadius: '60px', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '1.8rem', textAlign: 'center', color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>{member.name}</h3>
            <p style={{ textAlign: 'center', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', minHeight: '1rem' }}>{member.role}</p>
            <p style={{ fontSize: '1rem', textAlign: 'center', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>{member.bio}</p>
            <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9' }}>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: '#F8FAFC', width: '48px', height: '48px', borderRadius: '16px', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                <Linkedin size={24} />
              </a>
              <button
                className="btn-outline"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                PROFILE <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div >
  </div >
);


function App() {
  const [page, setPage] = useState('home');
  const [aboutSection, setAboutSection] = useState('overview');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplicationsDetailOpen, setIsApplicationsDetailOpen] = useState(false);

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

  useEffect(() => {
    if (page === 'home' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure render is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [page, window.location.hash]);

  return (
    <div className="App">
      <nav className="glass" style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        padding: '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => window.location.hash = ''}>
          <div style={{
            width: '42px',
            height: '42px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(30,58,138,0.2)'
          }}>
            <Zap size={24} color="white" />
          </div>
          <span className="gradient-text" style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.04em' }}>MICRYLIS</span>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); window.location.hash = ''; setIsMobileMenuOpen(false); }} style={{ color: page === 'home' ? 'var(--secondary)' : 'inherit' }}>HOME</a>
          <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>SOLUTIONS</a>
          <div className="dropdown">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ color: page === 'about' ? 'var(--secondary)' : 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>ABOUT US</a>
            <div className="dropdown-content">
              <a href="#about" className="dropdown-item" onClick={() => { setPage('about'); setAboutSection('overview'); window.location.hash = 'about'; setIsMobileMenuOpen(false); }}>
                <Target size={16} /> Overview
              </a>
              <a href="#about" className="dropdown-item" onClick={() => { setPage('about'); setAboutSection('sustainability'); window.location.hash = 'about'; setIsMobileMenuOpen(false); }}>
                <Zap size={16} /> Sustainability
              </a>
              <a href="#about" className="dropdown-item" onClick={() => { setPage('about'); setAboutSection('applications'); window.location.hash = 'about'; setIsMobileMenuOpen(false); }}>
                <Beaker size={16} /> Applications
              </a>
              <a href="#about" className="dropdown-item" onClick={() => { setPage('about'); setAboutSection('rd'); window.location.hash = 'about'; setIsMobileMenuOpen(false); }}>
                <Activity size={16} /> R&D
              </a>
            </div>
          </div>
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
          <a href="#pioneers" onClick={() => { setIsMobileMenuOpen(false); window.location.hash = 'pioneers'; }} style={{ color: page === 'pioneers' ? 'var(--secondary)' : 'inherit' }}>PIONEERS</a>
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
          style={{ padding: '0.6rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', border: 'none', cursor: 'pointer', fontWeight: 700 }}
        >
          CONTACT US
        </button>
      </nav>

      {page === 'calculators' ? (
        <Calculators />
      ) : page === 'about' ? (
        <AboutPage activeSection={aboutSection} />
      ) : page === 'pioneers' ? (
        <PioneersPage />
      ) : (
        <>
          <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ textAlign: 'left', margin: 0, maxWidth: 'none', position: 'relative', zIndex: 10 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 800, fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}
                  >
                    Micrylis Biotech
                  </motion.div>
                  <h1 className="hero-title" style={{ color: 'var(--primary)', fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: 1, fontWeight: 900, letterSpacing: '-0.04em' }}>
                    Redefining precision for a <br />
                    <span className="gradient-text">sustainable future.</span>
                  </h1>
                  <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 2.5rem 0', maxWidth: '600px', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: '1.6', color: 'var(--text-muted)', fontWeight: 500 }}>
                    We bridge the gap between rigorous scientific performance and environmental responsibility with our next-generation laboratory consumables.
                  </p>

                  <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => { setPage('about'); window.location.hash = 'about'; }}
                      className="btn-primary"
                      style={{
                        padding: '1rem 2.2rem',
                        borderRadius: '14px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        boxShadow: '0 15px 30px rgba(30, 58, 138, 0.2)',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Explore More <ChevronRight size={18} />
                    </button>
                    <button
                      className="btn-outline"
                      onClick={() => { setPage('calculators'); window.location.hash = 'calculators'; }}
                      style={{
                        padding: '1rem 2.2rem',
                        borderRadius: '14px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        background: 'white',
                        border: '2px solid rgba(30, 58, 138, 0.1)',
                        cursor: 'pointer'
                      }}
                    >
                      Bio-Calculators <Calculator size={18} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '2rem', flexWrap: 'wrap' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary)' }}>
                        <Check size={18} />
                        <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary)' }}>Precision biology, purpose built.</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
                  style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                  <div className="hero-image-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
                    {/* Dynamic Gradient Background */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '120%',
                      height: '120%',
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(30, 58, 138, 0.05) 50%, transparent 70%)',
                      zIndex: 0,
                      borderRadius: '50%'
                    }}></div>

                    <motion.img
                      src="/model-without-bg.png"
                      alt="Micrylis Pipette Model"
                      style={{
                        width: '100%',
                        height: 'auto',
                        position: 'relative',
                        zIndex: 2,
                        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))'
                      }}
                      animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Interactive Floating Badges */}


                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      style={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '-5%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        padding: '1.2rem',
                        borderRadius: '24px',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.5)',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem'
                      }}
                    >
                      <div style={{ padding: '0.6rem', background: '#DCFCE7', borderRadius: '12px', color: '#16A34A' }}>
                        <Zap size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Performance</div>
                        <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--primary)' }}>Ultra-Smooth</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            <ThreeScene />
            <div className="scroll-indicator">
              <motion.div
                className="scroll-line"
                animate={{ height: [40, 80, 40] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          </section>

          <section id="demo" style={{ background: '#F8FAFC', padding: '5rem 0' }}>
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
                  <div style={{ width: '40px', height: '1px', background: 'var(--secondary)' }}></div>
                  SEE IT IN ACTION
                  <div style={{ width: '40px', height: '1px', background: 'var(--secondary)' }}></div>
                </div>
                <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--primary)', lineHeight: 1.1 }}>
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

              <section id="features-highlights" style={{ padding: '4rem 0' }}>
                <div className="container">
                  <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.8rem' }}>Engineered for <span className="gradient-text">Absolute Accuracy</span></h2>
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
          <section id="solutions" style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, #F8FAFC, #FFFFFF)', position: 'relative' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-30px',
                      left: '-30px',
                      width: '100%',
                      height: '100%',
                      border: '2px solid var(--secondary)',
                      borderRadius: '40px',
                      opacity: 0.1,
                      zIndex: 0
                    }}></div>
                    <img
                      src="/assets/home_sustainability_new.png"
                      alt="Micrylis Innovation"
                      style={{
                        width: '100%',
                        maxWidth: '480px',
                        borderRadius: '32px',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 40px 80px rgba(0,0,0,0.12)',
                        border: '8px solid white'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '2rem',
                      right: '-2rem',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '1.5rem',
                      borderRadius: '24px',
                      boxShadow: '0 20px 40px rgba(30, 58, 138, 0.3)',
                      zIndex: 2,
                      maxWidth: '200px'
                    }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.2rem' }}>100%</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.9, textTransform: 'uppercase' }}>Sustainable Material</div>
                    </div>
                  </motion.div>
                </div>
                <div>
                  <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Sustainability</div>
                  <h2 style={{ fontSize: 'clamp(3rem, 9vw, 5rem)', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                    Engineering a <span className="gradient-text">Greener Lab</span>
                  </h2>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 500 }}>At the core of Micrylis Biotech is an unwavering commitment to sustainability:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                        <div style={{ minWidth: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4px' }}>
                          <Zap size={14} color="var(--secondary)" />
                        </div>
                        <span>Reducing environmental impact of laboratory consumables through design and production innovation.</span>
                      </li>
                      <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                        <div style={{ minWidth: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4px' }}>
                          <Zap size={14} color="var(--secondary)" />
                        </div>
                        <span>Promoting responsible use and disposal of scientific plastics.</span>
                      </li>
                      <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                        <div style={{ minWidth: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4px' }}>
                          <Zap size={14} color="var(--secondary)" />
                        </div>
                        <span>Aligning with broader environmental goals to transition science toward more sustainable practice.</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => { setPage('about'); setAboutSection('sustainability'); window.location.hash = 'about'; }}
                    className="btn-primary"
                    style={{
                      padding: '0.8rem 2rem',
                      borderRadius: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      border: 'none'
                    }}
                  >
                    Read More <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section id="applications" style={{ padding: '5rem 0', background: '#FFFFFF' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Applications</div>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', marginBottom: '1.2rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                  Versatility Meets <span className="gradient-text">Precision</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.7, fontWeight: 500 }}>
                  Micrylis sustainable pipette tips are engineered for absolute accuracy across a wide spectrum of scientific disciplines.
                </p>
              </div>

              <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '1.5rem' }}>Micrylis sustainable pipette tips are designed for multidisciplinary scientific applications, including but not limited to:</p>

                <h3 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Biomedical Sciences</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><strong>Genomics & Proteomics:</strong> Precise handling of DNA, RNA, proteins, and reagents in PCR, qPCR, sequencing prep, and mass spectrometry workflows.</li>
                  <li><strong>Cell Biology:</strong> Transfers involving culture media, buffers, transfection reagents with minimal shear or contamination risk.</li>
                  <li><strong>Clinical Diagnostics:</strong> Reagent and sample handling for immunoassays, blood chemistry, and pathogen detection.</li>
                </ul>

                <h3 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Environmental Science & Engineering</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                  <li><strong>Water Quality Monitoring:</strong> High-throughput aliquoting for contaminant analysis.</li>
                  <li><strong>Soil & Air Matrix Studies:</strong> Reliable sampling for chemical, biological, or particulate assays.</li>
                </ul>
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                  <img src="/assets/home_sustainability.jpg" alt="Applications Overview" style={{ width: '100%', maxWidth: '700px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => { setPage('about'); setAboutSection('applications'); window.location.hash = 'about'; }}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}
                >
                  Read More <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {/* Why Micrylis Section (Moved Up) */}
          <section id="why-micrylis" style={{ padding: '10rem 0', background: '#FFFFFF' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Value Proposition</div>
                <h2 style={{ fontSize: 'clamp(3.5rem, 9vw, 5rem)', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                  WHY CHOOSE <span className="gradient-text">MICRYLIS</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 500 }}>
                  Micrylis Biotech offers compelling value for laboratories and scientific institutions.
                </p>
              </div>

              <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <h3 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Precision Meets Sustainability</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                  <li>Scientifically validated performance that aligns with stringent research standards.</li>
                  <li>Engineered to deliver accuracy, precision, and reproducibility.</li>
                  <li>Product quality designed for diverse research and diagnostic workflows.</li>
                </ul>

                <h3 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Global & Local Relevance</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                  <li>Designed for global workflows with servicing, compatibility, and scientific applicability in mind.</li>
                  <li>With special emphasis on the Indian scientific ecosystem, Micrylis offers solutions that resonate with emerging research infrastructure and sustainability priorities.</li>
                </ul>

                <h3 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Product Excellence</h3>
                <p style={{ marginBottom: '2rem' }}>
                  Comprehensive Testing: Every production lot undergoes rigorous quality control including dimensional verification, purity testing (RNase, DNase, endotoxin), and performance validation.
                </p>

                <h3 style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Environmental Advantage</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                  <li>Materials and design optimized to minimize waste through sustainable production and packaging approaches.</li>
                  <li>Supports lab sustainability initiatives and aligns with environmental stewardship.</li>
                </ul>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                  <img src="/assets/home_why_choose.jpg" alt="Why Choose Micrylis" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <button
                  onClick={() => { setPage('about'); setAboutSection('overview'); window.location.hash = 'about'; }}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}
                >
                  Read More <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {/* Research & Development Section (Moved Down) */}
          <section id="rd" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #FFFFFF, #F8FAFC)' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Research & Development</div>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', marginBottom: '1.2rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                  Pioneering <span className="gradient-text">Lab Innovation</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.7, fontWeight: 500 }}>
                  Our R&D strategy drives continuous breakthrough in product design, material science, and global quality standards.
                </p>
              </div>

              <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'center' }}>
                <p style={{ marginBottom: '2rem' }}>Our R&D strategy emphasizes continuous innovation across several key areas to ensure we remain at the forefront of sustainable laboratory technology. We focus on fine-tuning tip geometry to enhance hydrophobicity and reduce liquid retention, while simultaneously expanding compatibility across diverse pipette brands and automated liquid-handling platforms.</p>

                <p style={{ marginBottom: '2rem' }}>In the realm of material science, we are dedicated to identifying and integrating sustainable feedstocks and advanced manufacturing processes. Our team conducts comprehensive life cycle impact assessments to scientifically benchmark our products against conventional consumables, ensuring measurable environmental benefits.</p>

                <p style={{ marginBottom: '2rem' }}>We are also establishing scalable, quality-centric manufacturing protocols that adhere to international ISO frameworks. Every batch undergoes rigorous internal testing and external validation to guarantee that our high-performance standards are consistently met at every level of production.</p>

                <p style={{ marginBottom: '3rem' }}>Finally, Micrylis is committed to global scientific dialogue. We contribute to the community through peer-reviewed studies and actively participate in sustainability forums, helping to shape the future of environmentally responsible research practices worldwide.</p>

                <div style={{ marginTop: '4rem' }}>
                  <img
                    src="/assets/home_rd.jpg"
                    alt="R&D Lab Research"
                    style={{ width: '100%', maxWidth: '800px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => { setPage('about'); setAboutSection('rd'); window.location.hash = 'about'; }}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}
                >
                  Read More <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {/* Resources and Support Section */}
          <section id="resources" style={{ padding: '10rem 0', background: 'linear-gradient(to bottom, #F8FAFC, #FFFFFF)' }}>
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Resources & Support</div>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '-0.03em' }}>Comprehensive <span className="gradient-text">Expert Guidance</span></h2>
              </div>

              <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '2.5rem', fontSize: '1.15rem' }}>
                  Micrylis provides comprehensive resources to ensure customers can fully leverage our products. From detailed technical documentation to hands-on training materials, we empower scientists to achieve optimal results.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                  {[
                    { title: "Documentation", desc: "Detailed product datasheets and user manuals will be available online and in print." },
                    { title: "Training Guides", desc: "We will offer best-practice guides on pipetting technique, tip handling, and waste management - drawing on established lab standards." },
                    { title: "Quality Assurance", desc: "Customers can be confident that every lot meets the claimed specifications." },
                    { title: "Customer Support", desc: "A dedicated team will handle technical inquiries and provide troubleshooting advice." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.8rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                  <img src="/assets/home_resources.jpg" alt="Scientific Support" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '5rem 0', background: '#FFFFFF' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Core Ethos</div>
                  <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' }}>Precision Intelligence Meets <span className="gradient-text">Eco-Innovation</span></h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                    Our pipette tips represent a pivotal shift in biotechnology—where high-performance analytical tools are built with a planetary conscience.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                      <div style={{ color: 'var(--secondary)' }}><Zap size={24} /></div>
                      <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>Universal fit across all major scientific platforms</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                      <div style={{ color: 'var(--secondary)' }}><Beaker size={24} /></div>
                      <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>Chemically inert, low-retention medical grade polymers</span>
                    </div>
                  </div>
                </div>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img src="/model-without-bg.png" alt="Pipette Tip" style={{ width: '100%', maxWidth: '500px', height: 'auto', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.15))' }} />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* New Interactive CTA Section */}
          <section style={{ padding: '4rem 0 6rem', background: '#FFFFFF' }}>
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, #172554 100%)',
                  borderRadius: '60px',
                  padding: '5rem 2rem',
                  textAlign: 'center',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 50px 100px rgba(30, 58, 138, 0.25)'
                }}
              >
                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="cta-title"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'white' }}
                >
                  Ready to evolve your lab?
                </motion.h2>
                <p className="cta-subtitle" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 500 }}>
                  Join the vanguard of sustainable biotechnology. Experience the pinnacle of precision with Micrylis.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
                  <button
                    className="btn"
                    style={{
                      background: 'white',
                      color: 'var(--primary)',
                      padding: '1.2rem 4rem',
                      fontWeight: 800,
                      borderRadius: '16px',
                      fontSize: '1.1rem',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                    }}
                    onClick={() => setIsContactOpen(true)}
                  >
                    GET A QUOTE
                  </button>
                  <button
                    className="btn"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: '2px solid rgba(255,255,255,0.3)',
                      padding: '1.2rem 4rem',
                      fontWeight: 800,
                      borderRadius: '16px',
                      fontSize: '1.1rem',
                      backdropFilter: 'blur(10px)'
                    }}
                    onClick={() => { setPage('about'); setAboutSection('overview'); window.location.hash = 'about'; }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <footer>
        <div className="container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div style={{ maxWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} color="white" />
                </div>
                <span style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em', color: 'var(--primary)' }}>MICRYLIS BIOTECH</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                IIT Gandhinagar Research Park,<br />
                Palaj, Gandhinagar, Gujarat 382355<br />
                India
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>SOLUTIONS</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Our Product</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem' }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ cursor: 'pointer' }} onClick={() => { setPage('about'); setAboutSection('overview'); window.location.hash = 'about'; }}>About Us</li>
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
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', gap: '1.5rem', flexWrap: 'wrap' }}>
            <p>© 2026 Micrylis Biotech. Precision biology, purpose built.</p>
            <p>Designed & Developed by <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Anshul Jangid</span></p>
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

      {isApplicationsDetailOpen && (
        <div className="modal-overlay" onClick={() => setIsApplicationsDetailOpen(false)}>
          <motion.div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', padding: '4rem' }}
          >
            <h2 style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 900 }}>Research Applications & Usage</h2>

            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <section>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Dna /> Molecular Biology</h3>
                <p style={{ marginBottom: '1rem' }}><strong>DNA and RNA Work:</strong> Precise transfer of nucleic acid samples is essential for applications including PCR amplification, gene cloning, sequencing library preparation, and real-time qPCR. Micrylis filter tips provide aerosol barrier protection to prevent cross-contamination while maintaining the sterility and purity required for these sensitive techniques. Our tips are certified RNase-free and DNase-free, ensuring sample integrity.</p>
                <p><strong>Polymerase Chain Reaction (PCR):</strong> PCR requires accurate pipetting of template DNA, primers, nucleotides, and polymerase enzyme in precise ratios. Volume inaccuracies as small as 2% can significantly impact amplification efficiency. Micrylis tips maintain ±1.0% accuracy across their full volume range, ensuring reproducible PCR results. Low retention tips are particularly valuable when working with viscous master mixes.</p>
              </section>

              <section>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity /> Cell Culture and Cell Biology</h3>
                <p style={{ marginBottom: '1rem' }}><strong>Mammalian Cell Culture:</strong> Sterile technique is paramount in cell culture to prevent microbial contamination. Micrylis sterile pipette tips are gamma-sterilized and individually packaged or provided in sterile racks. Wide-bore tips reduce shear stress when transferring sensitive cell lines, improving viability. Extended length tips allow access to deep culture vessels while maintaining aseptic conditions.</p>
                <p><strong>Cell Line Authentication:</strong> Flow cytometry, immunophenotyping, and mycoplasma testing all depend on accurate cell counting and sample preparation. Precise pipetting with certified tips ensures reliable results in these quality control applications.</p>
              </section>

              <section>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Beaker /> Clinical Diagnostics</h3>
                <p style={{ marginBottom: '1rem' }}><strong>Blood Chemistry Analysis:</strong> Clinical laboratories process millions of patient samples annually. Serum and plasma assays for glucose, cholesterol, liver enzymes, and electrolytes require precise liquid handling to generate accurate diagnostic results. Micrylis tips meet medical device manufacturing standards and are compatible with clinical analyzers from major manufacturers.</p>
                <p style={{ marginBottom: '1rem' }}><strong>Immunoassays:</strong> ELISA, chemiluminescence, and multiplex bead assays are foundation techniques in clinical diagnostics. These assays involve serial dilutions, reagent additions, and sample transfers across microplate formats. Consistent pipetting is essential for standard curve reliability and accurate quantification of antibodies, hormones, tumor markers, and infectious disease antigens.</p>
                <p><strong>Hematology:</strong> Blood cell counting, coagulation studies, and hemoglobin electrophoresis all require accurate pipetting of whole blood, plasma, or specialized reagents. Non-pyrogenic certification prevents false-positive results in tests sensitive to endotoxin contamination.</p>
              </section>

              <section>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText /> Pharmaceutical Research and Development</h3>
                <p style={{ marginBottom: '1rem' }}><strong>Formulation Development:</strong> Pharmaceutical formulation requires precise measurement of active pharmaceutical ingredients (APIs), excipients, buffers, and stabilizers. Low retention tips minimize loss of expensive compounds during serial dilution and dose preparation studies. Chemical resistance ensures compatibility with organic solvents used in drug solubilization.</p>
              </section>

              <section>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target /> Proper Handling and Usage Guidelines</h3>
                <p style={{ marginBottom: '1rem' }}><strong>Water Quality Testing:</strong> Environmental monitoring laboratories analyze water samples for bacterial contamination, heavy metals, pesticides, and nutrient levels. Micrylis tips facilitate accurate preparation of standard curves and sample dilutions required for spectrophotometric and chromatographic analysis.</p>
                <p style={{ marginBottom: '1rem' }}><strong>Soil Microbiology:</strong> Isolation and enumeration of soil bacteria, fungi, and archaea involves serial dilution plating and selective media preparation. Sterile tips prevent cross-contamination between environmental samples and control cultures.</p>
                <p><strong>Plant Genomics:</strong> DNA extraction from plant tissues (rich in polysaccharides and phenolic compounds) and subsequent PCR analysis for GMO detection or trait mapping require precise liquid handling. Filter tips protect valuable samples from contamination during multi-step protocols.</p>
              </section>
            </div>

            <button
              onClick={() => setIsApplicationsDetailOpen(false)}
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
