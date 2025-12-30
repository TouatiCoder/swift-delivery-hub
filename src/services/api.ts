/**
 * API SERVICE LAYER
 * This file contains Axios service placeholders for connecting to the REST API
 * Replace the mock implementations with actual API calls when backend is ready
 */

import axios from 'axios';
import {
  Order,
  Merchant,
  Driver,
  Transaction,
  DashboardStats,
  mockOrders,
  mockMerchants,
  mockDrivers,
  mockTransactions,
  mockAdminStats,
  mockMerchantStats,
  mockDriverStats,
} from '@/data/mockData';

// Base API configuration
// TODO: Replace with actual API URL when backend is ready
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    // TODO: Add authentication token when auth is implemented
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Handle specific error cases (401 unauthorized, etc.)
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// ============================================================================
// ORDERS API
// ============================================================================

export const ordersApi = {
  /**
   * Fetch all orders with optional filters
   * @param filters - Optional filters for status, city, date range
   */
  getAll: async (filters?: {
    status?: string;
    city?: string;
    merchantId?: string;
    driverId?: string;
  }): Promise<Order[]> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get('/orders', { params: filters });
    // return response.data;
    
    // Mock implementation
    let result = [...mockOrders];
    if (filters?.status) {
      result = result.filter((o) => o.status === filters.status);
    }
    if (filters?.city) {
      result = result.filter((o) => o.city === filters.city);
    }
    if (filters?.merchantId) {
      result = result.filter((o) => o.merchantId === filters.merchantId);
    }
    if (filters?.driverId) {
      result = result.filter((o) => o.driverId === filters.driverId);
    }
    return Promise.resolve(result);
  },

  /**
   * Get single order by ID
   */
  getById: async (id: string): Promise<Order | undefined> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/orders/${id}`);
    // return response.data;
    
    return Promise.resolve(mockOrders.find((o) => o.id === id));
  },

  /**
   * Create new order
   */
  create: async (orderData: Partial<Order>): Promise<Order> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.post('/orders', orderData);
    // return response.data;
    
    const newOrder: Order = {
      id: String(mockOrders.length + 1),
      trackingNumber: `LMD-2024-${String(mockOrders.length + 1).padStart(3, '0')}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...orderData,
    } as Order;
    return Promise.resolve(newOrder);
  },

  /**
   * Update order status
   */
  updateStatus: async (id: string, status: string): Promise<Order> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.patch(`/orders/${id}/status`, { status });
    // return response.data;
    
    const order = mockOrders.find((o) => o.id === id);
    if (order) {
      order.status = status as Order['status'];
      order.updatedAt = new Date().toISOString();
    }
    return Promise.resolve(order as Order);
  },

  /**
   * Assign driver to order
   */
  assignDriver: async (orderId: string, driverId: string): Promise<Order> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.patch(`/orders/${orderId}/assign`, { driverId });
    // return response.data;
    
    const order = mockOrders.find((o) => o.id === orderId);
    const driver = mockDrivers.find((d) => d.id === driverId);
    if (order && driver) {
      order.driverId = driverId;
      order.driverName = driver.name;
    }
    return Promise.resolve(order as Order);
  },
};

// ============================================================================
// MERCHANTS API
// ============================================================================

export const merchantsApi = {
  /**
   * Fetch all merchants
   */
  getAll: async (): Promise<Merchant[]> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get('/merchants');
    // return response.data;
    
    return Promise.resolve(mockMerchants);
  },

  /**
   * Get merchant by ID
   */
  getById: async (id: string): Promise<Merchant | undefined> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/merchants/${id}`);
    // return response.data;
    
    return Promise.resolve(mockMerchants.find((m) => m.id === id));
  },

  /**
   * Get merchant statistics
   */
  getStats: async (merchantId: string): Promise<typeof mockMerchantStats> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/merchants/${merchantId}/stats`);
    // return response.data;
    
    return Promise.resolve(mockMerchantStats);
  },

  /**
   * Update merchant status
   */
  updateStatus: async (id: string, status: string): Promise<Merchant> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.patch(`/merchants/${id}/status`, { status });
    // return response.data;
    
    const merchant = mockMerchants.find((m) => m.id === id);
    if (merchant) {
      merchant.status = status as Merchant['status'];
    }
    return Promise.resolve(merchant as Merchant);
  },
};

// ============================================================================
// DRIVERS API
// ============================================================================

