/**
 * MERCHANT DASHBOARD PAGE
 */

import { Package, CheckCircle, RotateCcw, Clock, Wallet, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/shared/StatCard';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';
import { mockMerchantStats, mockOrders, formatCurrency, formatDate } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

export default function MerchantDashboard() {
  const navigate = useNavigate();
  
  // Filter orders for current merchant (mock: merchantId = '1')
  const merchantOrders = mockOrders.filter((o) => o.merchantId === '1').slice(0, 5);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Merchant Dashboard"
        description="Overview of your delivery orders and wallet"
        action={
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => navigate('/merchant/create-order')}
          >
            Create New Order
          </Button>
        }
      />

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Orders"
          value={mockMerchantStats.totalOrders}
          subtitle="All time orders"
          icon={Package}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Delivered"
          value={mockMerchantStats.deliveredOrders}
          subtitle={`${((mockMerchantStats.deliveredOrders / mockMerchantStats.totalOrders) * 100).toFixed(1)}% success rate`}
          icon={CheckCircle}
          variant="success"
        />
        <StatCard
          title="Pending"
          value={mockMerchantStats.pendingOrders}
          subtitle="Awaiting pickup"
          icon={Clock}
          variant="accent"
        />
      </div>

      {/* Wallet Overview */}
      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          title="Wallet Balance"
          value={formatCurrency(mockMerchantStats.walletBalance)}
          subtitle="Available for payout"
          icon={Wallet}
          variant="success"
        />
        <StatCard
          title="Pending Payout"
          value={formatCurrency(mockMerchantStats.pendingPayout)}
          subtitle="Processing"
          icon={TrendingUp}
          variant="warning"
        />
      </div>

      {/* Recent Orders */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <Button variant="link" onClick={() => navigate('/merchant/orders')}>
            View All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tracking #</th>
                <th>Customer</th>
                <th>City</th>
                <th>Status</th>
                <th>COD</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {merchantOrders.map((order) => (
                <tr key={order.id}>
                  <td className="font-mono text-sm">{order.trackingNumber}</td>
                  <td>{order.customerName}</td>
                  <td>{order.city}</td>
                  <td>
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="font-medium">{formatCurrency(order.codAmount)}</td>
                  <td className="text-muted-foreground text-sm">
                    {formatDate(order.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
