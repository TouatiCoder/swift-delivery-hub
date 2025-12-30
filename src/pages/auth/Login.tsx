/**
 * LOGIN PAGE
 * UI-only authentication page with placeholder form
 * Ready to be connected to Laravel REST API
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  /**
   * Handle form submission
   * Currently redirects to appropriate dashboard based on mock role
   * TODO: Connect to Laravel API for real authentication
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock login logic - redirect based on email pattern
    if (formData.email.includes('admin')) {
      toast({ title: 'Welcome Admin!', description: 'Redirecting to admin dashboard...' });
      navigate('/admin');
    } else if (formData.email.includes('driver')) {
      toast({ title: 'Welcome Driver!', description: 'Redirecting to driver dashboard...' });
      navigate('/driver');
    } else {
      toast({ title: 'Welcome Merchant!', description: 'Redirecting to merchant dashboard...' });
      navigate('/merchant');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 flex-col justify-between">
        <div>
          <Link to="/" className="flex items-center gap-3 text-primary-foreground">
            <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Package className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold">SwiftDelivery</span>
          </Link>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary-foreground leading-tight">
            Streamline your deliveries across Morocco
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Join thousands of merchants and drivers using our platform for fast, reliable last-mile delivery services.
          </p>
          
          {/* Feature highlights */}
          <div className="grid gap-4 pt-6">
            {[
              'Real-time order tracking',
              'Cash on delivery support',
              'Coverage in 50+ Moroccan cities',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-primary-foreground/60 text-sm">
          © 2024 SwiftDelivery. All rights reserved.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden text-center">
            <Link to="/" className="inline-flex items-center gap-3 text-primary">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <Package className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">SwiftDelivery</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
            <p className="mt-2 text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    className="text-sm text-accent hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2">
            <p className="text-sm font-medium text-foreground">Demo Credentials</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Admin: <code className="text-accent">admin@demo.com</code></p>
              <p>• Merchant: <code className="text-accent">merchant@demo.com</code></p>
              <p>• Driver: <code className="text-accent">driver@demo.com</code></p>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/" className="text-accent font-medium hover:underline">
              Become a Merchant
            </Link>
          </p>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
