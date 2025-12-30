/**
 * MERCHANT WALLET PAGE
 * Balance and transaction history
 */

import { ArrowUpRight, ArrowDownLeft, Wallet, TrendingUp } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatCard } from '@/components/shared/StatCard';
import { Button } from '@/components/ui/button';
import { mockMerchantStats, mockTransactions, formatCurrency, formatDate } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function MerchantWallet() {
  // Filter transactions for merchant context
  const merchantTransactions = mockTransactions.slice(0, 6);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Wallet"
        description="View your balance and transaction history"
        action={
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Request Payout
          </Button>
        }
      />

      {/* Balance Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Available Balance"
          value={formatCurrency(mockMerchantStats.walletBalance)}
          subtitle="Ready for payout"
          icon={Wallet}
          variant="success"
        />
        <StatCard
          title="Pending Payout"
          value={formatCurrency(mockMerchantStats.pendingPayout)}
          subtitle="Processing"
          icon={TrendingUp}
          variant="warning"
        />
        <StatCard
          title="Total Earned"
          value={formatCurrency(mockMerchantStats.walletBalance + mockMerchantStats.pendingPayout + 45000)}
          subtitle="All time earnings"
          icon={ArrowDownLeft}
          variant="accent"
        />
      </div>

      {/* Transaction History */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
        
        <div className="space-y-3">
          {merchantTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  tx.amount >= 0 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                )}>
                  {tx.amount >= 0 ? (
                    <ArrowDownLeft className="h-5 w-5" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(tx.createdAt)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn(
                  'font-semibold',
                  tx.amount >= 0 ? 'text-success' : 'text-destructive'
                )}>
                  {tx.amount >= 0 ? '+' : ''}{formatCurrency(tx.amount)}
                </p>
                <p className={cn(
                  'text-xs capitalize',
                  tx.status === 'completed' ? 'text-success' : 
                  tx.status === 'pending' ? 'text-warning' : 'text-destructive'
                )}>
                  {tx.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
