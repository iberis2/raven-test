import { FieldErrors, UseFormRegister, UseFormGetValues } from 'react-hook-form'

export type FormValueType = {
  email: string
  userNickname: string
  password: string
  passwordCheck: string
}

type DirtyFields = {
  email: boolean | undefined
  userNickname: boolean | undefined
  password: boolean | undefined
  passwordCheck: boolean | undefined
}

export interface EmailProps {
  register: UseFormRegister<FormValueType>
  dirtyFields: Partial<DirtyFields>
  errors: FieldErrors<FormValueType>
}

export interface PasswordProps extends EmailProps {
  isEdit?: string
}

export interface PasswordCheckProps extends EmailProps {
  getValues: UseFormGetValues<FormValueType>
  isEdit?: string
}
