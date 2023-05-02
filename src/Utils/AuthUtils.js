import AuthApi from "../Api/AuthApi";

const AuthUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem("tokenMadinaShopWeb");
    if (!token) return false;
    try {
      const res = await AuthApi.verifyToken();
      return res.user;
    } catch {
      return false;
    }
  },
};

export default AuthUtils;
