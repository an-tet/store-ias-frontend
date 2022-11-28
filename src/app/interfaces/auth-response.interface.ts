export interface AuthResponse {
  email: string;
  username: string;
  roles: string[];
  isActive: boolean;
  firstName: string;
  lastName: string;
  token: string;
  error: any;
}
