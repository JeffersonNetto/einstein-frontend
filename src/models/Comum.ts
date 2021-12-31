export default interface Comum<T> {
  Id: T;
  Ip: string;
  Ativo: boolean;
  DataCriacao?: Date;
  UsuarioCriacaoId?: string;
  DataAlteracao?: Date;
  UsuarioAlteracaoId?: string;
}
