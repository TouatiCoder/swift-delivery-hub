/**
 * DRIVER ASSIGNED ORDERS PAGE (Mobile-first)
 */

import { MapPin, Phone, Package } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { mockOrders, formatCurrency, mockDriverStats } from '@/data/mockData';
import { StatCard } from '@/components/shared/StatCard';

export default function DriverOrders() {
  // Filter assigned orders for current driver (mock: driverId = '1')
  const assignedOrders = mockOrders.filter(
    (o) => o.driverId === '1' && !['delivered', 'returned', 'cancelled'].includes(o.status)
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Assigned Orders"
        description={`${assignedOrders.length} orders to deliver`}
      />

      {/* Quick Stats */}
      <div className="grid gap-4 grid-cols-2">
        <StatCard
          title="Today's Deliveries"
          value={mockDriverStats.completedToday}
          icon={Package}
          variant="success"
        />
        <StatCard
          title="Pending"
          value={assignedOrders.length}
          icon={Package}
          variant="accent"
        />
      </div>

      {/* Orders List (Mobile-friendly cards) */}
      <div className="space-y-3">
        {assignedOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-xl border border-border bg-card p-4 space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-sm text-muted-foreground">{order.trackingNumber}</p>
                <p className="font-semibold mt-1">{order.customerName}</p>
              </div>
              <StatusBadge status={order.status} />
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span>{order.customerAddress}, {order.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${order.customerPhone}`} className="text-accent">{order.customerPhone}</a>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-sm text-muted-foreground">COD Amount</span>
              <span className="font-bold text-lg">{formatCurrency(order.codAmount)}</span>
            </div>
          </div>
        ))}

        {assignedOrders.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No orders assigned currently
          </div>
        )}
      </div>
    </div>
  );
}
