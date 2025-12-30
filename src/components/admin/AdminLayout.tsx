/**
 * ADMIN LAYOUT
 * Wrapper layout for all admin pages
 */

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export function AdminLayout() {
  return (
    <DashboardLayout
      sidebarContent={<AdminSidebar />}
      userRole="admin"
      userName="Admin User"
    />
  );
}
