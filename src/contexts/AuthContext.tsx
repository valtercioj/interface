/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import { setCookie } from "nookies";
import { createContext, useState } from "react";
import Router from "next/router";
import { api } from "@/services/api";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => Promise<any>;
};

type SignInCredentials = {
  username: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const isAuthenticated = !!token;
  async function signIn({ username, password }: SignInCredentials) {
    try {
      const response = await api.post("autenticacao/token/", {
        username,
        password,
      });
      setCookie(undefined, "sig-token", response.data.access);

      setCookie(undefined, "sig-refreshToken", response.data.refresh);
      if (response.data.access) {
        setToken(response.data.access);
      }
      Router.push("/mainBolsista");
    } catch (error: any) {
      return error.response.status;
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
