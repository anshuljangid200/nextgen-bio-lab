import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, Dna, Activity, RotateCcw, Terminal, Target, Waves, Microscope, Users } from 'lucide-react';

const atomicWeights: Record<string, number> = {
    'H': 1.008, 'He': 4.0026, 'Li': 6.94, 'Be': 9.0122, 'B': 10.81, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998, 'Ne': 20.180,
    'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085, 'P': 30.974, 'S': 32.06, 'Cl': 35.45, 'Ar': 39.948, 'K': 39.098, 'Ca': 40.078
};

export const Calculators = () => {
    const [activeTab, setActiveTab] = useState<'mw' | 'coverage' | 'age' | 'hwe' | 'carrier' | 'hemo' | 'tm' | 'biodiversity'>('mw');

    React.useEffect(() => {
        const handleChange = (e: any) => { if (e.detail) setActiveTab(e.detail); };
        window.addEventListener('changeCalculator', handleChange);
        return () => window.removeEventListener('changeCalculator', handleChange);
    }, []);

    // Helper for numeric inputs to allow empty state during typing
    const handleNumInput = (val: string, setter: (v: any) => void) => {
        if (val === '') setter('');
        else setter(Number(val));
    };

    // MW
    const [formula, setFormula] = useState('');
    const [mwResult, setMwResult] = useState<number | null>(null);
    const calculateMW = () => {
        try {
            let total = 0; const regex = /([A-Z][a-z]*)(\d*)/g; let match;
            while ((match = regex.exec(formula)) !== null) {
                const element = match[1]; const count = parseInt(match[2] || '1');
                if (atomicWeights[element]) total += atomicWeights[element] * count;
                else throw new Error();
            }
            setMwResult(total);
        } catch { alert("Invalid Formula. Use standard notation like H2O."); }
    };

    // Coverage
    const [readLength, setReadLength] = useState<number | string>(150);
    const [numReads, setNumReads] = useState<number | string>(100);
    const [genomeSize, setGenomeSize] = useState<number | string>(3000);
    const [coverageResult, setCoverageResult] = useState<number | null>(null);
    const calculateCoverage = () => {
        const rl = Number(readLength);
        const nr = Number(numReads);
        const gs = Number(genomeSize);
        if (gs === 0) return;
        setCoverageResult((rl * nr) / gs);
    };

    // BioAge
    const [age, setAge] = useState<number | string>(25);
    const [lifestyle, setLifestyle] = useState({ exercise: 5, sleep: 7, stress: 5 });
    const [bioAgeResult, setBioAgeResult] = useState<number | null>(null);
    const calculateBioAge = () => {
        let adj = 0;
        if (lifestyle.exercise > 7) adj -= 2;
        if (lifestyle.sleep < 6) adj += 3;
        if (lifestyle.stress > 7) adj += 2;
        setBioAgeResult(Number(age) + adj);
    };

    // HWE
    const [hweObserved, setHweObserved] = useState<Record<string, number | string>>({ AA: 100, Aa: 200, aa: 100 });
    const [hweResult, setHweResult] = useState<{ p: number, q: number, chi: number, pValue: string } | null>(null);
    const calculateHWE = () => {
        const aa_val = Number(hweObserved.AA);
        const Aa_val = Number(hweObserved.Aa);
        const aaa_val = Number(hweObserved.aa);
        const total = aa_val + Aa_val + aaa_val;
        if (total === 0) return;
        const p = (2 * aa_val + Aa_val) / (2 * total);
        const q = 1 - p;
        const expAA = (p * p) * total;
        const expAa = (2 * p * q) * total;
        const expaa = (q * q) * total;
        const chi = Math.pow(aa_val - expAA, 2) / expAA + Math.pow(Aa_val - expAa, 2) / expAa + Math.pow(aaa_val - expaa, 2) / expaa;
        setHweResult({ p, q, chi, pValue: chi > 3.841 ? "Significant (p < 0.05)" : "Stable (p > 0.05)" });
    };

    // Carrier
    const [diseaseFreq, setDiseaseFreq] = useState<number | string>(0.0001);
    const [carrierResult, setCarrierResult] = useState<{ carrierFreq: number, q: number } | null>(null);
    const calculateCarrier = () => {
        const df = Number(diseaseFreq);
        const q = Math.sqrt(df);
        const p = 1 - q;
        setCarrierResult({ carrierFreq: 2 * p * q, q });
    };

    // Hemo
    const [hemoCounts, setHemoCounts] = useState<(number | string)[]>([120, 140, 130, 110]);
    const [dilution, setDilution] = useState<number | string>(1);
    const [hemoResult, setHemoResult] = useState<number | null>(null);
    const calculateHemo = () => {
        const counts = hemoCounts.map(Number);
        const dil = Number(dilution);
        setHemoResult((counts.reduce((a, b) => a + b) / 4) * dil * 10000);
    };

    // Tm
    const [sequence, setSequence] = useState('');
    const [tmResult, setTmResult] = useState<number | null>(null);
    const calculateTm = () => {
        const seq = sequence.toUpperCase();
        if (!/^[ATGC]+$/.test(seq)) return alert("Invalid sequence.");
        if (seq.length < 14) {
            const counts = { A: 0, T: 0, G: 0, C: 0 };
            for (let char of seq) counts[char as keyof typeof counts]++;
            setTmResult(2 * (counts.A + counts.T) + 4 * (counts.G + counts.C));
        } else {
            const gc = (seq.match(/[GC]/g) || []).length;
            setTmResult(64.9 + 41 * (gc - 16.4) / seq.length);
        }
    };

    // BioDiv
    const [speciesCounts, setSpeciesCounts] = useState<string>('12, 24, 8, 45');
    const [bioResults, setBioResults] = useState<{ shannon: number, simpson: number } | null>(null);
    const calculateBiodiversity = () => {
        const counts = speciesCounts.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const total = counts.reduce((a, b) => a + b, 0);
        if (total === 0) return;
        let sh = 0, si = 0;
        counts.forEach(n => {
            const pi = n / total;
            if (pi > 0) sh -= pi * Math.log(pi);
            si += (n * (n - 1)) / (total * (total - 1));
        });
        setBioResults({ shannon: sh, simpson: 1 - si });
    };

    const tabConfig = [
        { id: 'mw', label: 'Molecular Weight', icon: <Beaker size={18} />, desc: 'Molar mass analysis' },
        { id: 'coverage', label: 'NGS Coverage', icon: <Dna size={18} />, desc: 'Lander-Waterman stats' },
        { id: 'age', label: 'Bio-Age', icon: <Activity size={18} />, desc: 'Longevity assessment' },
        { id: 'hwe', label: 'H-W Equilibrium', icon: <Target size={18} />, desc: 'Genotype stability' },
        { id: 'carrier', label: 'Carrier Freq', icon: <Users size={18} />, desc: 'Heterozygote prediction' },
        { id: 'hemo', label: 'Hemocytometer', icon: <Microscope size={18} />, desc: 'Cell concentration' },
        { id: 'tm', label: 'Primer Tm', icon: <Terminal size={18} />, desc: 'Melting temp prediction' },
        { id: 'biodiversity', label: 'Bio-Diversity', icon: <Waves size={18} />, desc: 'Shannon & Simpson' },
    ];

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            {/* Background Atmosphere */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '500px', background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

            <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#Dbeafe', color: '#1E40AF', padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <Terminal size={14} /> Analytical Laboratory Portal
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                        Precision <span className="gradient-text">Bio-Calculators</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.2vw, 1.1rem)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.7' }}>
                        High-performance computational tools engineered for genomic research, protein chemistry, and metabolic assessment.
                    </p>

                    {/* Horizontal Pill Navigation - NEW LAYOUT */}
                    <div className="nav-pills-container">
                        {tabConfig.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    padding: '0.8rem 1.4rem',
                                    borderRadius: '20px',
                                    border: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    background: activeTab === tab.id ? 'var(--primary)' : 'white',
                                    color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                                    boxShadow: activeTab === tab.id ? '0 10px 20px rgba(30, 58, 138, 0.2)' : '0 2px 5px rgba(0,0,0,0.02)',
                                }}
                                className={activeTab === tab.id ? '' : 'pill-hover'}
                            >
                                <span style={{ color: activeTab === tab.id ? 'white' : 'var(--secondary)' }}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Main Workspace Workspace */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="calculator-card"
                        >
                            {/* Module Header Inside Card */}
                            <div className="module-header">
                                <div className="module-title-group">
                                    <h2 className="module-title">
                                        {tabConfig.find(t => t.id === activeTab)?.label}
                                    </h2>
                                    <div className="module-desc">
                                        <div className="status-dot"></div>
                                        {tabConfig.find(t => t.id === activeTab)?.desc}
                                    </div>
                                </div>
                                <div className="module-icon-box">
                                    {tabConfig.find(t => t.id === activeTab)?.icon}
                                </div>
                            </div>

                            {/* Forms Rendering */}
                            <div style={{ minHeight: '350px' }}>
                                {activeTab === 'mw' && (
                                    <div>
                                        <div className="input-group-modern" style={{ marginBottom: '2.5rem' }}>
                                            <label>Enter Chemical Formula</label>
                                            <div className="formula-input-wrapper">
                                                <input type="text" placeholder="e.g. C6H12O6" value={formula} onChange={(e) => setFormula(e.target.value)} />
                                                <button className="btn btn-primary" onClick={calculateMW}>Run Algorithm</button>
                                            </div>
                                        </div>
                                        {mwResult !== null && (
                                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="result-card">
                                                <div className="result-label">ESTIMATED MOLAR MASS</div>
                                                <div className="result-value">{mwResult.toFixed(4)} <span>g/mol</span></div>
                                            </motion.div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'coverage' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="grid-responsive-2">
                                            <div className="input-group-modern"><label>Read Length (bp)</label><input type="number" value={readLength} onChange={e => handleNumInput(e.target.value, setReadLength)} /></div>
                                            <div className="input-group-modern"><label>Read Count (M)</label><input type="number" value={numReads} onChange={e => handleNumInput(e.target.value, setNumReads)} /></div>
                                        </div>
                                        <div className="input-group-modern"><label>Target Genome Size (Mb)</label><input type="number" value={genomeSize} onChange={e => handleNumInput(e.target.value, setGenomeSize)} /></div>
                                        <button className="btn btn-primary" onClick={calculateCoverage} style={{ padding: '1.2rem' }}>Compute Depth Statistics</button>
                                        {coverageResult !== null && (
                                            <div className="result-card success"><div className="result-label">EFFECTIVE COVERAGE</div><div className="result-value">{coverageResult.toFixed(2)} <span>X</span></div></div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'hwe' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="grid-responsive-3">
                                            <div className="input-group-modern"><label>AA (Dom)</label><input type="number" value={hweObserved.AA} onChange={e => handleNumInput(e.target.value, (v) => setHweObserved({ ...hweObserved, AA: v }))} /></div>
                                            <div className="input-group-modern"><label>Aa (Het)</label><input type="number" value={hweObserved.Aa} onChange={e => handleNumInput(e.target.value, (v) => setHweObserved({ ...hweObserved, Aa: v }))} /></div>
                                            <div className="input-group-modern"><label>aa (Rec)</label><input type="number" value={hweObserved.aa} onChange={e => handleNumInput(e.target.value, (v) => setHweObserved({ ...hweObserved, aa: v }))} /></div>
                                        </div>
                                        <button className="btn btn-primary" onClick={calculateHWE} style={{ padding: '1.2rem' }}>Run Population Analysis</button>
                                        {hweResult && (
                                            <div className="result-card">
                                                <div className="grid-responsive-2" style={{ gap: '2rem' }}>
                                                    <div className="metric-box">
                                                        <div className="result-label">ALLELE FREQUENCY P</div>
                                                        <div className="metric-value">{hweResult.p.toFixed(4)}</div>
                                                    </div>
                                                    <div className="metric-box">
                                                        <div className="result-label">ALLELE FREQUENCY Q</div>
                                                        <div className="metric-value">{hweResult.q.toFixed(4)}</div>
                                                    </div>
                                                </div>
                                                <div className="hwe-status">{hweResult.pValue}</div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'hemo' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="grid-responsive-2">
                                            {hemoCounts.map((c, i) => (
                                                <div key={i} className="input-group-modern"><label>Quadrant {i + 1}</label><input type="number" value={c} onChange={e => handleNumInput(e.target.value, (v) => { const n = [...hemoCounts]; n[i] = v; setHemoCounts(n); })} /></div>
                                            ))}
                                        </div>
                                        <div className="input-group-modern"><label>Dilution Factor</label><input type="number" value={dilution} onChange={e => handleNumInput(e.target.value, setDilution)} /></div>
                                        <button className="btn btn-primary" onClick={calculateHemo} style={{ padding: '1.2rem' }}>Assess Concentration</button>
                                        {hemoResult !== null && (
                                            <div className="result-card"><div className="result-label">CELL CONCENTRATION</div><div className="result-value">{hemoResult.toExponential(2)} <span>cells/mL</span></div></div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'tm' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="input-group-modern"><label>Oligo Sequence (A, T, G, C)</label><textarea value={sequence} onChange={e => setSequence(e.target.value)} style={{ minHeight: '150px', fontFamily: 'monospace', letterSpacing: '0.1em', fontSize: '1.2rem' }} placeholder="GATTACA..." /></div>
                                        <button className="btn btn-primary" onClick={calculateTm} style={{ padding: '1.2rem' }}>Execute Thermodynamic Prediction</button>
                                        {tmResult !== null && (
                                            <div className="result-card"><div className="result-label">MELTING TEMPERATURE (Tₘ)</div><div className="result-value">{tmResult.toFixed(1)} <span>°C</span></div></div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'carrier' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="input-group-modern"><label>Disease Incidence Frequency (q²)</label><input type="number" value={diseaseFreq} onChange={e => handleNumInput(e.target.value, setDiseaseFreq)} step="0.0001" /></div>
                                        <button className="btn btn-primary" onClick={calculateCarrier} style={{ padding: '1.2rem' }}>Predict Heterozygosity</button>
                                        {carrierResult && (
                                            <div className="result-card">
                                                <div className="result-label">CARRIER FREQUENCY</div>
                                                <div className="result-value">{(carrierResult.carrierFreq * 100).toFixed(2)}%</div>
                                                <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem' }}>Approximately **1 in {Math.round(1 / carrierResult.carrierFreq)}** individuals carry the allele.</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'biodiversity' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="input-group-modern"><label>Individual Species Counts (e.g. 10, 20, 5)</label><input type="text" value={speciesCounts} onChange={e => setSpeciesCounts(e.target.value)} /></div>
                                        <button className="btn btn-primary" onClick={calculateBiodiversity} style={{ padding: '1.2rem' }}>Analyze Ecological Diversity</button>
                                        {bioResults && (
                                            <div className="result-card">
                                                <div className="grid-responsive-2" style={{ gap: '2rem' }}>
                                                    <div className="metric-box">
                                                        <div className="result-label">SHANNON (H)</div>
                                                        <div className="metric-value">{bioResults.shannon.toFixed(3)}</div>
                                                    </div>
                                                    <div className="metric-box">
                                                        <div className="result-label">SIMPSON (1-D)</div>
                                                        <div className="metric-value">{bioResults.simpson.toFixed(3)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'age' && (
                                    <div style={{ display: 'grid', gap: '2.5rem' }}>
                                        <div className="input-group-modern"><label>Numerical Chronological Age</label><input type="number" value={age} onChange={e => handleNumInput(e.target.value, setAge)} /></div>
                                        <div className="input-group-modern"><label>Exercise Commitment ({lifestyle.exercise} hours/week)</label><input type="range" min="0" max="15" value={lifestyle.exercise} onChange={e => setLifestyle({ ...lifestyle, exercise: Number(e.target.value) })} style={{ accentColor: 'var(--secondary)' }} /></div>
                                        <button className="btn btn-primary" onClick={calculateBioAge} style={{ padding: '1.2rem' }}>Assess Biological Longevity</button>
                                        {bioAgeResult !== null && (
                                            <div className={`result-card ${bioAgeResult <= Number(age) ? 'success' : 'warning'}`} style={{ background: bioAgeResult <= Number(age) ? '#F0FDF4' : '#FEF2F2' }}>
                                                <div className="result-label">FINAL BIOLOGICAL AGE</div>
                                                <div className="result-value" style={{ color: bioAgeResult <= Number(age) ? '#166534' : '#991B1B' }}>{bioAgeResult} <span>Years</span></div>
                                                <p style={{ marginTop: '1rem', fontWeight: 600, color: bioAgeResult <= Number(age) ? '#15803D' : '#B91C1C' }}>{bioAgeResult <= Number(age) ? "Superior biological recovery detected." : "Oxidative stress flags identified."}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Navigation */}
                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <button onClick={() => window.location.hash = ''} className="btn-modern-back" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem', borderRadius: '50px', background: 'white', color: 'var(--primary)', fontWeight: 800, border: '1px solid #E2E8F0', cursor: 'pointer', transition: 'all 0.3s' }}>
                        <RotateCcw size={18} /> Return to Research Portal
                    </button>
                </div>
            </div>

            <style>{`
                .nav-pills-container {
                    display: flex;
                    gap: 0.8rem;
                    justify-content: flex-start;
                    flex-wrap: nowrap;
                    overflow-x: auto;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(10px);
                    border-radius: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
                }
                .nav-pills-container::-webkit-scrollbar { display: none; }
                
                .nav-pills-container button {
                    flex-shrink: 0;
                    white-space: nowrap;
                }

                @media (min-width: 1024px) {
                    .nav-pills-container { justify-content: center; flex-wrap: wrap; }
                }

                .pill-hover:hover { background: #F1F5F9 !important; transform: translateY(-2px); }
                
                .calculator-card {
                    padding: 4rem 3.5rem;
                    border-radius: 40px;
                    background: white;
                    position: relative;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.01);
                }

                .module-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 3.5rem;
                    border-bottom: 1px solid #F1F5F9;
                    padding-bottom: 2rem;
                    gap: 1.5rem;
                }

                .module-title {
                    font-size: clamp(1.8rem, 4vw, 2.4rem);
                    fontWeight: 800;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.02em;
                }

                .module-desc {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-muted);
                    font-size: clamp(0.9rem, 1.1vw, 1rem);
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--secondary);
                    flex-shrink: 0;
                }

                .module-icon-box {
                    width: clamp(50px, 8vw, 70px);
                    height: clamp(50px, 8vw, 70px);
                    border-radius: 20px;
                    background: #EFF6FF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    box-shadow: inset 0 2px 10px rgba(59, 130, 246, 0.1);
                    flex-shrink: 0;
                }

                .formula-input-wrapper {
                    display: flex;
                    gap: 1rem;
                }

                .formula-input-wrapper input { flex: 1; }

                .grid-responsive-2 {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2.5rem;
                }

                .grid-responsive-3 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }

                .metric-box {
                    text-align: center;
                }

                .metric-value {
                    font-size: clamp(1.8rem, 3vw, 2.2rem);
                    font-weight: 900;
                    color: var(--primary);
                }

                .hwe-status {
                    marginTop: 2rem;
                    padding: 1rem;
                    background: #F1F5F9;
                    border-radius: 12px;
                    color: var(--secondary);
                    fontWeight: 800;
                    fontSize: 1rem;
                }

                @media (max-width: 768px) {
                    .calculator-card { padding: 2rem 1.5rem; }
                    .module-header { flex-direction: column; align-items: flex-start; text-align: left; }
                    .module-icon-box { order: -1; }
                    .formula-input-wrapper { flex-direction: column; }
                    .formula-input-wrapper button { padding: 1.2rem; }
                    .grid-responsive-2, .grid-responsive-3 { grid-template-columns: 1fr; gap: 1.5rem; }
                    .result-value { font-size: clamp(3rem, 10vw, 4.5rem); }
                }

                .input-group-modern { display: flex; flex-direction: column; gap: 0.8rem; }
                .input-group-modern label { font-size: 0.85rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.05em; }
                .input-group-modern input, .input-group-modern textarea { padding: 1.2rem; border-radius: 16px; border: 2px solid #F1F5F9; font-size: 1rem; outline: none; transition: all 0.2s; background: #F8FAFC; width: 100%; }
                .input-group-modern input:focus, .input-group-modern textarea:focus { border-color: var(--secondary); background: white; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.05); }
                .result-card { padding: 3rem 2.5rem; background: #F8FAFC; border-radius: 32px; border: 1px solid #E2E8F0; text-align: center; margin-top: 3.5rem; }
                .result-label { font-size: 0.85rem; font-weight: 800; color: var(--text-muted); margin-bottom: 1.2rem; letter-spacing: 0.1em; }
                .result-value { font-size: 4.5rem; font-weight: 900; color: var(--primary); letter-spacing: -0.04em; }
                .result-value span { font-size: clamp(1rem, 1.4vw, 1.4rem); font-weight: 700; color: var(--secondary); margin-left: 0.5rem; }
                .success { border-color: #BBF7D0; }
                .warning { border-color: #FECACA; }
                .btn-modern-back:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.05); border-color: var(--secondary); }
            `}</style>
        </div>
    );
};
