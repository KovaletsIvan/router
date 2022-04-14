import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const singin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const singout = () => {
    setUser(null);
  };

  const value = { user, singin, singout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
