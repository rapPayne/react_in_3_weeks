import { login as repoLogin, register as repoRegister } from './repository';

export const login = (username: string, password: string): Promise<any> => {
  return repoLogin(username, password)
}

export const register = (user: any): Promise<any> => {
  return repoRegister(user)
}

