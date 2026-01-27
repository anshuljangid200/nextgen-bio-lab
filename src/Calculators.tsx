import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Beaker, Dna, Activity, RotateCcw } from 'lucide-react';

const atomicWeights: Record<string, number> = {
    'H': 1.008, 'He': 4.0026, 'Li': 6.94, 'Be': 9.0122, 'B': 10.81, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998, 'Ne': 20.180,
    'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085, 'P': 30.974, 'S': 32.06, 'Cl': 35.45, 'Ar': 39.948, 'K': 39.098, 'Ca': 40.078
};

export const Calculators = () => {
    const [activeTab, setActiveTab] = useState<'mw' | 'coverage' | 'age' | 'hwe' | 'carrier' | 'hemo' | 'tm' | 'biodiversity'>('mw');

    React.useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash.split('?')[0];
            if (hash === '#calculators') {
                // If there's a specific calc in state or default to mw
            }
        };
        const handleChange = (e: Event & { detail?: 'mw' | 'coverage' | 'age' | 'hwe' | 'carrier' | 'hemo' | 'tm' | 'biodiversity' }) => {
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

    // Hardy-Weinberg Equilibrium State
    const [hweObserved, setHweObserved] = useState({ AA: 0, Aa: 0, aa: 0 });
    const [hweResult, setHweResult] = useState<{ p: number, q: number, chi: number, pValue: string } | null>(null);

    const calculateHWE = () => {
        const total = hweObserved.AA + hweObserved.Aa + hweObserved.aa;
        if (total === 0) return;

        const p = (2 * hweObserved.AA + hweObserved.Aa) / (2 * total);
        const q = 1 - p;

        const expAA = (p * p) * total;
        const expAa = (2 * p * q) * total;
        const expaa = (q * q) * total;

        const chi =
            Math.pow(hweObserved.AA - expAA, 2) / expAA +
            Math.pow(hweObserved.Aa - expAa, 2) / expAa +
            Math.pow(hweObserved.aa - expaa, 2) / expaa;

        // For df=1, p-value calculation (simplified)
        let pValStr = chi > 3.841 ? "p < 0.05 (Significant)" : "p > 0.05 (Not Significant)";
        setHweResult({ p, q, chi, pValue: pValStr });
    };

    // Carrier Frequency State
    const [diseaseFreq, setDiseaseFreq] = useState(0.0001);
    const [carrierResult, setCarrierResult] = useState<{ carrierFreq: number, q: number } | null>(null);

    const calculateCarrier = () => {
        const q = Math.sqrt(diseaseFreq);
        const p = 1 - q;
        const carrierFreq = 2 * p * q;
        setCarrierResult({ carrierFreq, q });
    };

    // Hemocytometer State
    const [hemoCounts, setHemoCounts] = useState([0, 0, 0, 0]);
    const [dilution, setDilution] = useState(1);
    const [hemoResult, setHemoResult] = useState<number | null>(null);

    const calculateHemo = () => {
        const avg = hemoCounts.reduce((a, b) => a + b) / hemoCounts.length;
        const result = avg * dilution * 10000;
        setHemoResult(result);
    };

    // Tm Calculator State
    const [sequence, setSequence] = useState('');
    const [tmResult, setTmResult] = useState<number | null>(null);

    const calculateTm = () => {
        const seq = sequence.toUpperCase();
        if (!/^[ATGC]+$/.test(seq)) {
            alert("Invalid DNA sequence. Use A, T, G, C.");
            return;
        }

        // Basic Wallace Rule for short sequences
        if (seq.length < 14) {
            const counts = { A: 0, T: 0, G: 0, C: 0 };
            for (let char of seq) counts[char as keyof typeof counts]++;
            setTmResult(2 * (counts.A + counts.T) + 4 * (counts.G + counts.C));
        } else {
            // Salt-adjusted Marmur-Doty
            const gc = (seq.match(/[GC]/g) || []).length;
            const len = seq.length;
            const tm = 64.9 + 41 * (gc - 16.4) / len;
            setTmResult(tm);
        }
    };

    // Biodiversity State
    const [speciesCounts, setSpeciesCounts] = useState<string>('10, 20, 30');
    const [bioResults, setBioResults] = useState<{ shannon: number, simpson: number } | null>(null);

    const calculateBiodiversity = () => {
        const counts = speciesCounts.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const total = counts.reduce((a, b) => a + b, 0);
        if (total === 0) return;

        let shannon = 0;
        let simpson = 0;

        counts.forEach(n => {
            const pi = n / total;
            if (pi > 0) shannon -= pi * Math.log(pi);
            simpson += (n * (n - 1)) / (total * (total - 1));
        });

        setBioResults({ shannon, simpson: 1 - simpson });
    };

    return (
        <div className="container" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="gradient-text">Precision Bio-Calculators</h1>
                <p style={{ color: 'var(--text-muted)' }}>Empowering research with instant scientific computations.</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {[
                    { id: 'mw', label: 'Molecular Weight', icon: <Beaker size={18} /> },
                    { id: 'coverage', label: 'NGS Coverage', icon: <Dna size={18} /> },
                    { id: 'age', label: 'Bio-Age', icon: <Activity size={18} /> },
                    { id: 'hwe', label: 'H-W Equilibrium', icon: <Activity size={18} /> },
                    { id: 'carrier', label: 'Carrier Freq', icon: <Activity size={18} /> },
                    { id: 'hemo', label: 'Hemocytometer', icon: <Beaker size={18} /> },
                    { id: 'tm', label: 'Tm Calc', icon: <Dna size={18} /> },
                    { id: 'biodiversity', label: 'Biodiversity', icon: <Activity size={18} /> },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
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

                {activeTab === 'hwe' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Hardy-Weinberg Equilibrium</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                            {['AA', 'Aa', 'aa'].map(genotype => (
                                <div key={genotype}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>{genotype} Count</label>
                                    <input
                                        type="number"
                                        value={hweObserved[genotype as keyof typeof hweObserved]}
                                        onChange={e => setHweObserved({ ...hweObserved, [genotype]: Number(e.target.value) })}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-primary" onClick={calculateHWE} style={{ marginTop: '2rem', width: '100%' }}>Calculate HWE</button>
                        {hweResult && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Allele p (A)</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{hweResult.p.toFixed(4)}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Allele q (a)</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{hweResult.q.toFixed(4)}</div>
                                    </div>
                                </div>
                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Chi-Square Result</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>χ² = {hweResult.chi.toFixed(2)}</div>
                                    <div style={{ fontSize: '1rem', color: hweResult.pValue.includes('Significant') ? '#ef4444' : '#10b981' }}>{hweResult.pValue}</div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'carrier' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Carrier Frequency Calculator</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Calculate the frequency of carriers (heterozygotes) based on disease incidence.</p>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Disease Incidence (q²)</label>
                            <input
                                type="number"
                                value={diseaseFreq}
                                onChange={e => setDiseaseFreq(Number(e.target.value))}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                                step="0.0001"
                            />
                            <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>Example: 0.0001 for 1 in 10,000</p>
                        </div>
                        <button className="btn btn-primary" onClick={calculateCarrier} style={{ marginTop: '2rem', width: '100%' }}>Calculate Frequency</button>
                        {carrierResult && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Carrier Frequency (2pq)</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>{(carrierResult.carrierFreq * 100).toFixed(2)}%</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Allele Frequency (q)</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>{carrierResult.q.toFixed(4)}</div>
                                    </div>
                                </div>
                                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Approximately 1 in {Math.round(1 / carrierResult.carrierFreq)} people are carriers.</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'hemo' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Hemocytometer Cell Counter</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            {hemoCounts.map((count, i) => (
                                <div key={i}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Square {i + 1} Count</label>
                                    <input
                                        type="number"
                                        value={count}
                                        onChange={e => {
                                            const newCounts = [...hemoCounts];
                                            newCounts[i] = Number(e.target.value);
                                            setHemoCounts(newCounts);
                                        }}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                                    />
                                </div>
                            ))}
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Dilution Factor</label>
                                <input
                                    type="number"
                                    value={dilution}
                                    onChange={e => setDilution(Number(e.target.value))}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={calculateHemo} style={{ marginTop: '2rem', width: '100%' }}>Calculate Concentration</button>
                        {hemoResult !== null && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Cell Concentration:</span>
                                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>{hemoResult.toExponential(2)} cells/mL</div>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'tm' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Primer Tm Calculator</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Predict the melting temperature of your DNA oligos.</p>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>DNA Sequence (A, T, G, C)</label>
                            <textarea
                                value={sequence}
                                onChange={e => setSequence(e.target.value)}
                                placeholder="GATTACA..."
                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', minHeight: '100px', textTransform: 'uppercase' }}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={calculateTm} style={{ marginTop: '2rem', width: '100%' }}>Calculate Tm</button>
                        {tmResult !== null && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>Estimated Tₘ:</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{tmResult.toFixed(1)} °C</div>
                                <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>{sequence.length < 14 ? "Calculated using Wallace Rule" : "Calculated using Basic Salt-Adjusted Formula"}</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {activeTab === 'biodiversity' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Biodiversity Index Calculator</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Compute Shannon and Simpson diversity indices.</p>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Species Counts (comma separated)</label>
                            <input
                                type="text"
                                value={speciesCounts}
                                onChange={e => setSpeciesCounts(e.target.value)}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                            />
                            <p style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>Example: 10, 25, 5, 40 (counts of individuals for each species)</p>
                        </div>
                        <button className="btn btn-primary" onClick={calculateBiodiversity} style={{ marginTop: '2rem', width: '100%' }}>Calculate Indices</button>
                        {bioResults && (
                            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Shannon Index (H)</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>{bioResults.shannon.toFixed(3)}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Simpson's Index (1-D)</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>{bioResults.simpson.toFixed(3)}</div>
                                    </div>
                                </div>
                                <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>Higher values indicate greater biodiversity.</p>
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
