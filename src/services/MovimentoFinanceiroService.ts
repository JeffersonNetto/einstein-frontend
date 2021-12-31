import MovimentoFinanceiro from "../models/MovimentoFinanceiro";
import FiltroMovimentoFinanceiro from "../view-models/filtros/FiltroMovimentoFinanceiro";
import {
  Delete,
  Get,
  GetAll,
  GetCombo,
  Insert,
  Update,
  Listar,
} from "./ServiceBase";

const url = "/movimentofinanceiro";

const MovimentoFinanceiroService = {
  GetAll: async () => {
    return await GetAll<MovimentoFinanceiro>(url);
  },
  Get: async (id: string | number) => {
    return await Get<MovimentoFinanceiro>(url, id);
  },
  Insert: async (body: MovimentoFinanceiro) => {
    return await Insert(url, body);
  },
  Update: async (body: MovimentoFinanceiro, id: string | number) => {
    return await Update(url, body, id);
  },
  Delete: async (id: string | number) => {
    return await Delete(url, id);
  },
  GetCombo: async () => {
    return await GetCombo<number>(url);
  },
  Listar: async (params: FiltroMovimentoFinanceiro) => {
    return await Listar<MovimentoFinanceiro>(url, params);
  },
};

export default MovimentoFinanceiroService;
