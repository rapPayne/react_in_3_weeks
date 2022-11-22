import { login as repoLogin } from './repository';

export const login = (username: string, password: string): Promise<any> => {
  return repoLogin(username, password)
}
