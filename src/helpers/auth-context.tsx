import { createContext, useContext, useEffect, useState } from "react";
import api from "../helpers/http-interceptor";
import { obterJwt } from "./jwt-decoder";

interface IAuthContext {
  authenticated?: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  role?: string;
  setRole: (role: string) => void;
  usuarioLogadoId?: string;
  setUsuarioLogadoId: (id: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  setAuthenticated: (authenticated) => authenticated,
  setRole: (role) => role,
  setUsuarioLogadoId: (usuarioLogadoId) => usuarioLogadoId,
});

function AuthProvider({ children }: { children: JSX.Element }) {
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [usuarioLogadoId, setUsuarioLogadoId] = useState<string>();
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common = { Authorization: `Bearer ${token}` };

      const jwt = obterJwt(token);

      setRole(jwt.role);
      setUsuarioLogadoId(jwt.sub);
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        authenticated,
        setAuthenticated,
        usuarioLogadoId,
        setUsuarioLogadoId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
