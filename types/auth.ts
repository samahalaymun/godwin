import { RedirectableRoute } from "./navigation";

export type LoginFormData = {
  email: string;
  password: string;
};
export type SighnUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
};
// export type AuthStackParamList = {
//   Login:
//     | { redirectTo?: string; redirectParams?: Record<string, any> }
//     | undefined;
//   Register:
//     | { redirectTo?: string; redirectParams?: Record<string, any> }
//     | undefined;
// };

export interface LoginParams {
  redirectTo?: RedirectableRoute;
  redirectParams?: any;
}