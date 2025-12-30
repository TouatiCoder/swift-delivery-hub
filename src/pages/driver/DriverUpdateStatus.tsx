/**
 * DRIVER UPDATE STATUS PAGE
 */

import { useState } from 'react';
import { CheckCircle, Truck, Package, RotateCcw } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';
import { mockOrders, formatCurrency, OrderStatus } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const statusActions = [
  { status: 'picked_up', label: 'Picked Up', icon: Package, color: 'bg-info text-info-foreground' },
  { status: 'in_delivery', label: 'In Delivery', icon: Truck, color: 'bg-warning text-warning-foreground' },
  { status: 'delivered', label: 'Delivered', icon: CheckCircle, color: 'bg-success text-success-foreground' },
  { status: 'returned', label: 'Returned', icon: RotateCcw, color: 'bg-destructive text-destructive-foreground' },
];

export default function DriverUpdateStatus() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const activeOrders = mockOrders.filter(
    (o) => o.driverId === '1' && !['delivered', 'returned', 'cancelled'].includes(o.status)
  );

  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    toast({
      title: 'Status Updated',
      description: `Order status changed to ${newStatus.replace('_', ' ')}`,
    });
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Update Order Status" description="Select an order to update its delivery status" />

      <div className="space-y-3">
        {activeOrders.map((order) => (
          <div key={order.id} className="rounded-xl border border-border bg-card overflow-hidden">
            <button
              onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
            >
              <div>
                <p className="font-mono text-sm text-muted-foreground">{order.trackingNumber}</p>
                <p className="font-medium">{order.customerName}</p>
                <p className="text-sm text-muted-foreground">{order.city}</p>
              </div>
              <div className="text-right">
                <StatusBadge status={order.status} />
                <p className="font-bold mt-1">{formatCurrency(order.codAmount)}</p>
              </div>
            </button>

            {selectedOrder === order.id && (
              <div className="p-4 border-t border-border bg-muted/20 grid grid-cols-2 gap-2">
                {statusActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.status}
                      onClick={() => handleStatusUpdate(order.id, action.status as OrderStatus)}
                      className={cn('flex items-center gap-2', action.color)}
                    >
                      <Icon className="h-4 w-4" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {activeOrders.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">No active orders</div>
        )}
      </div>
    </div>
  );
}
