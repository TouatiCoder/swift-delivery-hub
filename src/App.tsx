import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Index />} />

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
  </QueryClientProvider>
);

export default App;
