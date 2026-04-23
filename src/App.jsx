import { useState } from 'react';
import emiImage from './assets/emi.png'; // ← Make sure your image is in src/assets/emi.png

function App() {
  const [copied, setCopied] = useState(false);
  
  const contractAddress = "8x...YourSolanaContractAddressHere...123"; // ← Replace with your real CA

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
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

      {/* Centered Image - No border, No shadow */}
      <div style={{
        marginBottom: '50px',
        maxWidth: '420px',
        width: '100%'
      }}>
        <img 
          src={emiImage} 
          alt="DoomerGirl" 
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px'
          }}
        />
      </div>

      {/* Contract Address Section - Clean, no title, no heavy border */}
      <div style={{
        maxWidth: '620px',
        width: '100%',
        marginBottom: '60px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f8f8f8',
          borderRadius: '12px',
          padding: '18px 24px',
          fontFamily: 'monospace',
          fontSize: '1.1rem',
          wordBreak: 'break-all',
          marginBottom: '16px'
        }}>
          {contractAddress}
        </div>

        <button 
          onClick={copyToClipboard}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            padding: '16px 40px',
            fontSize: '1.15rem',
            fontWeight: '700',
            cursor: 'pointer',
            borderRadius: '10px',
            transition: 'all 0.2s',
            width: '100%',
            maxWidth: '280px'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#222'}
          onMouseOut={e => e.target.style.backgroundColor = '#000'}
        >
          {copied ? '✅ COPIED!' : 'COPY CA'}
        </button>
      </div>

      {/* About Section */}
      <section style={{ maxWidth: '680px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>who is doomer girl?</h2>
        <p style={{ 
          fontSize: '1.25rem', 
          lineHeight: '1.7',
          maxWidth: '580px',
          margin: '0 auto'
        }}>
          She's seen it all. The pumps. The dumps. The rug pulls. 
          Through every cycle, she remains... doomer.
          <br /><br />
          Now she's on Solana as $emi — the ultimate meme for those who know how this ends.
        </p>
      </section>

      {/* How to Buy */}
      <section style={{ maxWidth: '680px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>HOW TO BUY $EMI</h2>
        <div style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '32px',
          borderRadius: '12px',
          textAlign: 'left',
          fontSize: '1.1rem',
          lineHeight: '1.8'
        }}>
          1. Get a Solana wallet (Phantom, Solflare, etc.)<br />
          2. Buy $SOL on an exchange and send it to your wallet<br />
          3. Transfer $SOL to your wallet<br />
          4. Go to Jupiter or a DEX aggregator<br />
          5. Paste the CA and swap $SOL for $EMI
        </div>
      </section>

      {/* Socials */}
      <footer style={{ 
        marginTop: 'auto', 
        paddingTop: '60px',
        borderTop: '3px solid #000',
        width: '100%',
        maxWidth: '680px'
      }}>
        <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>
          JOIN THE DOOM
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          fontSize: '1.5rem'
        }}>
          <a href="https://twitter.com" target="_blank" style={{ color: '#000', textDecoration: 'none' }}>𝕏</a>
          <a href="https://t.me" target="_blank" style={{ color: '#000', textDecoration: 'none' }}>TELEGRAM</a>
          <a href="#" target="_blank" style={{ color: '#000', textDecoration: 'none' }}>DEXSCREENER</a>
        </div>
        <p style={{ marginTop: '60px', fontSize: '0.95rem', opacity: 0.7 }}>
          $emi • DoomerGirl • Not financial advice • DYOR
        </p>
      </footer>
    </div>
  );
}

export default App;