import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguagePopup from "@/components/LanguagePopup";
import PublicLayout from "@/components/layout/PublicLayout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import CitiesPricing from "./pages/CitiesPricing";
import Services from "./pages/Services";
import News from "./pages/News";
import Recruitment from "./pages/Recruitment";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/AdminLogin";
import MerchantLogin from "./pages/auth/MerchantLogin";
import DriverLogin from "./pages/auth/DriverLogin";
import MerchantRegister from "./pages/auth/MerchantRegister";
import DriverRegister from "./pages/auth/DriverRegister";
import NotFound from "./pages/NotFound";
import LiveChat from "./pages/LiveChat";

// Admin imports
import { AdminLayout } from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminOrders from "@/pages/admin/AdminOrders";
import AdminMerchants from "@/pages/admin/AdminMerchants";
import AdminDrivers from "@/pages/admin/AdminDrivers";
import AdminFinance from "@/pages/admin/AdminFinance";

// Merchant imports
import { MerchantLayout } from "@/components/merchant/MerchantLayout";
import MerchantDashboard from "@/pages/merchant/MerchantDashboard";
import MerchantCreateOrder from "@/pages/merchant/MerchantCreateOrder";
import MerchantOrders from "@/pages/merchant/MerchantOrders";
import MerchantWallet from "@/pages/merchant/MerchantWallet";
import MerchantImport from "@/pages/merchant/MerchantImport";

// Driver imports
import { DriverLayout } from "@/components/driver/DriverLayout";
import DriverOrders from "@/pages/driver/DriverOrders";
import DriverUpdateStatus from "@/pages/driver/DriverUpdateStatus";
import DriverCash from "@/pages/driver/DriverCash";
import BecomeDriver from "@/pages/driver/BecomeDriver";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Language selection popup - shows on first visit only */}
        <LanguagePopup />
        <BrowserRouter>
          <Routes>
          {/* Public Pages with shared header/footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cities" element={<CitiesPricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prices" element={<Navigate to="/cities" replace />} />
            <Route path="/driver/become" element={<BecomeDriver />} />
            <Route path="/live-chat" element={<LiveChat />} />
          </Route>

          {/* Login pages (standalone - role-specific) */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/merchant/login" element={<MerchantLogin />} />
          <Route path="/driver/login" element={<DriverLogin />} />
          
          {/* Registration pages */}
          <Route path="/merchant/register" element={<MerchantRegister />} />
          <Route path="/driver/register" element={<DriverRegister />} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="merchants" element={<AdminMerchants />} />
            <Route path="drivers" element={<AdminDrivers />} />
            <Route path="finance" element={<AdminFinance />} />
          </Route>

          {/* Merchant Dashboard Routes */}
          <Route path="/merchant" element={<MerchantLayout />}>
            <Route index element={<MerchantDashboard />} />
            <Route path="create-order" element={<MerchantCreateOrder />} />
            <Route path="orders" element={<MerchantOrders />} />
            <Route path="wallet" element={<MerchantWallet />} />
            <Route path="import" element={<MerchantImport />} />
          </Route>

          {/* Driver Dashboard Routes */}
          <Route path="/driver" element={<DriverLayout />}>
            <Route index element={<DriverOrders />} />
            <Route path="update-status" element={<DriverUpdateStatus />} />
            <Route path="cash" element={<DriverCash />} />
          </Route>

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
