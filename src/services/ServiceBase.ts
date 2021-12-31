import { CustomResponse } from "./../helpers/Retorno";
import api from "../helpers/http-interceptor";
import ComboBase from "../view-models/ComboBase";
import { format } from "date-fns";

export const GetCombo = async <T>(url: string) => {
  try {
    const { data } = await api.get<CustomResponse<ComboBase<T>[]>>(
      `${url}/combo`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetAll = async <T>(url: string) => {
  try {
    const { data } = await api.get<CustomResponse<T[]>>(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const Get = async <T>(url: string, id: number | string) => {
  try {
    const { data } = await api.get<CustomResponse<T>>(`${url}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const Insert = async <T>(url: string, body: T) => {
  try {
    const { data } = await api.post<CustomResponse<T>>(url, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const Update = async <T>(url: string, body: T, id?: number | string) => {
  try {
    const { data } = await api.put<CustomResponse<T>>(`${url}/${id}`, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const Delete = async <T>(url: string, id: number | string) => {
  try {
    const { data } = await api.delete<CustomResponse<T>>(`${url}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const Listar = async <T>(url: string, params: object) => {
  try {
    const { data } = await api.get<CustomResponse<T[]>>(`${url}/listar`, {
      params: params,
      paramsSerializer: (params) => objectToQueryString(params),
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const objectToQueryString = (obj: object) => {
  const query = new URLSearchParams();

  Object.entries(obj).forEach((e) => {
    if (e[1] !== undefined && e[1] !== null && e[1] !== "") {
      let value: string;
      if (e[1] instanceof Date) {
        value = format(e[1], "yyyy-MM-dd");
      } else if (typeof e[1] === "object") {
        value = JSON.stringify(e[1]);
      } else {
        value = e[1];
      }
      query.set(e[0], value);
    }
  });

  return query.toString();
};
