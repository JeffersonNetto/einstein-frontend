import Comum from "./Comum";

export default interface User extends Comum<string> {
  UserName: string;
  Email: string;
  PhoneNumber: string;
  DataNascimento: Date | undefined;
  Sexo?: string;
  IntegracaoId?: string;
  Cpf: string;
  Nome: string;
  Sobrenome: string;
  PasswordHash: string;
}
