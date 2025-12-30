/**
 * ADMIN ORDERS PAGE
 * Order management with filters and search
 */

import { useState } from 'react';
import { Eye, MoreHorizontal, UserPlus } from 'lucide-react';
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
import {
  mockOrders,
  moroccanCities,
  formatCurrency,
  formatDate,
  Order,
} from '@/data/mockData';

export default function AdminOrders() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');

  // Filter orders based on selected filters
  const filteredOrders = mockOrders.filter((order) => {
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesCity = cityFilter === 'all' || order.city === cityFilter;
    return matchesStatus && matchesCity;
  });

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'picked_up', label: 'Picked Up' },
    { value: 'in_delivery', label: 'In Delivery' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'returned', label: 'Returned' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  const cityOptions = moroccanCities.map((city) => ({
    value: city,
    label: city,
  }));

  const columns = [
    {
      key: 'trackingNumber',
      header: 'Tracking #',
      render: (order: Order) => (
        <span className="font-mono text-sm">{order.trackingNumber}</span>
      ),
    },
    {
      key: 'merchantName',
      header: 'Merchant',
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
        <span className="text-muted-foreground italic">Unassigned</span>
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
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus className="mr-2 h-4 w-4" />
              Assign Driver
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
        title="Orders Management"
        description="View and manage all delivery orders"
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
        <FilterSelect
          label="City"
          value={cityFilter}
          options={cityOptions}
          onChange={setCityFilter}
          placeholder="All Cities"
        />
      </div>

      {/* Orders Table */}
      <DataTable
        data={filteredOrders}
        columns={columns}
        searchable
        searchPlaceholder="Search by tracking number or customer..."
        searchKeys={['trackingNumber', 'customerName', 'merchantName']}
        pageSize={8}
      />
    </div>
  );
}
