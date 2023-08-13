import axios from './instance'
import { saveUserIdToLocalStorage } from '../lib/localStorage'

type SignInType = {
  email: FormDataEntryValue | null
  password: FormDataEntryValue | null
}

type userInfoType = {
  id: number
  email: string
  password: string
}

export const signIn = async ({ email, password }: SignInType) => {
  try {
    const response = await axios.get(`/user`)
    const userInfo = response.data.find(
      (user: userInfoType) => user.email === email && user.password === password
    )

    if (userInfo) {
      saveUserIdToLocalStorage(userInfo?.id)
      return 'success'
    }

    alert('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요')
  } catch {
    alert('로그인에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}

type SignUpType = {
  email: string
  userNickname: string
  password: string
}

export const signUp = async ({ email, password }: SignUpType) => {
  try {
    await axios.post(`/user`, {
      email,
      password,
    })

    return 'success'
  } catch {
    alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}
