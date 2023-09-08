export interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  gender: "male" | "female" | "other";
  birthdate: string;
}
