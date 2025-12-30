/**
 * ADMIN MERCHANTS PAGE
 * Merchant management and profiles
 */

import { useState } from 'react';
import { Eye, MoreHorizontal, Mail, Phone, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { DataTable } from '@/components/shared/DataTable';
import { MerchantStatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { mockMerchants, formatCurrency, formatDateShort, Merchant } from '@/data/mockData';

export default function AdminMerchants() {
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null);

  const columns = [
    {
      key: 'companyName',
      header: 'Company',
      render: (merchant: Merchant) => (
        <div>
          <p className="font-medium">{merchant.companyName}</p>
          <p className="text-xs text-muted-foreground">{merchant.contactName}</p>
        </div>
      ),
    },
    {
      key: 'email',
      header: 'Contact',
      render: (merchant: Merchant) => (
        <div>
          <p className="text-sm">{merchant.email}</p>
          <p className="text-xs text-muted-foreground">{merchant.phone}</p>
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
      render: (merchant: Merchant) => <MerchantStatusBadge status={merchant.status} />,
    },
    {
      key: 'totalOrders',
      header: 'Orders',
      render: (merchant: Merchant) => (
        <span className="font-medium">{merchant.totalOrders.toLocaleString()}</span>
      ),
    },
    {
      key: 'walletBalance',
      header: 'Balance',
      render: (merchant: Merchant) => (
        <span className="font-medium text-success">
          {formatCurrency(merchant.walletBalance)}
        </span>
      ),
    },
    {
      key: 'joinedAt',
      header: 'Joined',
      render: (merchant: Merchant) => (
        <span className="text-muted-foreground text-sm">
          {formatDateShort(merchant.joinedAt)}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '',
      render: (merchant: Merchant) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSelectedMerchant(merchant)}>
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
        title="Merchants Management"
        description="Manage merchant accounts and profiles"
      />

      {/* Merchants Table */}
      <DataTable
        data={mockMerchants}
        columns={columns}
        searchable
        searchPlaceholder="Search by company or contact name..."
        searchKeys={['companyName', 'contactName', 'email']}
        pageSize={10}
      />

      {/* Merchant Profile Dialog */}
      <Dialog open={!!selectedMerchant} onOpenChange={() => setSelectedMerchant(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Merchant Profile</DialogTitle>
          </DialogHeader>
          {selectedMerchant && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="text-2xl font-bold">
                    {selectedMerchant.companyName.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{selectedMerchant.companyName}</h3>
                  <p className="text-muted-foreground">{selectedMerchant.contactName}</p>
                  <MerchantStatusBadge status={selectedMerchant.status} className="mt-2" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedMerchant.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedMerchant.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedMerchant.address}, {selectedMerchant.city}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{selectedMerchant.totalOrders}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">Wallet Balance</p>
                  <p className="text-2xl font-bold text-success">
                    {formatCurrency(selectedMerchant.walletBalance)}
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Member since {formatDateShort(selectedMerchant.joinedAt)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
