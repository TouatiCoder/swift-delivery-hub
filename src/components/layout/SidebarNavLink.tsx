/**
 * SIDEBAR NAV LINK COMPONENT
 * Navigation link for dashboard sidebars with active state
 */

import { NavLink as RouterNavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarNavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  end?: boolean;
}

export function SidebarNavLink({ to, icon: Icon, label, end = false }: SidebarNavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn('sidebar-link', isActive && 'active')
      }
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span>{label}</span>
    </RouterNavLink>
  );
}
