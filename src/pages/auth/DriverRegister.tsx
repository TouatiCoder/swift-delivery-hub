import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Phone, MapPin, Car, CreditCard, Lock, Truck, Bike, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// TODO: Replace with actual API call when backend is ready
// import { registerDriver } from "@/services/authService";

const cities = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fes",
  "Tangier",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
];

const vehicleTypes = [
  { value: "bike", label: "Motorcycle / Bike", icon: Bike },
  { value: "car", label: "Car", icon: Car },
  { value: "van", label: "Van / Truck", icon: Truck },
];

export default function DriverRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    vehicleType: "",
    nationalId: "",
    licenseNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.city) {
      newErrors.city = "Please select a city";
    }
    if (!formData.vehicleType) {
      newErrors.vehicleType = "Please select vehicle type";
    }
    if (!formData.nationalId.trim()) {
      newErrors.nationalId = "National ID (CIN) is required";
    }
    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = "Driving license number is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Minimum 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // await registerDriver(formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Application Received!",
        description: "Your application has been received. We will contact you soon.",
      });

      // Redirect to driver login
      setTimeout(() => {
        navigate("/driver/login");
      }, 2000);
    } catch (error) {
      toast({
        title: "Application failed",
        description: "Something went wrong. Please try again.",
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
        <h1 className="mt-4 text-2xl font-bold text-primary-foreground">Join Our Team</h1>
        <p className="mt-1 text-primary-foreground/80">Become a DeliveryPro Driver</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-background rounded-t-[2rem] p-6 pt-8 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="fullName"
                  placeholder="Your full name"
                  className={`pl-10 h-12 text-base ${errors.fullName ? "border-destructive" : ""}`}
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                />
              </div>
              {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+212 6XX XXX XXX"
                  className={`pl-10 h-12 text-base ${errors.phone ? "border-destructive" : ""}`}
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label>City *</Label>
              <Select value={formData.city} onValueChange={(v) => updateField("city", v)}>
                <SelectTrigger className={`h-12 text-base ${errors.city ? "border-destructive" : ""}`}>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <SelectValue placeholder="Select your city" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
            </div>

            {/* Vehicle Type */}
            <div className="space-y-2">
              <Label>Vehicle Type *</Label>
              <div className="grid grid-cols-3 gap-3">
                {vehicleTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.vehicleType === type.value;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => updateField("vehicleType", type.value)}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      } ${errors.vehicleType ? "border-destructive" : ""}`}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-xs font-medium ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                        {type.label.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.vehicleType && <p className="text-sm text-destructive">{errors.vehicleType}</p>}
            </div>

            {/* National ID & License */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nationalId">National ID (CIN) *</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="nationalId"
                    placeholder="XX123456"
                    className={`pl-10 h-12 text-base ${errors.nationalId ? "border-destructive" : ""}`}
                    value={formData.nationalId}
                    onChange={(e) => updateField("nationalId", e.target.value)}
                  />
                </div>
                {errors.nationalId && <p className="text-sm text-destructive">{errors.nationalId}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber">License Number *</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="licenseNumber"
                    placeholder="License #"
                    className={`pl-10 h-12 text-base ${errors.licenseNumber ? "border-destructive" : ""}`}
                    value={formData.licenseNumber}
                    onChange={(e) => updateField("licenseNumber", e.target.value)}
                  />
                </div>
                {errors.licenseNumber && <p className="text-sm text-destructive">{errors.licenseNumber}</p>}
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Min 8 characters"
                    className={`pl-10 h-12 text-base ${errors.password ? "border-destructive" : ""}`}
                    value={formData.password}
                    onChange={(e) => updateField("password", e.target.value)}
                  />
                </div>
                {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repeat password"
                    className={`pl-10 h-12 text-base ${errors.confirmPassword ? "border-destructive" : ""}`}
                    value={formData.confirmPassword}
                    onChange={(e) => updateField("confirmPassword", e.target.value)}
                  />
                </div>
                {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
              <h4 className="font-medium text-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Why Join Us?
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                <li>• Flexible working hours</li>
                <li>• Competitive pay per delivery</li>
                <li>• Weekly payments</li>
              </ul>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 text-lg rounded-xl"
            >
              {isLoading ? "Submitting..." : "Apply as Driver"}
            </Button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/driver/login" className="text-primary font-medium hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center pb-4">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
