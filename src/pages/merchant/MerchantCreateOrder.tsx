/**
 * MERCHANT CREATE ORDER PAGE
 * Order creation form
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { moroccanCities } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

export default function MerchantCreateOrder() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    city: '',
    codAmount: '',
    notes: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Order Created Successfully',
      description: 'Your order has been submitted and will be assigned to a driver soon.',
    });

    setIsSubmitting(false);
    navigate('/merchant/orders');
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <PageHeader
        title="Create New Order"
        description="Fill in the delivery details to create a new order"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-4">Customer Information</h3>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="customerName">Customer Name *</Label>
              <Input
                id="customerName"
                value={formData.customerName}
                onChange={(e) => handleChange('customerName', e.target.value)}
                placeholder="Enter customer name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customerPhone">Phone Number *</Label>
              <Input
                id="customerPhone"
                type="tel"
                value={formData.customerPhone}
                onChange={(e) => handleChange('customerPhone', e.target.value)}
                placeholder="+212 6XX XXX XXX"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customerAddress">Delivery Address *</Label>
            <Textarea
              id="customerAddress"
              value={formData.customerAddress}
              onChange={(e) => handleChange('customerAddress', e.target.value)}
              placeholder="Enter full delivery address"
              rows={2}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Select
              value={formData.city}
              onValueChange={(value) => handleChange('city', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {moroccanCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-4">Order Details</h3>
          
          <div className="space-y-2">
            <Label htmlFor="codAmount">COD Amount (MAD) *</Label>
            <Input
              id="codAmount"
              type="number"
              min="0"
              step="0.01"
              value={formData.codAmount}
              onChange={(e) => handleChange('codAmount', e.target.value)}
              placeholder="0.00"
              required
            />
            <p className="text-xs text-muted-foreground">
              Amount to be collected from customer on delivery
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Delivery Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Any special instructions for the driver..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/merchant/orders')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Order'}
          </Button>
        </div>
      </form>
    </div>
  );
}
