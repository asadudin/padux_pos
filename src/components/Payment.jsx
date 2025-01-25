import { useState, useEffect } from 'react';

const Payment = ({ totalAmount, onComplete }) => {
  const [cashReceived, setCashReceived] = useState('0');
  const [change, setChange] = useState(0);

  useEffect(() => {
    if (cashReceived) {
      const changeAmount = parseFloat(cashReceived) - totalAmount;
      setChange(changeAmount >= 0 ? changeAmount : 0);
    } else {
      setChange(0);
    }
  }, [cashReceived, totalAmount]);

  const handleComplete = () => {
    if (parseFloat(cashReceived) >= totalAmount) {
      onComplete();
      setCashReceived('');
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
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '2px solid #e1e8ed'
      }}>
        <h2 style={{ 
          color: '#2c3e50', 
          margin: '0 0 0.25rem 0',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          Payment
        </h2>
        <span style={{ 
          color: '#6c757d',
          fontSize: '0.9rem'
        }}>
          Complete your transaction
        </span>
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ 
          backgroundColor: '#2c3e50',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ 
            color: 'rgba(255,255,255,0.8)',
            fontSize: '0.9rem',
            marginBottom: '0.25rem'
          }}>
            Total Amount
          </div>
          <div style={{ 
            color: 'white',
            fontSize: '1.75rem',
            fontWeight: '600'
          }}>
            RM{totalAmount.toFixed(2)}
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            color: '#2c3e50',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            Cash Received
          </label>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '1rem',
              top: '0.5rem',
              backgroundColor: 'var(--primary-color)',
              color: '#fff',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              RM
            </div>
            <input
              type="number"
              value={cashReceived}
              onChange={(e) => setCashReceived(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 3.5rem',
                border: '2px solid var(--border-color)',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                backgroundColor: '#f8f9fa',
                ':focus': {
                  borderColor: 'var(--primary-color)',
                  outline: 'none',
                  backgroundColor: '#fff'
                }
              }}
              placeholder="0.00"
            />
            <div style={{
              marginTop: '1rem',
              marginBottom: '1.5rem',
              backgroundColor: '#f8f9fa',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                width: '100%'
              }}>
                {[1, 5, 10, 20, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      const currentAmount = parseFloat(cashReceived) || 0;
                      setCashReceived((currentAmount + amount).toString());
                    }}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#fff',
                      color: 'var(--primary-color)',
                      border: '1px solid var(--primary-color)',
                      borderRadius: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      flex: '1 0 auto',
                      minWidth: 'fit-content',
                      textAlign: 'center',
                      ':hover': {
                        backgroundColor: 'var(--primary-color)',
                        color: '#fff'
                      }
                    }}
                  >
                    +RM{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: parseFloat(cashReceived) >= totalAmount ? '#f1f8f1' : '#fff5f5',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1.5rem',
          border: `1px solid ${parseFloat(cashReceived) >= totalAmount ? '#d1e7dd' : '#f8d7da'}`
        }}>
          {parseFloat(cashReceived) >= totalAmount ? (
            <>
              <div style={{ 
                color: '#27ae60',
                fontSize: '0.9rem',
                marginBottom: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Change to Return
              </div>
              <div style={{ 
                color: '#27ae60',
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>
                RM{change.toFixed(2)}
              </div>
            </>
          ) : (
            <>
              <div style={{ 
                color: '#dc3545',
                fontSize: '0.9rem',
                marginBottom: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Amount Due
              </div>
              <div style={{ 
                color: '#dc3545',
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>
                RM{(totalAmount - parseFloat(cashReceived || 0)).toFixed(2)}
              </div>
            </>
          )}
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem'
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '⌫', 'C'].map((num) => (
            <button
              key={num}
              onClick={() => {
                if (num === '⌫') {
                  setCashReceived(prev => prev.slice(0, -1) || '0');
                } else if (num === 'C') {
                  setCashReceived('0');
                } else {
                  setCashReceived(prev => {
                    if (prev === '0' && num !== '.') return num.toString();
                    if (num === '.' && prev.includes('.')) return prev;
                    return prev + num;
                  });
                }
              }}
              style={{
                padding: '0.75rem',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                background: num === '⌫' || num === 'C' ? '#f8d7da' : '#fff',
                color: num === '⌫' || num === 'C' ? '#dc3545' : 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleComplete}
        disabled={!cashReceived || parseFloat(cashReceived) < totalAmount}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: parseFloat(cashReceived) >= totalAmount ? 'var(--success-color)' : '#e1e8ed',
          color: parseFloat(cashReceived) >= totalAmount ? 'white' : '#95a5a6',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: parseFloat(cashReceived) >= totalAmount ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          boxShadow: parseFloat(cashReceived) >= totalAmount ? '0 4px 12px rgba(46, 204, 113, 0.2)' : 'none',
          ':hover': parseFloat(cashReceived) >= totalAmount ? {
            backgroundColor: '#27ae60',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(46, 204, 113, 0.3)'
          } : {}
        }}
      >
        {parseFloat(cashReceived) >= totalAmount ? (
          <>
            <span>Complete Transaction</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </>
        ) : (
          <>
            <span>Enter Valid Amount</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default Payment;
