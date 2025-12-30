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
    <div className="min-h-screen bg-slate-900 flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 p-12 flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Truck className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-white">DeliveryPro</span>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Admin Control Center</h2>
              <p className="text-slate-400">Complete system oversight and management</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-slate-400 text-sm">Active Merchants</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-3xl font-bold text-white">1,200+</p>
              <p className="text-slate-400 text-sm">Daily Deliveries</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-slate-400 text-sm">Active Drivers</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-slate-400 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
        
        <p className="text-slate-500 text-sm">
          © 2024 DeliveryPro. Secure Admin Access.
        </p>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-900">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-white">DeliveryPro</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Admin Login</h1>
            <p className="mt-2 text-slate-400">
              Access the administration dashboard
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
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
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
