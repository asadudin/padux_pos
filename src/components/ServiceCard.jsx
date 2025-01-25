const ServiceCard = ({ service, price, onSelect, icon, duration, description }) => {
  return (
    <div 
      onClick={onSelect}
      className="service-card"
    >
      <div className="price-tag">
        RM{price}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.5rem'
      }}>
        <div style={{
          fontSize: '2rem',
          lineHeight: 1,
          filter: 'grayscale(0.2)'
        }}>
          {icon}
        </div>
        <div>
          <h3 style={{ 
            margin: '0', 
            color: 'var(--text-primary)',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            {service}
          </h3>
          <div style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            marginTop: '0.25rem'
          }}>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {duration}
          </div>
        </div>
      </div>

      <p style={{
        margin: '0',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.5',
        flex: 1
      }}>
        {description}
      </p>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        className="add-button"
      >
        <span>Add to Cart</span>
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
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;
