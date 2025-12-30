import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MapPin, Truck, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/auth/LoginForm";
import { driverLogin } from "@/services/authService";

// Route guard placeholder
// TODO: Add actual route protection when backend is integrated
// import { useAuth } from "@/hooks/useAuth";
// if (isAuthenticated && user?.role === 'driver') redirect to orders

export default function DriverLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock login - replace with actual API call
      await driverLogin(email, password);
      
      toast({
        title: "Welcome!",
        description: "Loading your orders...",
      });
      
      // Mock redirect to driver orders
      navigate("/driver/orders");
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
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/80 flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-14 h-14 bg-primary-foreground rounded-2xl flex items-center justify-center shadow-lg">
            <Truck className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-primary-foreground">DeliveryPro Driver</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-background rounded-t-[2rem] p-6 pt-10">
        <div className="max-w-sm mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">Welcome Back!</h2>
            <p className="mt-2 text-muted-foreground">
              Sign in to view your deliveries
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <MapPin className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Active Orders</p>
              <p className="text-lg font-bold text-foreground">12</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <Clock className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Today</p>
              <p className="text-lg font-bold text-foreground">8</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <Truck className="w-5 h-5 mx-auto text-primary mb-1" />
              <p className="text-xs text-muted-foreground">Completed</p>
              <p className="text-lg font-bold text-foreground">156</p>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <LoginForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              showPhoneField={true}
              buttonText="Start Delivering"
              buttonClassName="bg-primary hover:bg-primary/90 h-14 text-lg rounded-xl"
            />
          </div>

          {/* Help Section */}
          <div className="text-center space-y-4 pt-4">
            <button 
              className="text-primary font-medium text-sm"
              onClick={() => {
                toast({
                  title: "Support",
                  description: "Contact support at support@deliverypro.com",
                });
              }}
            >
              Need help? Contact Support
            </button>
            
            <div className="pt-4 border-t border-border">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Safe Area for Mobile */}
      <div className="h-6 bg-background" />
    </div>
  );
}
