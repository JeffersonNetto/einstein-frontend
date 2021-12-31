import api from "../helpers/http-interceptor";
import LoginResponseViewModel from "../view-models/LoginResponseViewModel";
import LoginViewModel from "../view-models/LoginViewModel";
import { CustomResponse } from "../helpers/Retorno";

const url = "/auth/entrar";

export const handleLogin = async (usuario: LoginViewModel) => {
  try {
    const { data } = await api.post<CustomResponse<LoginResponseViewModel>>(
      url,
      JSON.stringify(usuario),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (data.Dados.AccessToken) {
      localStorage.setItem("token", data.Dados.AccessToken);

      api.defaults.headers.common = {
        Authorization: `Bearer ${data.Dados.AccessToken}`,
      };
    }

    return data;
  } catch (error: any) {
    throw error.response;
  }
};

export const handleLogout = async () => {
  localStorage.removeItem("token");
  api.defaults.headers.common = {};
};
