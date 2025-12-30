/**
 * DRIVER LAYOUT
 */

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DriverSidebar } from '@/components/driver/DriverSidebar';

export function DriverLayout() {
  return (
    <DashboardLayout
      sidebarContent={<DriverSidebar />}
      userRole="driver"
      userName="Youssef Alami"
    />
  );
}
