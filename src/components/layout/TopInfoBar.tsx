/**
 * TopInfoBar Component
 * Yellow info bar at the top of the page with quick action links
 * Matches OzonExpress.ma design
 */

import { Link } from 'react-router-dom';
import { 
  Truck, 
  Users, 
  Phone, 
  MapPin, 
  Headphones 
} from 'lucide-react';

const TopInfoBar = () => {
  // Quick action links data
  const infoLinks = [
    { 
      icon: Truck, 
      label: 'Devenir Livreur', 
      href: '/driver/become' 
    },
    { 
      icon: Users, 
      label: 'Rejoignez notre équipe', 
      href: '/recruitment' 
    },
    { 
      icon: Phone, 
      label: 'Appeler maintenant', 
      href: 'tel:+212520000000' 
    },
    { 
      icon: MapPin, 
      label: 'Trouver un point de service', 
      href: '/contact' 
    },
    { 
      icon: Headphones, 
      label: 'Contact et support', 
      href: '/contact' 
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-2 md:gap-4">
          {/* Info links - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center gap-6">
            {infoLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="info-bar-link"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile: Show only key links */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/driver/become" className="info-bar-link">
              <Truck className="h-4 w-4" />
              <span>Devenir Livreur</span>
            </Link>
            <Link to="/contact" className="info-bar-link">
              <Headphones className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;