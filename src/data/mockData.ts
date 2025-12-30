/**
 * MOCK DATA FOR LAST-MILE DELIVERY SAAS
 * This file contains all mock data used across dashboards
 * Replace with real API calls when connecting to backend
 */

// Types
export interface Order {
  id: string;
  trackingNumber: string;
  merchantId: string;
  merchantName: string;
  driverId?: string;
  driverName?: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  city: string;
  status: OrderStatus;
  codAmount: number;
  deliveryFee: number;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'picked_up'
  | 'in_delivery'
  | 'delivered'
  | 'returned'
  | 'cancelled';

export interface Merchant {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  status: 'active' | 'inactive' | 'pending';
  totalOrders: number;
  walletBalance: number;
  joinedAt: string;
}

export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicleType: 'motorcycle' | 'car' | 'van';
  vehiclePlate: string;
  city: string;
  status: 'available' | 'busy' | 'offline';
  totalDeliveries: number;
  rating: number;
  cashCollected: number;
  joinedAt: string;
}

export interface Transaction {
  id: string;
  type: 'cod_collection' | 'payout' | 'fee' | 'refund';
  amount: number;
  description: string;
  status: 'completed' | 'pending' | 'failed';
  createdAt: string;
  reference?: string;
}

export interface DashboardStats {
  totalOrders: number;
  deliveredOrders: number;
  returnedOrders: number;
  pendingOrders: number;
  totalCOD: number;
  totalRevenue: number;
  activeMerchants: number;
  activeDrivers: number;
}

// Cities in Morocco
export const moroccanCities = [
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Fes',
  'Tangier',
  'Agadir',
  'Meknes',
  'Oujda',
  'Kenitra',
  'Tetouan',
];

// Status labels and colors mapping
export const statusConfig: Record<OrderStatus, { label: string; className: string }> = {
  pending: { label: 'Pending', className: 'status-pending' },
  picked_up: { label: 'Picked Up', className: 'status-processing' },
  in_delivery: { label: 'In Delivery', className: 'status-processing' },
  delivered: { label: 'Delivered', className: 'status-delivered' },
  returned: { label: 'Returned', className: 'status-returned' },
  cancelled: { label: 'Cancelled', className: 'status-cancelled' },
};

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: '1',
    trackingNumber: 'LMD-2024-001',
    merchantId: '1',
    merchantName: 'Moroccan Electronics',
    driverId: '1',
    driverName: 'Youssef Alami',
    customerName: 'Ahmed Ben Hassan',
    customerPhone: '+212 6 12 34 56 78',
    customerAddress: '123 Avenue Mohammed V, Apt 4B',
    city: 'Casablanca',
    status: 'delivered',
    codAmount: 1500,
    deliveryFee: 35,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T14:45:00Z',
  },
  {
    id: '2',
    trackingNumber: 'LMD-2024-002',
    merchantId: '1',
    merchantName: 'Moroccan Electronics',
    driverId: '2',
    driverName: 'Karim Fassi',
    customerName: 'Fatima Zahra Ouali',
    customerPhone: '+212 6 23 45 67 89',
    customerAddress: '45 Rue de la Liberté',
    city: 'Rabat',
    status: 'in_delivery',
    codAmount: 850,
    deliveryFee: 40,
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-01-15T13:00:00Z',
  },
  {
    id: '3',
    trackingNumber: 'LMD-2024-003',
    merchantId: '2',
    merchantName: 'Fashion Maroc',
    driverId: '1',
    driverName: 'Youssef Alami',
    customerName: 'Omar El Idrissi',
    customerPhone: '+212 6 34 56 78 90',
    customerAddress: '78 Boulevard Zerktouni',
    city: 'Casablanca',
    status: 'pending',
    codAmount: 2200,
    deliveryFee: 35,
    createdAt: '2024-01-15T09:15:00Z',
    updatedAt: '2024-01-15T09:15:00Z',
    notes: 'Call before delivery',
  },
  {
    id: '4',
    trackingNumber: 'LMD-2024-004',
    merchantId: '3',
    merchantName: 'Beauty Store MA',
    customerName: 'Salma Bennani',
    customerPhone: '+212 6 45 67 89 01',
    customerAddress: '12 Rue Ibn Batouta',
    city: 'Marrakech',
    status: 'pending',
    codAmount: 450,
    deliveryFee: 45,
    createdAt: '2024-01-15T12:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z',
  },
  {
    id: '5',
    trackingNumber: 'LMD-2024-005',
    merchantId: '2',
    merchantName: 'Fashion Maroc',
    driverId: '3',
    driverName: 'Hassan Tazi',
    customerName: 'Nadia El Amrani',
    customerPhone: '+212 6 56 78 90 12',
    customerAddress: '56 Avenue des FAR',
    city: 'Tangier',
    status: 'returned',
    codAmount: 1800,
    deliveryFee: 50,
    createdAt: '2024-01-14T08:30:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    notes: 'Customer refused - wrong size',
  },
  {
    id: '6',
    trackingNumber: 'LMD-2024-006',
    merchantId: '1',
    merchantName: 'Moroccan Electronics',
    driverId: '2',
    driverName: 'Karim Fassi',
    customerName: 'Rachid Bouazza',
    customerPhone: '+212 6 67 89 01 23',
    customerAddress: '34 Quartier Industriel',
    city: 'Fes',
    status: 'picked_up',
    codAmount: 3500,
    deliveryFee: 55,
    createdAt: '2024-01-15T07:00:00Z',
    updatedAt: '2024-01-15T11:30:00Z',
  },
  {
    id: '7',
    trackingNumber: 'LMD-2024-007',
    merchantId: '4',
    merchantName: 'Home Decor Plus',
    driverId: '1',
    driverName: 'Youssef Alami',
    customerName: 'Laila Chraibi',
    customerPhone: '+212 6 78 90 12 34',
    customerAddress: '89 Rue Sebou',
    city: 'Kenitra',
    status: 'delivered',
    codAmount: 1200,
    deliveryFee: 40,
    createdAt: '2024-01-14T14:00:00Z',
    updatedAt: '2024-01-14T18:00:00Z',
  },
  {
    id: '8',
    trackingNumber: 'LMD-2024-008',
    merchantId: '3',
    merchantName: 'Beauty Store MA',
    customerName: 'Soukaina Moussaoui',
    customerPhone: '+212 6 89 01 23 45',
    customerAddress: '23 Avenue Hassan II',
    city: 'Agadir',
    status: 'pending',
    codAmount: 680,
    deliveryFee: 50,
    createdAt: '2024-01-15T13:30:00Z',
    updatedAt: '2024-01-15T13:30:00Z',
  },
];

