import { Request } from "express";

interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  contact: string;
  email: string;
  password: string;
}

interface AuthorizedRequest extends Request {
  authUser?: number;
}

export type AuthRequest = AuthorizedRequest;

interface TokenPayload {
  user_id: number;
}

export type TokenData = TokenPayload;

export type UserToInsert = Omit<User, "user_id">;

export default User;
