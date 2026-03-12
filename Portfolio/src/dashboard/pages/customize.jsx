import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Customize = () => {
    const { theme, updateTheme, resetTheme } = useContext(ThemeContext);

    // Local draft — changes only apply when Save is clicked
    const [draft, setDraft] = useState(theme);
    const [saved, setSaved] = useState(false);

    // Keep draft in sync if theme resets from outside (e.g. Reset Defaults)
    useEffect(() => { setDraft(theme); }, [theme]);

    const handleDraftChange = (key, value) => {
        setDraft(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        Object.entries(draft).forEach(([key, value]) => updateTheme(key, value));
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    const handleReset = () => {
        resetTheme();
        // draft will update via useEffect above
    };

    return (
        <div className="dashboard-container" style={{ display: 'block' }}>
            <div className="dashboard-main" style={{ marginBottom: '30px' }}>
                <div className="promo-card-account" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <div>
                        <h3 className="section-title" style={{ marginBottom: '10px' }}>Global Theme Customizer</h3>
                        <p style={{ color: '#666', margin: 0 }}>
                            Adjust the colors across the entire website instantly.
                        </p>
                    </div>
                    <button onClick={handleReset} className="button_submit" style={{ width: 'auto', padding: '12px 24px', margin: 0, backgroundColor: '#f1f1f1', color: '#333' }}>
                        <i className="fa-solid fa-rotate-left" style={{ marginRight: '8px' }}></i> Reset Defaults
                    </button>
                </div>
            </div>

            <div className="transaction-card" style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                <h4 style={{ marginBottom: '30px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Color Palette</h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>

                    {/* Primary Color Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Primary / Accent Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.primaryColor || '#5B78F6'}
                                onChange={(e) => handleDraftChange('primaryColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.primaryColor || '#5B78F6'}</span>
                        </div>
                    </div>

                    {/* Background Color Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Site Background Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.bgColor || '#0d0d0d'}
                                onChange={(e) => handleDraftChange('bgColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.bgColor || '#0d0d0d'}</span>
                        </div>
                    </div>

                    {/* Card Background Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Card Background Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.cardBgColor || '#0F0F0F'}
                                onChange={(e) => handleDraftChange('cardBgColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.cardBgColor || '#0F0F0F'}</span>
                        </div>
                    </div>

                    {/* Text Color Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Body Text Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.textColor || '#9f9f9f'}
                                onChange={(e) => handleDraftChange('textColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.textColor || '#9f9f9f'}</span>
                        </div>
                    </div>

                    {/* Heading/Icon Color Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Headings & Text Icon Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.iconColor || '#ffffff'}
                                onChange={(e) => handleDraftChange('iconColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.iconColor || '#ffffff'}</span>
                        </div>
                    </div>

                    {/* 3D Spinning Icon Color Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>3D Background Icon Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.threeDColor || '#4270f4'}
                                onChange={(e) => handleDraftChange('threeDColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.threeDColor || '#4270f4'}</span>
                        </div>
                    </div>

                    {/* Cursor Color Picker */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Custom Cursor Color</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <input
                                type="color"
                                value={draft.cursorColor || '#5B78F6'}
                                onChange={(e) => handleDraftChange('cursorColor', e.target.value)}
                                style={{ width: '50px', height: '50px', border: 'none', borderRadius: '8px', cursor: 'pointer', padding: '0', background: 'none' }}
                            />
                            <span style={{ fontFamily: 'monospace', color: '#888', backgroundColor: '#f9f9f9', padding: '8px 12px', borderRadius: '6px' }}>{draft.cursorColor || '#5B78F6'}</span>
                        </div>
                    </div>

                </div>

                <h4 style={{ marginTop: '50px', marginBottom: '30px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Identity & Social</h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Your Name</label>
                        <input type="text" value={draft.name || ''} onChange={(e) => handleDraftChange('name', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Your Role</label>
                        <input type="text" value={draft.role || ''} onChange={(e) => handleDraftChange('role', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Brief Location/Tagline</label>
                        <input type="text" value={draft.location || ''} onChange={(e) => handleDraftChange('location', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>LinkedIn URL</label>
                        <input type="text" value={draft.socialLinkedin || ''} onChange={(e) => handleDraftChange('socialLinkedin', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>GitHub URL</label>
                        <input type="text" value={draft.socialGithub || ''} onChange={(e) => handleDraftChange('socialGithub', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                </div>

                <h4 style={{ marginTop: '50px', marginBottom: '30px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Quick Stats</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Years Experience</label>
                        <input type="text" value={draft.statsYears || ''} onChange={(e) => handleDraftChange('statsYears', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Clients</label>
                        <input type="text" value={draft.statsClients || ''} onChange={(e) => handleDraftChange('statsClients', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Total Projects</label>
                        <input type="text" value={draft.statsProjects || ''} onChange={(e) => handleDraftChange('statsProjects', e.target.value)} style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
                    </div>
                </div>


                <h4 style={{ marginTop: '50px', marginBottom: '30px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Bio Paragraphs</h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr)', gap: '30px' }}>

                    {/* About Text Input */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>About Me Summary</label>
                        <textarea
                            value={draft.aboutText || ''}
                            onChange={(e) => handleDraftChange('aboutText', e.target.value)}
                            style={{ width: '100%', minHeight: '120px', padding: '15px', border: '1px solid #ddd', borderRadius: '12px', outline: 'none', resize: 'vertical', fontSize: '15px', fontFamily: 'inherit', color: '#333', backgroundColor: '#fdfdfd' }}
                        />
                    </div>

                    {/* Credentials Paragraph 1 Input */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Credentials Overview (Paragraph 1)</label>
                        <textarea
                            value={draft.credentialsText1 || ''}
                            onChange={(e) => handleDraftChange('credentialsText1', e.target.value)}
                            style={{ width: '100%', minHeight: '120px', padding: '15px', border: '1px solid #ddd', borderRadius: '12px', outline: 'none', resize: 'vertical', fontSize: '15px', fontFamily: 'inherit', color: '#333', backgroundColor: '#fdfdfd' }}
                        />
                    </div>

                    {/* Credentials Paragraph 2 Input */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ fontWeight: 'bold', color: '#555' }}>Credentials Details (Paragraph 2)</label>
                        <textarea
                            value={draft.credentialsText2 || ''}
                            onChange={(e) => handleDraftChange('credentialsText2', e.target.value)}
                            style={{ width: '100%', minHeight: '120px', padding: '15px', border: '1px solid #ddd', borderRadius: '12px', outline: 'none', resize: 'vertical', fontSize: '15px', fontFamily: 'inherit', color: '#333', backgroundColor: '#fdfdfd' }}
                        />
                    </div>
                </div>

                {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
                <h4 style={{ marginTop: '50px', marginBottom: '20px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Experience</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {(draft.experience || []).map((exp, idx) => (
                        <div key={exp.id} style={{ padding: '20px', border: '1px solid #e8e8e8', borderRadius: '12px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}>
                            <span style={{ fontWeight: 'bold', color: '#5B78F6', fontSize: '13px' }}>Entry #{idx + 1}</span>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Date / Period</label>
                                    <input type="text" value={exp.date || ''} onChange={(e) => handleDraftChange('experience', draft.experience.map((i) => i.id === exp.id ? { ...i, date: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Job Title</label>
                                    <input type="text" value={exp.title || ''} onChange={(e) => handleDraftChange('experience', draft.experience.map((i) => i.id === exp.id ? { ...i, title: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Company / Employer</label>
                                    <input type="text" value={exp.company || ''} onChange={(e) => handleDraftChange('experience', draft.experience.map((i) => i.id === exp.id ? { ...i, company: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', color: '#777' }}>Description</label>
                                <textarea value={exp.desc || ''} onChange={(e) => handleDraftChange('experience', draft.experience.map((i) => i.id === exp.id ? { ...i, desc: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', resize: 'vertical', minHeight: '80px', fontSize: '14px', fontFamily: 'inherit', backgroundColor: '#fff' }} />
                            </div>
                            <button onClick={() => handleDraftChange('experience', draft.experience.filter(i => i.id !== exp.id))} style={{ alignSelf: 'flex-end', padding: '6px 14px', backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>✕ Remove</button>
                        </div>
                    ))}
                    <button onClick={() => handleDraftChange('experience', [...(draft.experience || []), { id: Date.now(), date: '', title: '', company: '', desc: '' }])} style={{ padding: '12px', backgroundColor: '#f0f4ff', color: '#5B78F6', border: '2px dashed #5B78F6', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>+ Add Experience Entry</button>
                </div>

                {/* ── EDUCATION ──────────────────────────────────────────────────── */}
                <h4 style={{ marginTop: '50px', marginBottom: '20px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Education</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {(draft.education || []).map((edu, idx) => (
                        <div key={edu.id} style={{ padding: '20px', border: '1px solid #e8e8e8', borderRadius: '12px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <span style={{ fontWeight: 'bold', color: '#5B78F6', fontSize: '13px' }}>Entry #{idx + 1}</span>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Date / Year</label>
                                    <input type="text" value={edu.date || ''} onChange={(e) => handleDraftChange('education', draft.education.map((i) => i.id === edu.id ? { ...i, date: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Degree / Qualification</label>
                                    <input type="text" value={edu.degree || ''} onChange={(e) => handleDraftChange('education', draft.education.map((i) => i.id === edu.id ? { ...i, degree: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Institution</label>
                                    <input type="text" value={edu.institution || ''} onChange={(e) => handleDraftChange('education', draft.education.map((i) => i.id === edu.id ? { ...i, institution: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', color: '#777' }}>Description</label>
                                <textarea value={edu.desc || ''} onChange={(e) => handleDraftChange('education', draft.education.map((i) => i.id === edu.id ? { ...i, desc: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', resize: 'vertical', minHeight: '80px', fontSize: '14px', fontFamily: 'inherit', backgroundColor: '#fff' }} />
                            </div>
                            <button onClick={() => handleDraftChange('education', draft.education.filter(i => i.id !== edu.id))} style={{ alignSelf: 'flex-end', padding: '6px 14px', backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>✕ Remove</button>
                        </div>
                    ))}
                    <button onClick={() => handleDraftChange('education', [...(draft.education || []), { id: Date.now(), date: '', degree: '', institution: '', desc: '' }])} style={{ padding: '12px', backgroundColor: '#f0f4ff', color: '#5B78F6', border: '2px dashed #5B78F6', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>+ Add Education Entry</button>
                </div>

                {/* ── SKILLS ─────────────────────────────────────────────────────── */}
                <h4 style={{ marginTop: '50px', marginBottom: '20px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Skills</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    {(draft.skills || []).map((skill, idx) => (
                        <div key={skill.id} style={{ padding: '16px', border: '1px solid #e8e8e8', borderRadius: '12px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <span style={{ fontWeight: 'bold', color: '#5B78F6', fontSize: '13px' }}>Skill #{idx + 1}</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', color: '#777' }}>Skill Name</label>
                                <input type="text" value={skill.name || ''} onChange={(e) => handleDraftChange('skills', draft.skills.map((i) => i.id === skill.id ? { ...i, name: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', color: '#777' }}>Proficiency (e.g. 80%)</label>
                                <input type="text" value={skill.percent || ''} onChange={(e) => handleDraftChange('skills', draft.skills.map((i) => i.id === skill.id ? { ...i, percent: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                            </div>
                            <button onClick={() => handleDraftChange('skills', draft.skills.filter(i => i.id !== skill.id))} style={{ padding: '6px 14px', backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>✕ Remove</button>
                        </div>
                    ))}
                </div>
                <button onClick={() => handleDraftChange('skills', [...(draft.skills || []), { id: Date.now(), name: '', percent: '0%' }])} style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f0f4ff', color: '#5B78F6', border: '2px dashed #5B78F6', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', width: '100%' }}>+ Add Skill</button>

                {/* ── SERVICES ───────────────────────────────────────────────────── */}
                <h4 style={{ marginTop: '50px', marginBottom: '20px', fontSize: '20px', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Services (Service Page)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {(draft.services || []).map((svc, idx) => (
                        <div key={svc.id} style={{ padding: '20px', border: '1px solid #e8e8e8', borderRadius: '12px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <span style={{ fontWeight: 'bold', color: '#5B78F6', fontSize: '13px' }}>Service #{idx + 1}</span>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Service Title</label>
                                    <input type="text" value={svc.title || ''} onChange={(e) => handleDraftChange('services', draft.services.map(i => i.id === svc.id ? { ...i, title: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', color: '#777' }}>Icon Class (e.g. iconoir-code)</label>
                                    <input type="text" value={svc.icon || ''} onChange={(e) => handleDraftChange('services', draft.services.map(i => i.id === svc.id ? { ...i, icon: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', fontSize: '14px' }} placeholder="iconoir-code" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', color: '#777' }}>Description</label>
                                <textarea value={svc.desc || ''} onChange={(e) => handleDraftChange('services', draft.services.map(i => i.id === svc.id ? { ...i, desc: e.target.value } : i))} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none', resize: 'vertical', minHeight: '80px', fontSize: '14px', fontFamily: 'inherit', backgroundColor: '#fff' }} />
                            </div>
                            <button onClick={() => handleDraftChange('services', draft.services.filter(i => i.id !== svc.id))} style={{ alignSelf: 'flex-end', padding: '6px 14px', backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>✕ Remove</button>
                        </div>
                    ))}
                    <button onClick={() => handleDraftChange('services', [...(draft.services || []), { id: Date.now(), icon: 'iconoir-code', title: 'NEW SERVICE', desc: '' }])} style={{ padding: '12px', backgroundColor: '#f0f4ff', color: '#5B78F6', border: '2px dashed #5B78F6', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>+ Add Service</button>
                </div>

                <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                    <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>Changes are <strong>not</strong> applied until you click <strong>Save Changes</strong>.</p>
                    <button onClick={handleSave} style={{ padding: '14px 36px', backgroundColor: saved ? '#22c55e' : '#5B78F6', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                        <i className={`fa-solid ${saved ? 'fa-check' : 'fa-floppy-disk'}`} style={{ marginRight: '8px' }}></i>
                        {saved ? 'Saved!' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Customize;
