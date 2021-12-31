import jwt_decode from "jwt-decode";

interface Jwt {
  aud: string;
  email: string;
  exp: string;
  iat: string;
  iss: string;
  nbf: string;
  role: string;
  sub: string;
}

export const obterJwt = (token: string) => {
  const jwt: Jwt = jwt_decode(token);

  return jwt;
};
