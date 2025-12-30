/**
 * MERCHANT LAYOUT
 */

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MerchantSidebar } from '@/components/merchant/MerchantSidebar';

export function MerchantLayout() {
  return (
    <DashboardLayout
      sidebarContent={<MerchantSidebar />}
      userRole="merchant"
      userName="Mohammed Alaoui"
    />
  );
}
