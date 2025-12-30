/**
 * Auth Service Placeholder
 * 
 * This file is prepared for future Laravel API integration.
 * Currently contains mock functions only - no real authentication logic.
 * 
 * TODO: Replace mock functions with actual API calls when backend is ready.
 */

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'merchant' | 'driver';
  name: string;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

/**
 * Mock admin login
 * TODO: Replace with actual API call to Laravel backend
 */
export const adminLogin = async (email: string, password: string): Promise<LoginResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock successful login
  return {
    success: true,
    user: {
      id: '1',
      email,
      role: 'admin',
      name: 'Admin User'
    },
    token: 'mock-admin-token'
  };
};

/**
 * Mock merchant login
 * TODO: Replace with actual API call to Laravel backend
 */
export const merchantLogin = async (email: string, password: string): Promise<LoginResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    user: {
      id: '2',
      email,
      role: 'merchant',
      name: 'Merchant User'
    },
    token: 'mock-merchant-token'
  };
};

/**
 * Mock driver login
 * TODO: Replace with actual API call to Laravel backend
 */
export const driverLogin = async (email: string, password: string): Promise<LoginResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    user: {
      id: '3',
      email,
      role: 'driver',
      name: 'Driver User'
    },
    token: 'mock-driver-token'
  };
};

/**
 * Mock logout
 * TODO: Replace with actual logout logic
 */
export const logout = async (): Promise<void> => {
  // Clear local storage, cookies, etc.
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
};

/**
 * Check if user is authenticated
 * TODO: Replace with actual token validation
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('auth_token');
};

/**
 * Get current user
 * TODO: Replace with actual user fetch from API
 */
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};
