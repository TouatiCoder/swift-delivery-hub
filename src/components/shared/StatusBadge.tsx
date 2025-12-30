/**
 * STATUS BADGE COMPONENT
 * Displays order status with appropriate colors
 */

import { cn } from '@/lib/utils';
import { OrderStatus, statusConfig } from '@/data/mockData';

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn('status-badge', config.className, className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}

// Driver status badge
type DriverStatus = 'available' | 'busy' | 'offline';

const driverStatusConfig: Record<DriverStatus, { label: string; className: string }> = {
  available: { label: 'Available', className: 'status-delivered' },
  busy: { label: 'Busy', className: 'status-processing' },
  offline: { label: 'Offline', className: 'status-cancelled' },
};

interface DriverStatusBadgeProps {
  status: DriverStatus;
  className?: string;
}

export function DriverStatusBadge({ status, className }: DriverStatusBadgeProps) {
  const config = driverStatusConfig[status];
  
  return (
    <span className={cn('status-badge', config.className, className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}

// Merchant status badge
type MerchantStatus = 'active' | 'inactive' | 'pending';

const merchantStatusConfig: Record<MerchantStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'status-delivered' },
  inactive: { label: 'Inactive', className: 'status-cancelled' },
  pending: { label: 'Pending', className: 'status-pending' },
};

interface MerchantStatusBadgeProps {
  status: MerchantStatus;
  className?: string;
}

export function MerchantStatusBadge({ status, className }: MerchantStatusBadgeProps) {
  const config = merchantStatusConfig[status];
  
  return (
    <span className={cn('status-badge', config.className, className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
