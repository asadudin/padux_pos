import { useState } from 'react';
import Header from './components/Header';
import ServicesList from './components/ServicesList';
import CurrentOrder from './components/CurrentOrder';
import Payment from './components/Payment';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleServiceSelect = (service) => {
    const existingItem = cartItems.find(item => item.id === service.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === service.id 
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...service, quantity: 1 }]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleCompleteTransaction = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCartItems([]);
    }, 2000);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(600px, 1fr) 400px',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1800px',
        margin: '0 auto',
        width: '100%',
        flex: 1,
        height: 'calc(100vh - 80px)',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <ServicesList onServiceSelect={handleServiceSelect} />
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          height: '100%',
          overflowY: 'auto',
          paddingRight: '0.5rem'
        }}>
          <CurrentOrder 
            items={cartItems}
            onClearCart={handleClearCart}
            onRemoveItem={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
          <Payment 
            totalAmount={calculateTotal()}
            onComplete={handleCompleteTransaction}
          />
          {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--success-color)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 1000,
          animation: 'slideDown 0.3s ease'
        }}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Transaction Completed Successfully
        </div>
      )}
    </div>
      </div>
    </div>
  );
}

export default App;
