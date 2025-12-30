/**
 * MERCHANT SIDEBAR NAVIGATION
 */

import {
  LayoutDashboard,
  PlusCircle,
  Package,
  Wallet,
  FileSpreadsheet,
} from 'lucide-react';
import { SidebarNavLink } from '@/components/layout/SidebarNavLink';

export function MerchantSidebar() {
  return (
    <div className="space-y-1">
      <SidebarNavLink to="/merchant" icon={LayoutDashboard} label="Dashboard" end />
      <SidebarNavLink to="/merchant/create-order" icon={PlusCircle} label="Create Order" />
      <SidebarNavLink to="/merchant/orders" icon={Package} label="My Orders" />
      <SidebarNavLink to="/merchant/wallet" icon={Wallet} label="Wallet" />
      <SidebarNavLink to="/merchant/import" icon={FileSpreadsheet} label="Import Orders" />
    </div>
  );
}
