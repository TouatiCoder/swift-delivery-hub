/**
 * DRIVER CASH COLLECTED PAGE
 */

import { Wallet, TrendingUp, Clock } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatCard } from '@/components/shared/StatCard';
import { mockDriverStats, mockOrders, formatCurrency } from '@/data/mockData';

export default function DriverCash() {
  const deliveredOrders = mockOrders.filter((o) => o.driverId === '1' && o.status === 'delivered');

  return (
    <div className="space-y-6">
      <PageHeader title="Cash Collected" description="Summary of cash on delivery collections" />

      <div className="grid gap-4 grid-cols-2">
        <StatCard title="Total Collected" value={formatCurrency(mockDriverStats.cashCollected)} icon={Wallet} variant="success" />
        <StatCard title="Pending Handover" value={formatCurrency(mockDriverStats.pendingCash)} icon={Clock} variant="warning" />
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold mb-4">Recent Collections</h3>
        <div className="space-y-3">
          {deliveredOrders.slice(0, 5).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div>
                <p className="font-medium">{order.customerName}</p>
                <p className="text-xs text-muted-foreground">{order.trackingNumber}</p>
              </div>
              <span className="font-bold text-success">{formatCurrency(order.codAmount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
