/**
 * ADMIN FINANCE PAGE
 * COD overview and payout management
 */

import { useState } from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCw, TrendingUp } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatCard } from '@/components/shared/StatCard';
import { DataTable } from '@/components/shared/DataTable';
import { FilterSelect } from '@/components/shared/FilterSelect';
import { Button } from '@/components/ui/button';
import { mockTransactions, formatCurrency, formatDate, Transaction } from '@/data/mockData';
import { cn } from '@/lib/utils';

const transactionTypeConfig = {
  cod_collection: { label: 'COD Collection', icon: ArrowDownLeft, className: 'text-success' },
  payout: { label: 'Payout', icon: ArrowUpRight, className: 'text-destructive' },
  fee: { label: 'Service Fee', icon: TrendingUp, className: 'text-muted-foreground' },
  refund: { label: 'Refund', icon: RefreshCw, className: 'text-warning' },
};

const transactionStatusConfig = {
  completed: { label: 'Completed', className: 'status-delivered' },
  pending: { label: 'Pending', className: 'status-pending' },
  failed: { label: 'Failed', className: 'status-returned' },
};

export default function AdminFinance() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTransactions = mockTransactions.filter((tx) => {
    const matchesType = typeFilter === 'all' || tx.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
    return matchesType && matchesStatus;
  });

  // Calculate totals
  const totalCollected = mockTransactions
    .filter((t) => t.type === 'cod_collection' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalPayouts = mockTransactions
    .filter((t) => t.type === 'payout' && t.status === 'completed')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  
  const pendingPayouts = mockTransactions
    .filter((t) => t.type === 'payout' && t.status === 'pending')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const typeOptions = [
    { value: 'cod_collection', label: 'COD Collection' },
    { value: 'payout', label: 'Payout' },
    { value: 'fee', label: 'Service Fee' },
    { value: 'refund', label: 'Refund' },
  ];

  const statusOptions = [
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
    { value: 'failed', label: 'Failed' },
  ];

  const columns = [
    {
      key: 'type',
      header: 'Type',
      render: (tx: Transaction) => {
        const config = transactionTypeConfig[tx.type];
        const Icon = config.icon;
        return (
          <div className="flex items-center gap-2">
            <div className={cn('flex h-8 w-8 items-center justify-center rounded-lg bg-muted', config.className)}>
              <Icon className="h-4 w-4" />
            </div>
            <span className="font-medium">{config.label}</span>
          </div>
        );
      },
    },
    {
      key: 'description',
      header: 'Description',
      render: (tx: Transaction) => (
        <div>
          <p className="text-sm">{tx.description}</p>
          {tx.reference && (
            <p className="text-xs text-muted-foreground font-mono">{tx.reference}</p>
          )}
        </div>
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (tx: Transaction) => (
        <span className={cn(
          'font-semibold',
          tx.amount >= 0 ? 'text-success' : 'text-destructive'
        )}>
          {tx.amount >= 0 ? '+' : ''}{formatCurrency(tx.amount)}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (tx: Transaction) => {
        const config = transactionStatusConfig[tx.status];
        return (
          <span className={cn('status-badge', config.className)}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {config.label}
          </span>
        );
      },
    },
    {
      key: 'createdAt',
      header: 'Date',
      render: (tx: Transaction) => (
        <span className="text-muted-foreground text-sm">
          {formatDate(tx.createdAt)}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Finance & Settlements"
        description="Manage COD collections and merchant payouts"
        action={
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Process Payouts
          </Button>
        }
      />

      {/* Financial Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total COD Collected"
          value={formatCurrency(totalCollected)}
          icon={ArrowDownLeft}
          variant="success"
        />
        <StatCard
          title="Total Payouts"
          value={formatCurrency(totalPayouts)}
          icon={ArrowUpRight}
          variant="default"
        />
        <StatCard
          title="Pending Payouts"
          value={formatCurrency(pendingPayouts)}
          icon={Wallet}
          variant="warning"
        />
        <StatCard
          title="Net Balance"
          value={formatCurrency(totalCollected - totalPayouts)}
          icon={TrendingUp}
          variant="accent"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <FilterSelect
          label="Type"
          value={typeFilter}
          options={typeOptions}
          onChange={setTypeFilter}
          placeholder="All Types"
        />
        <FilterSelect
          label="Status"
          value={statusFilter}
          options={statusOptions}
          onChange={setStatusFilter}
          placeholder="All Statuses"
        />
      </div>

      {/* Transactions Table */}
      <DataTable
        data={filteredTransactions}
        columns={columns}
        searchable
        searchPlaceholder="Search transactions..."
        searchKeys={['description', 'reference']}
        pageSize={10}
      />
    </div>
  );
}