export const driversApi = {
  /**
   * Fetch all drivers
   */
  getAll: async (): Promise<Driver[]> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get('/drivers');
    // return response.data;
    
    return Promise.resolve(mockDrivers);
  },

  /**
   * Get driver by ID
   */
  getById: async (id: string): Promise<Driver | undefined> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/drivers/${id}`);
    // return response.data;
    
    return Promise.resolve(mockDrivers.find((d) => d.id === id));
  },

  /**
   * Get driver statistics
   */
  getStats: async (driverId: string): Promise<typeof mockDriverStats> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/drivers/${driverId}/stats`);
    // return response.data;
    
    return Promise.resolve(mockDriverStats);
  },

  /**
   * Update driver status
   */
  updateStatus: async (id: string, status: string): Promise<Driver> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.patch(`/drivers/${id}/status`, { status });
    // return response.data;
    
    const driver = mockDrivers.find((d) => d.id === id);
    if (driver) {
      driver.status = status as Driver['status'];
    }
    return Promise.resolve(driver as Driver);
  },

  /**
   * Get assigned orders for driver
   */
  getAssignedOrders: async (driverId: string): Promise<Order[]> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/drivers/${driverId}/orders`);
    // return response.data;
    
    return Promise.resolve(
      mockOrders.filter(
        (o) => o.driverId === driverId && !['delivered', 'returned', 'cancelled'].includes(o.status)
      )
    );
  },
};

// ============================================================================
// FINANCE API
// ============================================================================

export const financeApi = {
  /**
   * Get all transactions
   */
  getTransactions: async (filters?: {
    type?: string;
    status?: string;
  }): Promise<Transaction[]> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get('/finance/transactions', { params: filters });
    // return response.data;
    
    let result = [...mockTransactions];
    if (filters?.type) {
      result = result.filter((t) => t.type === filters.type);
    }
    if (filters?.status) {
      result = result.filter((t) => t.status === filters.status);
    }
    return Promise.resolve(result);
  },

  /**
   * Get COD summary
   */
  getCodSummary: async (): Promise<{
    totalCollected: number;
    pendingCollection: number;
    totalPayouts: number;
  }> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get('/finance/cod-summary');
    // return response.data;
    
    return Promise.resolve({
      totalCollected: 458900,
      pendingCollection: 45600,
      totalPayouts: 380000,
    });
  },

  /**
   * Process payout to merchant
   */
  processPayout: async (merchantId: string, amount: number): Promise<Transaction> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.post('/finance/payouts', { merchantId, amount });
    // return response.data;
    
    return Promise.resolve({
      id: String(mockTransactions.length + 1),
      type: 'payout',
      amount: -amount,
      description: `Payout processed for merchant ${merchantId}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    } as Transaction);
  },
};

// ============================================================================
// DASHBOARD API
// ============================================================================

export const dashboardApi = {
  /**
   * Get admin dashboard statistics
   */
  getAdminStats: async (): Promise<DashboardStats> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get('/dashboard/admin/stats');
    // return response.data;
    
    return Promise.resolve(mockAdminStats);
  },

  /**
   * Get merchant dashboard statistics
   */
  getMerchantStats: async (merchantId: string): Promise<typeof mockMerchantStats> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/dashboard/merchant/${merchantId}/stats`);
    // return response.data;
    
    return Promise.resolve(mockMerchantStats);
  },

  /**
   * Get driver dashboard statistics
   */
  getDriverStats: async (driverId: string): Promise<typeof mockDriverStats> => {
    // TODO: Replace with actual API call
    // const response = await apiClient.get(`/dashboard/driver/${driverId}/stats`);
    // return response.data;
    
    return Promise.resolve(mockDriverStats);
  },
};

// ============================================================================
// IMPORT API
// ============================================================================

export const importApi = {
  /**
   * Upload Excel file for order import
   * Note: This is a placeholder - actual file upload would need FormData
   */
  uploadOrders: async (file: File): Promise<{ success: boolean; count: number }> => {
    // TODO: Replace with actual API call
    // const formData = new FormData();
    // formData.append('file', file);
    // const response = await apiClient.post('/import/orders', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });
    // return response.data;
    
    // Mock implementation
    return Promise.resolve({
      success: true,
      count: Math.floor(Math.random() * 50) + 10,
    });
  },
};

export default apiClient;
