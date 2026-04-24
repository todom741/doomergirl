import { useState, useEffect } from 'react';
import emiImage from './assets/1.jpg';
import emiImage2 from './assets/2.jpg';

function App() {
  const [copied, setCopied] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [emiImage, emiImage2];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Auto fade between images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const contractAddress = "8x...YourSolanaContractAddressHere...123";

  return (
    <>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .main-container {
              padding-top: 0px !important;
              padding-bottom: 60px !important;
            }
          }
        `}
      </style>

      <div className="main-container" style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        {/* Header */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '900', 
            margin: '0 0 8px 0',
            letterSpacing: '-2px'
          }}>
            DOOMERGIRL
          </h1>
          <p style={{ 
            fontSize: '1.8rem', 
            fontWeight: '700',
            color: '#111',
            margin: 0
          }}>
            $emi
          </p>
        </header>

        {/* Cross-Fading Images */}
        <div style={{
          position: 'relative',
          marginBottom: '50px',
          maxWidth: '420px',
          width: '100%',
          aspectRatio: '1 / 1',           // Keeps it square (adjust if needed)
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          {/* Image 1 */}
          <img 
            src={images[0]} 
            alt="DoomerGirl 1" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              opacity: currentImage === 0 ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              zIndex: currentImage === 0 ? 2 : 1,
            }}
          />
          
          {/* Image 2 */}
          <img 
            src={images[1]} 
            alt="DoomerGirl 2" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              opacity: currentImage === 1 ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              zIndex: currentImage === 1 ? 2 : 1,
            }}
          />
        </div>

        {/* Clickable Contract Address */}
        <div style={{
          maxWidth: '620px',
          width: '100%',
          marginBottom: '40px'
        }}>
          <div 
            onClick={copyToClipboard}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f8f8f8',
              borderRadius: '12px',
              padding: '18px 24px',
              fontFamily: 'monospace',
              fontSize: '1.1rem',
              wordBreak: 'break-all',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              userSelect: 'none',
              border: '1px solid transparent'
            }}
            onMouseOver={e => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.borderColor = '#ddd';
            }}
            onMouseOut={e => {
              e.target.style.backgroundColor = '#f8f8f8';
              e.target.style.borderColor = 'transparent';
            }}
          >
            <span>{contractAddress}</span>
            
            <span style={{ 
              marginLeft: '20px', 
              display: 'flex', 
              alignItems: 'center',
              flexShrink: 0 
            }}>
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </span>
          </div>

          {copied && (
            <p style={{
              marginTop: '14px',
              color: '#22c55e',
              fontWeight: '600',
              fontSize: '1rem'
            }}>
              ✓ Contract address copied!
            </p>
          )}
        </div>

        {/* Placeholder text */}
        <div style={{
          maxWidth: '620px',
          width: '100%',
          fontSize: '1.1rem',
          lineHeight: '1.7',
          color: '#444',
          padding: '0 20px',
          marginBottom: '30px'
        }}>
          <p style={{ marginTop: '18px' }}>
            Half of all fees go directly to the original DoomerGirl, mothemi.
          </p>
        </div>

        {/* Know Your Meme Button */}
        <a 
          href="https://knowyourmeme.com/memes/doomer-girl"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            color: '#ffffff',
            fontSize: '1.1rem',
            fontWeight: '700',
            padding: '16px 32px',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            border: '2px solid #000000',
            maxWidth: '620px',
            width: '100%'
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = '#ffffff';
            e.target.style.color = '#000000';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = '#000000';
            e.target.style.color = '#ffffff';
          }}
        >
          📖 Know Your Meme
        </a>
      </div>
    </>
  );
}

export default App;