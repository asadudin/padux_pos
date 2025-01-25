import ServiceCard from './ServiceCard';

const services = [
  { 
    id: 1, 
    name: 'Haircut', 
    price: 15,
    duration: '30 min',
    description: 'Professional haircut includes consultation, wash, cut, and styling',
    icon: '✂️'
  },
  { 
    id: 2, 
    name: 'Kids Haircut', 
    price: 11,
    duration: '20 min',
    description: 'Gentle and patient service for children under 12',
    icon: '👶'
  },
  { 
    id: 3, 
    name: 'Beard Trim', 
    price: 20,
    duration: '15 min',
    description: 'Precise beard trimming and shaping with professional tools',
    icon: '🧔'
  },
  { 
    id: 4, 
    name: 'Shave', 
    price: 15,
    duration: '20 min',
    description: 'Classic straight razor shave with hot towel treatment',
    icon: '🪒'
  }
];

const ServicesList = ({ onServiceSelect }) => {
  return (
    <div>
      <div style={{
        marginBottom: '2rem',
        borderBottom: '2px solid #e1e8ed',
        paddingBottom: '1rem'
      }}>
        <h2 style={{ 
          color: '#2c3e50', 
          margin: '0 0 0.5rem 0',
          fontSize: '1.75rem',
          fontWeight: '600'
        }}>
          Services Menu
        </h2>
        <p style={{ 
          color: '#6c757d',
          margin: 0,
          fontSize: '1rem'
        }}>
          Select from our premium grooming services
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 320px))',
        gap: '1.5rem',
        padding: '0.5rem',
        justifyContent: 'center',
        margin: '0 auto',
        maxWidth: '1400px'
      }}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service.name}
            price={service.price}
            icon={service.icon}
            duration={service.duration}
            description={service.description}
            onSelect={() => onServiceSelect(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
