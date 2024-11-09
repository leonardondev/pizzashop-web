import { isAxiosError } from 'axios'

import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  try {
    await api.post('/authenticate', { email })
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      throw new Error('Credenciais inválidas.')
    }

    throw error
  }
}
