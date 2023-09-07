// REGISTER INTERFACE
export interface SignUp {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  birthdate: null;
}

// LOGIN INTERFACE
export interface LoginUser {
  email: string;
  password: string;
}
