export default interface FiltroMovimentoFinanceiro {
  FormaPagamentoId?: number;
  DataMovimentoDe?: Date;
  DataMovimentoAte?: Date;
  ValorMovimentoDe?: number;
  ValorMovimentoAte?: number;
  TipoMovimentoFinanceiro?: number;
}
