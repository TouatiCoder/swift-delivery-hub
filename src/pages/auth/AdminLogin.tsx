import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/auth/LoginForm";
import { adminLogin } from "@/services/authService";

// Route guard placeholder
// TODO: Add actual route protection when backend is integrated
// import { useAuth } from "@/hooks/useAuth";
// if (isAuthenticated && user?.role === 'admin') redirect to dashboard

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock login - replace with actual API call
      await adminLogin(email, password);
      
      toast({
        title: "Welcome back, Admin",
        description: "Redirecting to dashboard...",
      });
      
      // Mock redirect to admin dashboard
      navigate("/admin/dashboard");
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
    <div className="min-h-screen bg-neutral-dark flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 p-12 flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Truck className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-neutral-dark-foreground">DeliveryPro</span>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-dark-foreground">Admin Control Center</h2>
              <p className="text-neutral-dark-foreground/60">Complete system oversight and management</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="bg-neutral-dark-foreground/5 rounded-xl p-4 border border-neutral-dark-foreground/10">
              <p className="text-3xl font-bold text-neutral-dark-foreground">500+</p>
              <p className="text-neutral-dark-foreground/60 text-sm">Active Merchants</p>
            </div>
            <div className="bg-neutral-dark-foreground/5 rounded-xl p-4 border border-neutral-dark-foreground/10">
              <p className="text-3xl font-bold text-neutral-dark-foreground">1,200+</p>
              <p className="text-neutral-dark-foreground/60 text-sm">Daily Deliveries</p>
            </div>
            <div className="bg-neutral-dark-foreground/5 rounded-xl p-4 border border-neutral-dark-foreground/10">
              <p className="text-3xl font-bold text-neutral-dark-foreground">150+</p>
              <p className="text-neutral-dark-foreground/60 text-sm">Active Drivers</p>
            </div>
            <div className="bg-neutral-dark-foreground/5 rounded-xl p-4 border border-neutral-dark-foreground/10">
              <p className="text-3xl font-bold text-neutral-dark-foreground">98%</p>
              <p className="text-neutral-dark-foreground/60 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
        
        <p className="text-neutral-dark-foreground/40 text-sm">
          © 2024 DeliveryPro. Secure Admin Access.
        </p>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-neutral-dark">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-neutral-dark-foreground">DeliveryPro</span>
            </div>
            <h1 className="text-3xl font-bold text-neutral-dark-foreground">Admin Login</h1>
            <p className="mt-2 text-neutral-dark-foreground/60">
              Access the administration dashboard
            </p>
          </div>

          <div className="bg-neutral-dark-foreground/5 rounded-2xl p-8 border border-neutral-dark-foreground/10">
            <LoginForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              buttonText="Sign In to Admin Panel"
              buttonClassName="bg-primary hover:bg-primary/90"
            />
          </div>

          <div className="text-center">
            <Link 
              to="/" 
              className="text-sm text-neutral-dark-foreground/60 hover:text-neutral-dark-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