// Mock Merchants
export const mockMerchants: Merchant[] = [
  {
    id: '1',
    companyName: 'Moroccan Electronics',
    contactName: 'Mohammed Alaoui',
    email: 'contact@moroccanelectronics.ma',
    phone: '+212 5 22 34 56 78',
    address: '150 Boulevard Anfa',
    city: 'Casablanca',
    status: 'active',
    totalOrders: 456,
    walletBalance: 45600,
    joinedAt: '2023-06-15T00:00:00Z',
  },
  {
    id: '2',
    companyName: 'Fashion Maroc',
    contactName: 'Khadija Benali',
    email: 'info@fashionmaroc.ma',
    phone: '+212 5 37 45 67 89',
    address: '78 Rue des Consuls',
    city: 'Rabat',
    status: 'active',
    totalOrders: 289,
    walletBalance: 23450,
    joinedAt: '2023-08-22T00:00:00Z',
  },
  {
    id: '3',
    companyName: 'Beauty Store MA',
    contactName: 'Sara El Mansouri',
    email: 'hello@beautystore.ma',
    phone: '+212 5 24 56 78 90',
    address: '45 Gueliz Center',
    city: 'Marrakech',
    status: 'active',
    totalOrders: 178,
    walletBalance: 12800,
    joinedAt: '2023-10-10T00:00:00Z',
  },
  {
    id: '4',
    companyName: 'Home Decor Plus',
    contactName: 'Amine Rachidi',
    email: 'sales@homedecorplus.ma',
    phone: '+212 5 39 67 89 01',
    address: '12 Zone Industrielle',
    city: 'Tangier',
    status: 'pending',
    totalOrders: 45,
    walletBalance: 3200,
    joinedAt: '2024-01-05T00:00:00Z',
  },
  {
    id: '5',
    companyName: 'Sports Zone',
    contactName: 'Yassine Berrada',
    email: 'contact@sportszone.ma',
    phone: '+212 5 35 78 90 12',
    address: '67 Avenue Mohammed VI',
    city: 'Fes',
    status: 'inactive',
    totalOrders: 89,
    walletBalance: 0,
    joinedAt: '2023-04-18T00:00:00Z',
  },
];

