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
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};
