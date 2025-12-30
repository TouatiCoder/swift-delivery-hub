/**
 * ADMIN DRIVERS PAGE
 * Driver management and status tracking
 */

import { useState } from 'react';
import { Eye, MoreHorizontal, Star, Car, Bike, Truck } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { DataTable } from '@/components/shared/DataTable';
import { DriverStatusBadge } from '@/components/shared/StatusBadge';
import { FilterSelect } from '@/components/shared/FilterSelect';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mockDrivers, moroccanCities, formatCurrency, formatDateShort, Driver } from '@/data/mockData';

const vehicleIcons = {
  motorcycle: Bike,
  car: Car,
  van: Truck,
};

export default function AdminDrivers() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');

  const filteredDrivers = mockDrivers.filter((driver) => {
    const matchesStatus = statusFilter === 'all' || driver.status === statusFilter;
    const matchesCity = cityFilter === 'all' || driver.city === cityFilter;
    return matchesStatus && matchesCity;
  });

  const statusOptions = [
    { value: 'available', label: 'Available' },
    { value: 'busy', label: 'Busy' },
    { value: 'offline', label: 'Offline' },
  ];

  const cityOptions = moroccanCities.map((city) => ({
    value: city,
    label: city,
  }));

  const columns = [
    {
      key: 'name',
      header: 'Driver',
      render: (driver: Driver) => {
        const VehicleIcon = vehicleIcons[driver.vehicleType];
        return (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <VehicleIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">{driver.name}</p>
              <p className="text-xs text-muted-foreground">{driver.vehiclePlate}</p>
            </div>
          </div>
        );
      },
    },
    {
      key: 'contact',
      header: 'Contact',
      render: (driver: Driver) => (
        <div>
          <p className="text-sm">{driver.email}</p>
          <p className="text-xs text-muted-foreground">{driver.phone}</p>
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
      render: (driver: Driver) => <DriverStatusBadge status={driver.status} />,
    },
    {
      key: 'rating',
      header: 'Rating',
      render: (driver: Driver) => (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="font-medium">{driver.rating}</span>
        </div>
      ),
    },
    {
      key: 'totalDeliveries',
      header: 'Deliveries',
      render: (driver: Driver) => (
        <span className="font-medium">{driver.totalDeliveries.toLocaleString()}</span>
      ),
    },
    {
      key: 'cashCollected',
      header: 'Cash Held',
      render: (driver: Driver) => (
        <span className={driver.cashCollected > 0 ? 'font-medium text-warning' : 'text-muted-foreground'}>
          {formatCurrency(driver.cashCollected)}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '',
      render: (driver: Driver) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              View Profile
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
        title="Drivers Management"
        description="Manage delivery drivers and their status"
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

      {/* Drivers Table */}
      <DataTable
        data={filteredDrivers}
        columns={columns}
        searchable
        searchPlaceholder="Search by name or email..."
        searchKeys={['name', 'email', 'phone']}
        pageSize={10}
      />
    </div>
  );
}
