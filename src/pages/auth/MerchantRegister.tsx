import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Store, User, Mail, Phone, Globe, Package, Lock, CheckCircle, Truck, ArrowRight, ArrowLeft } from "lucide-react";
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
// import { registerMerchant } from "@/services/authService";

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

const monthlyOrdersOptions = [
  { value: "1-50", label: "1 - 50 orders/month" },
  { value: "51-200", label: "51 - 200 orders/month" },
  { value: "201-500", label: "201 - 500 orders/month" },
  { value: "501-1000", label: "501 - 1000 orders/month" },
  { value: "1000+", label: "1000+ orders/month" },
];

export default function MerchantRegister() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    storeName: "",
    fullName: "",
    email: "",
    phone: "",
    city: "",
    website: "",
    monthlyOrders: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.storeName.trim()) {
      newErrors.storeName = "Store name is required";
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.city) {
      newErrors.city = "Please select a city";
    }
    if (!formData.monthlyOrders) {
      newErrors.monthlyOrders = "Please select estimated orders";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // await registerMerchant(formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Request Submitted!",
        description: "Your request has been submitted. Our team will contact you.",
      });

      // Redirect to merchant login
      setTimeout(() => {
        navigate("/merchant/login");
      }, 2000);
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex">
      {/* Left Panel - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">DeliveryPro</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Become a Merchant</h1>
            <p className="mt-2 text-muted-foreground">
              Start delivering to your customers today
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {step > 1 ? <CheckCircle className="w-5 h-5" /> : "1"}
              </div>
              <span className={`text-sm ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>
                Business Info
              </span>
            </div>
            <div className="w-12 h-0.5 bg-muted">
              <div className={`h-full transition-all ${step >= 2 ? "bg-primary w-full" : "w-0"}`} />
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                2
              </div>
              <span className={`text-sm ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>
                Account Info
              </span>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 1 && (
                <>
                  {/* Store Name */}
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Store Name *</Label>
                    <div className="relative">
                      <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="storeName"
                        placeholder="Your store name"
                        className={`pl-10 ${errors.storeName ? "border-destructive" : ""}`}
                        value={formData.storeName}
                        onChange={(e) => updateField("storeName", e.target.value)}
                      />
                    </div>
                    {errors.storeName && <p className="text-sm text-destructive">{errors.storeName}</p>}
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        className={`pl-10 ${errors.fullName ? "border-destructive" : ""}`}
                        value={formData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                      />
                    </div>
                    {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                      </div>
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+212 6XX XXX XXX"
                          className={`pl-10 ${errors.phone ? "border-destructive" : ""}`}
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* City & Monthly Orders Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>City *</Label>
                      <Select value={formData.city} onValueChange={(v) => updateField("city", v)}>
                        <SelectTrigger className={errors.city ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select city" />
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

                    <div className="space-y-2">
                      <Label>Estimated Monthly Orders *</Label>
                      <Select value={formData.monthlyOrders} onValueChange={(v) => updateField("monthlyOrders", v)}>
                        <SelectTrigger className={errors.monthlyOrders ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          {monthlyOrdersOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.monthlyOrders && <p className="text-sm text-destructive">{errors.monthlyOrders}</p>}
                    </div>
                  </div>

                  {/* Website (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="website">Store Website (Optional)</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="website"
                        placeholder="https://yourstore.com"
                        className="pl-10"
                        value={formData.website}
                        onChange={(e) => updateField("website", e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleNext}
                    className="w-full h-12 text-base"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Minimum 8 characters"
                        className={`pl-10 ${errors.password ? "border-destructive" : ""}`}
                        value={formData.password}
                        onChange={(e) => updateField("password", e.target.value)}
                      />
                    </div>
                    {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Repeat your password"
                        className={`pl-10 ${errors.confirmPassword ? "border-destructive" : ""}`}
                        value={formData.confirmPassword}
                        onChange={(e) => updateField("confirmPassword", e.target.value)}
                      />
                    </div>
                    {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
                  </div>

                  {/* Summary */}
                  <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
                    <h4 className="font-medium text-foreground">Registration Summary</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><span className="font-medium">Store:</span> {formData.storeName}</p>
                      <p><span className="font-medium">Name:</span> {formData.fullName}</p>
                      <p><span className="font-medium">Email:</span> {formData.email}</p>
                      <p><span className="font-medium">City:</span> {formData.city}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 h-12"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 h-12 text-base"
                    >
                      {isLoading ? "Submitting..." : "Request Access"}
                    </Button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/merchant/login" className="text-primary font-medium hover:underline">
                  Sign In
                </Link>
              </p>
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

      {/* Right Panel - Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-center">
        <div className="max-w-md mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Why Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Join hundreds of successful merchants who trust DeliveryPro for their delivery operations.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Same-Day Delivery</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Fast and reliable delivery across all major cities
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Store className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Easy Integration</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Connect your store in minutes with our simple dashboard
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">COD Collection</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Secure cash on delivery with fast settlements
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              🚀 Get started in 24 hours after approval
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