// Mock Drivers
export const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'Youssef Alami',
    email: 'youssef.alami@email.com',
    phone: '+212 6 11 22 33 44',
    vehicleType: 'motorcycle',
    vehiclePlate: 'A-12345',
    city: 'Casablanca',
    status: 'busy',
    totalDeliveries: 1234,
    rating: 4.8,
    cashCollected: 5600,
    joinedAt: '2023-03-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Karim Fassi',
    email: 'karim.fassi@email.com',
    phone: '+212 6 22 33 44 55',
    vehicleType: 'car',
    vehiclePlate: 'B-67890',
    city: 'Rabat',
    status: 'available',
    totalDeliveries: 856,
    rating: 4.6,
    cashCollected: 3200,
    joinedAt: '2023-05-15T00:00:00Z',
  },
  {
    id: '3',
    name: 'Hassan Tazi',
    email: 'hassan.tazi@email.com',
    phone: '+212 6 33 44 55 66',
    vehicleType: 'van',
    vehiclePlate: 'C-11223',
    city: 'Tangier',
    status: 'available',
    totalDeliveries: 567,
    rating: 4.9,
    cashCollected: 1800,
    joinedAt: '2023-07-20T00:00:00Z',
  },
  {
    id: '4',
    name: 'Said Benjelloun',
    email: 'said.benjelloun@email.com',
    phone: '+212 6 44 55 66 77',
    vehicleType: 'motorcycle',
    vehiclePlate: 'D-44556',
    city: 'Marrakech',
    status: 'offline',
    totalDeliveries: 234,
    rating: 4.5,
    cashCollected: 0,
    joinedAt: '2023-09-10T00:00:00Z',
  },
  {
    id: '5',
    name: 'Mehdi Ouazzani',
    email: 'mehdi.ouazzani@email.com',
    phone: '+212 6 55 66 77 88',
    vehicleType: 'motorcycle',
    vehiclePlate: 'E-77889',
    city: 'Fes',
    status: 'busy',
    totalDeliveries: 445,
    rating: 4.7,
    cashCollected: 2400,
    joinedAt: '2023-08-05T00:00:00Z',
  },
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'cod_collection',
    amount: 1500,
    description: 'COD collected for order LMD-2024-001',
    status: 'completed',
    createdAt: '2024-01-15T14:45:00Z',
    reference: 'LMD-2024-001',
  },
  {
    id: '2',
    type: 'payout',
    amount: -25000,
    description: 'Weekly payout to Moroccan Electronics',
    status: 'completed',
    createdAt: '2024-01-14T10:00:00Z',
    reference: 'PAY-2024-001',
  },
  {
    id: '3',
    type: 'fee',
    amount: -35,
    description: 'Delivery fee for order LMD-2024-001',
    status: 'completed',
    createdAt: '2024-01-15T14:45:00Z',
    reference: 'LMD-2024-001',
  },
  {
    id: '4',
    type: 'cod_collection',
    amount: 1200,
    description: 'COD collected for order LMD-2024-007',
    status: 'completed',
    createdAt: '2024-01-14T18:00:00Z',
    reference: 'LMD-2024-007',
  },
  {
    id: '5',
    type: 'payout',
    amount: -15000,
    description: 'Weekly payout to Fashion Maroc',
    status: 'pending',
    createdAt: '2024-01-15T09:00:00Z',
    reference: 'PAY-2024-002',
  },
  {
    id: '6',
    type: 'refund',
    amount: -1800,
    description: 'Refund for returned order LMD-2024-005',
    status: 'completed',
    createdAt: '2024-01-15T10:30:00Z',
    reference: 'LMD-2024-005',
  },
];

// Dashboard Stats
export const mockAdminStats: DashboardStats = {
  totalOrders: 1456,
  deliveredOrders: 1189,
  returnedOrders: 78,
  pendingOrders: 189,
  totalCOD: 458900,
  totalRevenue: 52340,
  activeMerchants: 45,
  activeDrivers: 28,
};

export const mockMerchantStats = {
  totalOrders: 289,
  deliveredOrders: 245,
  returnedOrders: 12,
  pendingOrders: 32,
  walletBalance: 23450,
  pendingPayout: 8500,
};

export const mockDriverStats = {
  assignedOrders: 8,
  completedToday: 12,
  cashCollected: 3200,
  pendingCash: 1850,
  rating: 4.8,
};

// Helper function to format currency (MAD)
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateString));
};

// Helper to format date only
export const formatDateShort = (dateString: string): string => {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString));
};
