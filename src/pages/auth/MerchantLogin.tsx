import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Package, ShoppingBag, TrendingUp, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/auth/LoginForm";
import { merchantLogin } from "@/services/authService";
import { Button } from "@/components/ui/button";

// Route guard placeholder
// TODO: Add actual route protection when backend is integrated
// import { useAuth } from "@/hooks/useAuth";
// if (isAuthenticated && user?.role === 'merchant') redirect to dashboard

export default function MerchantLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock login - replace with actual API call
      await merchantLogin(email, password);
      
      toast({
        title: "Welcome back!",
        description: "Redirecting to your dashboard...",
      });
      
      // Mock redirect to merchant dashboard
      navigate("/merchant/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">DeliveryPro</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Merchant Portal</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your orders and grow your business
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <LoginForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              buttonText="Sign In"
              buttonClassName="bg-primary hover:bg-primary/90"
            />

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?
              </p>
              <Link
                to="/merchant/register"
                className="text-primary font-medium hover:underline"
              >
                Become a Merchant →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-center">
        <div className="max-w-md mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Grow Your Business With Us
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Join thousands of merchants who trust DeliveryPro for their delivery needs.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Easy Order Management</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Create and track orders with just a few clicks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Real-time Analytics</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Monitor your delivery performance and revenue
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">COD Support</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Cash on delivery with secure payment handling
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              Trusted by 500+ merchants across the region
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
