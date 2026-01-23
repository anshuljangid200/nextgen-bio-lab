import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Beaker, Dna, Activity, RotateCcw } from 'lucide-react';

const atomicWeights: Record<string, number> = {
    'H': 1.008, 'He': 4.0026, 'Li': 6.94, 'Be': 9.0122, 'B': 10.81, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998, 'Ne': 20.180,
    'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085, 'P': 30.974, 'S': 32.06, 'Cl': 35.45, 'Ar': 39.948, 'K': 39.098, 'Ca': 40.078
};

export const Calculators = () => {
    const [activeTab, setActiveTab] = useState<'mw' | 'coverage' | 'age'>('mw');

    React.useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash.split('?')[0];
            if (hash === '#calculators') {
                // If there's a specific calc in state or default to mw
            }
        };
        const handleChange = (e: Event & { detail?: 'mw' | 'coverage' | 'age' }) => {
            if (e.detail) setActiveTab(e.detail);
        };
        window.addEventListener('changeCalculator', handleChange);
        window.addEventListener('hashchange', handleHash);
        return () => {
            window.removeEventListener('changeCalculator', handleChange);
            window.removeEventListener('hashchange', handleHash);
        };
    }, []);

    // Molecular Weight State
    const [formula, setFormula] = useState('');
    const [mwResult, setMwResult] = useState<number | null>(null);

    const calculateMW = () => {
        try {
            let total = 0;
            const regex = /([A-Z][a-z]*)(\d*)/g;
            let match;
            while ((match = regex.exec(formula)) !== null) {
                const element = match[1];
                const count = parseInt(match[2] || '1');
                if (atomicWeights[element]) {
                    total += atomicWeights[element] * count;
                } else {
                    throw new Error(`Unknown element: ${element}`);
                }
            }
            setMwResult(total);
        } catch {
            alert("Invalid Formula. Use standard notation like H2O or C6H12O6");
        }
    };

    // Coverage State
    const [readLength, setReadLength] = useState(150);
    const [numReads, setNumReads] = useState(100);
    const [genomeSize, setGenomeSize] = useState(3000);
    const [coverageResult, setCoverageResult] = useState<number | null>(null);

    const calculateCoverage = () => {
        const coverage = (readLength * numReads) / genomeSize;
        setCoverageResult(coverage);
    };

    // Biological Age State
    const [age, setAge] = useState(25);
    const [lifestyle, setLifestyle] = useState({ exercise: 5, sleep: 7, stress: 5 });
    const [bioAgeResult, setBioAgeResult] = useState<number | null>(null);

    const calculateBioAge = () => {
        // Basic logic: base age adjusted by lifestyle
        let adjustment = 0;
        if (lifestyle.exercise > 7) adjustment -= 2;
        if (lifestyle.sleep < 6) adjustment += 3;
        if (lifestyle.stress > 7) adjustment += 2;
        setBioAgeResult(age + adjustment);
    };

    return (
        <div className="container" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="gradient-text">Precision Bio-Calculators</h1>
                <p style={{ color: 'var(--text-muted)' }}>Empowering research with instant scientific computations.</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                {[
                    { id: 'mw', label: 'Molecular Weight', icon: <Beaker size={18} /> },
                    { id: 'coverage', label: 'NGS Coverage', icon: <Dna size={18} /> },
                    { id: 'age', label: 'Bio-Age', icon: <Activity size={18} /> },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as 'mw' | 'coverage' | 'age')}
                        className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            <div className="glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                {activeTab === 'mw' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Molecular Weight Calculator</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Enter a chemical formula to compute its molar mass (g/mol).</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="e.g. C6H12O6"
                                value={formula}
                                onChange={(e) => setFormula(e.target.value)}
                                style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', fontSize: '1.1rem' }}
                            />
                            <button className="btn btn-primary" onClick={calculateMW}>Calculate</button>
                        </div>
                        {mwResult !== null && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Total Molar Mass:</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{mwResult.toFixed(3)} g/mol</div>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'coverage' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>NGS Coverage Calculator</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Read Length (bp)</label>
                                <input type="number" value={readLength} onChange={e => setReadLength(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Number of Reads (Millions)</label>
                                <input type="number" value={numReads} onChange={e => setNumReads(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Target Genome Size (Mb)</label>
                                <input type="number" value={genomeSize} onChange={e => setGenomeSize(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={calculateCoverage} style={{ marginTop: '2rem', width: '100%' }}>Compute Coverage</button>
                        {coverageResult !== null && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Estimated Coverage:</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{coverageResult.toFixed(2)} X</div>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'age' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Longevies™ Bio-Age Assessment</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Chronological Age</label>
                                <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Weekly High-Intensity Exercise (Hours: {lifestyle.exercise})</label>
                                <input type="range" min="0" max="15" value={lifestyle.exercise} onChange={e => setLifestyle({ ...lifestyle, exercise: Number(e.target.value) })} style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Average Sleep (Hours: {lifestyle.sleep})</label>
                                <input type="range" min="3" max="12" value={lifestyle.sleep} onChange={e => setLifestyle({ ...lifestyle, sleep: Number(e.target.value) })} style={{ width: '100%' }} />
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={calculateBioAge} style={{ marginTop: '2rem', width: '100%' }}>Assess Biological Age</button>
                        {bioAgeResult !== null && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Your Bio-Age Result:</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: bioAgeResult > age ? '#ef4444' : '#10b981' }}>{bioAgeResult} Years</div>
                                <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>{bioAgeResult <= age ? "You're trending younger than your chronological age!" : "Lifestyle adjustments recommended for longevity."}</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '4rem' }}>
                <button onClick={() => window.location.hash = ''} className="btn btn-outline">
                    <RotateCcw size={18} /> Back to Homepage
                </button>
            </div>
        </div>
    );
};
