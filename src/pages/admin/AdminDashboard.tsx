/**
 * ADMIN DASHBOARD PAGE
 * Main overview with KPIs and stats
 */

import {
  Package,
  CheckCircle,
  RotateCcw,
  Clock,
  Wallet,
  TrendingUp,
  Store,
  Truck,
} from 'lucide-react';
import { StatCard } from '@/components/shared/StatCard';
import { PageHeader } from '@/components/shared/PageHeader';
import { mockAdminStats, formatCurrency, mockOrders, statusConfig } from '@/data/mockData';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { formatDate } from '@/data/mockData';

export default function AdminDashboard() {
  // Get recent orders for quick view
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        description="Monitor your logistics operations at a glance"
      />

      {/* KPI Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value={mockAdminStats.totalOrders.toLocaleString()}
          subtitle="All time orders"
          icon={Package}
          trend={{ value: 12, isPositive: true }}
          variant="default"
        />
        <StatCard
          title="Delivered"
          value={mockAdminStats.deliveredOrders.toLocaleString()}
          subtitle={`${((mockAdminStats.deliveredOrders / mockAdminStats.totalOrders) * 100).toFixed(1)}% success rate`}
          icon={CheckCircle}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Returned"
          value={mockAdminStats.returnedOrders}
          subtitle={`${((mockAdminStats.returnedOrders / mockAdminStats.totalOrders) * 100).toFixed(1)}% return rate`}
          icon={RotateCcw}
          trend={{ value: 2, isPositive: false }}
          variant="warning"
        />
        <StatCard
          title="Pending"
          value={mockAdminStats.pendingOrders}
          subtitle="Awaiting pickup"
          icon={Clock}
          variant="accent"
        />
      </div>

      {/* Financial Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total COD Collected"
          value={formatCurrency(mockAdminStats.totalCOD)}
          icon={Wallet}
          variant="accent"
        />
        <StatCard
          title="Revenue"
          value={formatCurrency(mockAdminStats.totalRevenue)}
          subtitle="Delivery fees earned"
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Active Merchants"
          value={mockAdminStats.activeMerchants}
          icon={Store}
        />
        <StatCard
          title="Active Drivers"
          value={mockAdminStats.activeDrivers}
          icon={Truck}
        />
      </div>

      {/* Recent Orders */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tracking #</th>
                <th>Merchant</th>
                <th>Customer</th>
                <th>City</th>
                <th>Status</th>
                <th>COD</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="font-mono text-sm">{order.trackingNumber}</td>
                  <td>{order.merchantName}</td>
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
