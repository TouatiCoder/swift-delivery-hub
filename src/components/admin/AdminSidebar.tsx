/**
 * ADMIN SIDEBAR NAVIGATION
 * Navigation menu for admin dashboard
 */

import {
  LayoutDashboard,
  Package,
  Store,
  Truck,
  Wallet,
} from 'lucide-react';
import { SidebarNavLink } from '@/components/layout/SidebarNavLink';

export function AdminSidebar() {
  return (
    <div className="space-y-1">
      <SidebarNavLink to="/admin" icon={LayoutDashboard} label="Dashboard" end />
      <SidebarNavLink to="/admin/orders" icon={Package} label="Orders" />
      <SidebarNavLink to="/admin/merchants" icon={Store} label="Merchants" />
      <SidebarNavLink to="/admin/drivers" icon={Truck} label="Drivers" />
      <SidebarNavLink to="/admin/finance" icon={Wallet} label="Finance" />
    </div>
  );
}
