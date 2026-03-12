import React, { useState } from 'react';

const Live = () => {
  const [device, setDevice] = useState('desktop');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f8f9fc', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Header Panel */}
      <div style={{ padding: '20px 40px', backgroundColor: '#fff', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', color: '#333', margin: 0, fontWeight: 'bold' }}>Live Preview</h1>
          <p style={{ color: '#666', margin: '5px 0 0 0', fontSize: '14px' }}>See how your website looks in real-time.</p>
        </div>
        
        {/* Device Toggles */}
        <div style={{ display: 'flex', gap: '10px', backgroundColor: '#f1f1f1', padding: '5px', borderRadius: '8px' }}>
          <button 
            onClick={() => setDevice('desktop')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: device === 'desktop' ? '#fff' : 'transparent', color: device === 'desktop' ? '#5B78F6' : '#555', fontWeight: device === 'desktop' ? 'bold' : 'normal', boxShadow: device === 'desktop' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <i className="iconoir-monitor"></i> Desktop
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: device === 'tablet' ? '#fff' : 'transparent', color: device === 'tablet' ? '#5B78F6' : '#555', fontWeight: device === 'tablet' ? 'bold' : 'normal', boxShadow: device === 'tablet' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <i className="iconoir-tablet-device"></i> Tablet
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: device === 'mobile' ? '#fff' : 'transparent', color: device === 'mobile' ? '#5B78F6' : '#555', fontWeight: device === 'mobile' ? 'bold' : 'normal', boxShadow: device === 'mobile' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <i className="iconoir-smartphone-device"></i> Mobile
          </button>
        </div>
        
        <a href="/" target="_blank" rel="noreferrer" style={{ padding: '10px 20px', backgroundColor: '#5B78F6', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Open in New Tab <i className="iconoir-open-new-window"></i>
        </a>
      </div>

      {/* Frame Container */}
      <div style={{ flex: 1, padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ 
            width: device === 'desktop' ? '100%' : device === 'tablet' ? '768px' : '375px', 
            height: '100%', 
            backgroundColor: '#fff', 
            borderRadius: device === 'desktop' ? '12px' : '32px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            overflow: 'hidden', 
            transition: 'width 0.3s ease, border-radius 0.3s ease',
            border: device !== 'desktop' ? '12px solid #333' : '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column'
        }}>
          {device !== 'desktop' && (
            <div style={{ height: '24px', backgroundColor: '#333', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '60px', height: '6px', backgroundColor: '#222', borderRadius: '3px' }}></div>
            </div>
          )}
          <iframe 
            src="/" 
            title="Live Site Preview" 
            style={{ width: '100%', height: '100%', border: 'none', flex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Live;
