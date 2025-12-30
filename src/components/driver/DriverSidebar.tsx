/**
 * DRIVER SIDEBAR NAVIGATION
 */

import { Package, RefreshCw, Wallet } from 'lucide-react';
import { SidebarNavLink } from '@/components/layout/SidebarNavLink';

export function DriverSidebar() {
  return (
    <div className="space-y-1">
      <SidebarNavLink to="/driver" icon={Package} label="Assigned Orders" end />
      <SidebarNavLink to="/driver/update-status" icon={RefreshCw} label="Update Status" />
      <SidebarNavLink to="/driver/cash" icon={Wallet} label="Cash Collected" />
    </div>
  );
}
