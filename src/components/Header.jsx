import { useEffect, useState } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1.5rem 2rem',
      background: 'linear-gradient(to right, #2c3e50, #3498db)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1 style={{ 
          margin: 0, 
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 'bold',
          letterSpacing: '-0.5px'
        }}>
          Cutto
        </h1>
        <span style={{ 
          color: 'rgba(255,255,255,0.8)', 
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          Smart Barbershop Management
        </span>
      </div>
      <div style={{ 
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        fontSize: '0.9rem'
      }}>
        {currentTime.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })}
      </div>
    </header>
  );
};

export default Header;
