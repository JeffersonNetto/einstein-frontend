import FormaPagamento from "../models/FormaPagamento";
import { Delete, Get, GetAll, GetCombo, Insert, Update } from "./ServiceBase";

const url = "/formapagamento";

const FormaPagamentoService = {
  GetAll: async () => {
    return await GetAll<FormaPagamento>(url);
  },
  Get: async (id: string | number) => {
    return await Get<FormaPagamento>(url, id);
  },
  Insert: async (body: FormaPagamento) => {
    return await Insert(url, body);
  },
  Update: async (body: FormaPagamento, id: string | number) => {
    return await Update(url, body, id);
  },
  Delete: async (id: string | number) => {
    return await Delete(url, id);
  },
  GetCombo: async () => {
    return await GetCombo<number>(url);
  },
};

export default FormaPagamentoService;
