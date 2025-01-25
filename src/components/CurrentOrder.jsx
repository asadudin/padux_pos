const CurrentOrder = ({ items, onClearCart, onRemoveItem, onUpdateQuantity }) => {
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div style={{ 
      padding: '1.5rem',
      backgroundColor: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: '1px solid #e1e8ed'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '2px solid #e1e8ed'
      }}>
        <div>
          <h2 style={{ 
            color: '#2c3e50', 
            margin: '0 0 0.25rem 0',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            Current Order
          </h2>
          <span style={{ 
            color: '#6c757d',
            fontSize: '0.9rem'
          }}>
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        <button
          onClick={onClearCart}
          className="clear-cart-button"
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-items-container">
        {items.length === 0 ? (
          <div style={{ 
            color: '#6c757d', 
            textAlign: 'center', 
            padding: '3rem 2rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '0.5rem',
            fontSize: '0.9rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ opacity: 0.5 }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
                Your cart is empty
              </div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                Add services from the menu to get started
              </div>
            </div>
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="cart-item"
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                flex: 1
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {item.icon || item.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.25rem'
                  }}>
                    <span style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      {item.name}
                    </span>
                    <span style={{ 
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      RM{item.price * (item.quantity || 1)}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <button
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                        style={{
                          padding: '0.25rem',
                          border: 'none',
                          background: 'none',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                          opacity: (item.quantity || 1) <= 1 ? 0.5 : 1
                        }}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <span style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        minWidth: '1.5rem',
                        textAlign: 'center'
                      }}>
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                        style={{
                          padding: '0.25rem',
                          border: 'none',
                          background: 'none',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer'
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{
                        padding: '0.25rem',
                        border: 'none',
                        background: 'none',
                        color: 'var(--danger-color)',
                        cursor: 'pointer',
                        opacity: 0.6,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#2c3e50',
        borderRadius: '0.5rem',
        color: 'white'
      }}>
        <span style={{ fontSize: '1.1rem' }}>Subtotal</span>
        <span style={{ 
          fontSize: '1.25rem',
          fontWeight: '600'
        }}>
          RM{calculateSubtotal().toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CurrentOrder;
