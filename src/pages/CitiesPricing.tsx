/**
 * CITIES & DELIVERY PRICES PAGE
 * Display Moroccan cities with delivery pricing
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, ArrowLeft, Truck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/data/mockData';

// City pricing interface
interface CityPricing {
  id: string;
  city: string;
  region: string;
  deliveryPrice: number;
  estimatedTime: string;
  zone: 'urban' | 'suburban' | 'remote';
}

// Mock city pricing data for Morocco
const cityPricingData: CityPricing[] = [
  { id: '1', city: 'Casablanca', region: 'Grand Casablanca', deliveryPrice: 35, estimatedTime: '24-48h', zone: 'urban' },
  { id: '2', city: 'Rabat', region: 'Rabat-Salé-Kénitra', deliveryPrice: 40, estimatedTime: '24-48h', zone: 'urban' },
  { id: '3', city: 'Salé', region: 'Rabat-Salé-Kénitra', deliveryPrice: 40, estimatedTime: '24-48h', zone: 'urban' },
  { id: '4', city: 'Kénitra', region: 'Rabat-Salé-Kénitra', deliveryPrice: 42, estimatedTime: '24-48h', zone: 'urban' },
  { id: '5', city: 'Marrakech', region: 'Marrakech-Safi', deliveryPrice: 45, estimatedTime: '24-72h', zone: 'urban' },
  { id: '6', city: 'Fes', region: 'Fès-Meknès', deliveryPrice: 45, estimatedTime: '24-72h', zone: 'urban' },
  { id: '7', city: 'Meknès', region: 'Fès-Meknès', deliveryPrice: 45, estimatedTime: '24-72h', zone: 'urban' },
  { id: '8', city: 'Tangier', region: 'Tanger-Tétouan-Al Hoceïma', deliveryPrice: 50, estimatedTime: '48-72h', zone: 'urban' },
  { id: '9', city: 'Tétouan', region: 'Tanger-Tétouan-Al Hoceïma', deliveryPrice: 50, estimatedTime: '48-72h', zone: 'urban' },
  { id: '10', city: 'Agadir', region: 'Souss-Massa', deliveryPrice: 55, estimatedTime: '48-72h', zone: 'urban' },
  { id: '11', city: 'Oujda', region: 'Oriental', deliveryPrice: 55, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '12', city: 'El Jadida', region: 'Casablanca-Settat', deliveryPrice: 45, estimatedTime: '24-48h', zone: 'suburban' },
  { id: '13', city: 'Mohammedia', region: 'Casablanca-Settat', deliveryPrice: 38, estimatedTime: '24h', zone: 'urban' },
  { id: '14', city: 'Beni Mellal', region: 'Béni Mellal-Khénifra', deliveryPrice: 50, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '15', city: 'Nador', region: 'Oriental', deliveryPrice: 55, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '16', city: 'Settat', region: 'Casablanca-Settat', deliveryPrice: 42, estimatedTime: '24-48h', zone: 'suburban' },
  { id: '17', city: 'Berrechid', region: 'Casablanca-Settat', deliveryPrice: 40, estimatedTime: '24h', zone: 'suburban' },
  { id: '18', city: 'Safi', region: 'Marrakech-Safi', deliveryPrice: 50, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '19', city: 'Khouribga', region: 'Béni Mellal-Khénifra', deliveryPrice: 48, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '20', city: 'Taza', region: 'Fès-Meknès', deliveryPrice: 52, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '21', city: 'Al Hoceïma', region: 'Tanger-Tétouan-Al Hoceïma', deliveryPrice: 60, estimatedTime: '72h+', zone: 'remote' },
  { id: '22', city: 'Laâyoune', region: 'Laâyoune-Sakia El Hamra', deliveryPrice: 75, estimatedTime: '72-96h', zone: 'remote' },
  { id: '23', city: 'Dakhla', region: 'Dakhla-Oued Ed-Dahab', deliveryPrice: 85, estimatedTime: '96h+', zone: 'remote' },
  { id: '24', city: 'Ouarzazate', region: 'Drâa-Tafilalet', deliveryPrice: 65, estimatedTime: '72h+', zone: 'remote' },
  { id: '25', city: 'Errachidia', region: 'Drâa-Tafilalet', deliveryPrice: 65, estimatedTime: '72h+', zone: 'remote' },
  { id: '26', city: 'Essaouira', region: 'Marrakech-Safi', deliveryPrice: 55, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '27', city: 'Larache', region: 'Tanger-Tétouan-Al Hoceïma', deliveryPrice: 52, estimatedTime: '48-72h', zone: 'suburban' },
  { id: '28', city: 'Guelmim', region: 'Guelmim-Oued Noun', deliveryPrice: 70, estimatedTime: '72-96h', zone: 'remote' },
  { id: '29', city: 'Chefchaouen', region: 'Tanger-Tétouan-Al Hoceïma', deliveryPrice: 58, estimatedTime: '48-72h', zone: 'remote' },
  { id: '30', city: 'Ifrane', region: 'Fès-Meknès', deliveryPrice: 55, estimatedTime: '48-72h', zone: 'suburban' },
];

// Zone badge styling
const zoneStyles = {
  urban: 'bg-success/15 text-success',
  suburban: 'bg-info/15 text-info',
  remote: 'bg-warning/15 text-warning',
};

const zoneLabels = {
  urban: 'Urban',
  suburban: 'Suburban',
  remote: 'Remote',
};

const CitiesPricing = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter cities based on search
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return cityPricingData;
    
    const query = searchQuery.toLowerCase();
    return cityPricingData.filter(
      (city) =>
        city.city.toLowerCase().includes(query) ||
        city.region.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">
              LM
            </div>
            <div>
              <h1 className="font-bold text-lg">LastMile</h1>
              <p className="text-[10px] text-muted-foreground leading-none">Delivery Morocco</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/cities" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Cities & Prices
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/merchant">Login</Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/merchant">Become a Merchant</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Cities & Delivery Prices
              </h1>
              <p className="text-lg text-muted-foreground">
                Transparent pricing for all Moroccan cities. Prices include pickup, delivery, and COD handling.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-xl">
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-accent mb-1">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold">{cityPricingData.length}</div>
                <div className="text-xs text-muted-foreground">Cities Covered</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-accent mb-1">
                  <Truck className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold">35 MAD</div>
                <div className="text-xs text-muted-foreground">Starting From</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-accent mb-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-xs text-muted-foreground">Fastest Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="py-12">
          <div className="container">
            {/* Search */}
            <div className="relative max-w-md mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search cities or regions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${zoneStyles.urban}`}>
                  Urban
                </span>
                <span className="text-muted-foreground">Major cities with fastest delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${zoneStyles.suburban}`}>
                  Suburban
                </span>
                <span className="text-muted-foreground">Secondary cities</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${zoneStyles.remote}`}>
                  Remote
                </span>
                <span className="text-muted-foreground">Extended delivery time</span>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">City</TableHead>
                      <TableHead className="font-semibold">Region</TableHead>
                      <TableHead className="font-semibold">Zone</TableHead>
                      <TableHead className="font-semibold text-right">Delivery Price</TableHead>
                      <TableHead className="font-semibold text-right">Est. Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCities.map((city) => (
                      <TableRow key={city.id} className="hover:bg-muted/30">
                        <TableCell className="font-medium">{city.city}</TableCell>
                        <TableCell className="text-muted-foreground">{city.region}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${zoneStyles[city.zone]}`}>
                            {zoneLabels[city.zone]}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-accent">
                          {formatCurrency(city.deliveryPrice)}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          <div className="flex items-center justify-end gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {city.estimatedTime}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-border">
                {filteredCities.map((city) => (
                  <div key={city.id} className="p-4 hover:bg-muted/30">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold">{city.city}</div>
                        <div className="text-sm text-muted-foreground">{city.region}</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${zoneStyles[city.zone]}`}>
                        {zoneLabels[city.zone]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {city.estimatedTime}
                      </div>
                      <div className="font-semibold text-accent">
                        {formatCurrency(city.deliveryPrice)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No results */}
              {filteredCities.length === 0 && (
                <div className="p-12 text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="font-medium">No cities found</p>
                  <p className="text-sm">Try adjusting your search query</p>
                </div>
              )}
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredCities.length} of {cityPricingData.length} cities
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Shipping?</h2>
              <p className="text-muted-foreground mb-6">
                Join LastMile today and get competitive rates for all your deliveries across Morocco.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/merchant">Become a Merchant</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 LastMile Delivery Morocco. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/cities" className="hover:text-accent transition-colors">Cities & Prices</Link>
            <Link to="/merchant" className="hover:text-accent transition-colors">Merchant Portal</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CitiesPricing;
