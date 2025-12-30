/**
 * MERCHANT ORDERS LIST PAGE
 */

import { useState } from 'react';
import { Eye, MoreHorizontal } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { DataTable } from '@/components/shared/DataTable';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { FilterSelect } from '@/components/shared/FilterSelect';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mockOrders, formatCurrency, formatDate, Order } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

export default function MerchantOrders() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter orders for current merchant (mock: merchantId = '1')
  const merchantOrders = mockOrders.filter((o) => {
    const isMerchantOrder = o.merchantId === '1';
    const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
    return isMerchantOrder && matchesStatus;
  });

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'picked_up', label: 'Picked Up' },
    { value: 'in_delivery', label: 'In Delivery' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'returned', label: 'Returned' },
  ];

  const columns = [
    {
      key: 'trackingNumber',
      header: 'Tracking #',
      render: (order: Order) => (
        <span className="font-mono text-sm">{order.trackingNumber}</span>
      ),
    },
    {
      key: 'customerName',
      header: 'Customer',
      render: (order: Order) => (
        <div>
          <p className="font-medium">{order.customerName}</p>
          <p className="text-xs text-muted-foreground">{order.customerPhone}</p>
        </div>
      ),
    },
    {
      key: 'city',
      header: 'City',
    },
    {
      key: 'status',
      header: 'Status',
      render: (order: Order) => <StatusBadge status={order.status} />,
    },
    {
      key: 'driverName',
      header: 'Driver',
      render: (order: Order) => order.driverName || (
        <span className="text-muted-foreground italic">Pending</span>
      ),
    },
    {
      key: 'codAmount',
      header: 'COD',
      render: (order: Order) => (
        <span className="font-medium">{formatCurrency(order.codAmount)}</span>
      ),
    },
    {
      key: 'createdAt',
      header: 'Date',
      render: (order: Order) => (
        <span className="text-muted-foreground text-sm">
          {formatDate(order.createdAt)}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '',
      render: (order: Order) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Track Order
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      className: 'w-12',
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Orders"
        description="Track and manage your delivery orders"
        action={
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => navigate('/merchant/create-order')}
          >
            Create Order
          </Button>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <FilterSelect
          label="Status"
          value={statusFilter}
          options={statusOptions}
          onChange={setStatusFilter}
          placeholder="All Statuses"
        />
      </div>

      {/* Orders Table */}
      <DataTable
        data={merchantOrders}
        columns={columns}
        searchable
        searchPlaceholder="Search by tracking number or customer..."
        searchKeys={['trackingNumber', 'customerName']}
        pageSize={10}
      />
    </div>
  );
}
