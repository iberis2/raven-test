import { useForm } from 'react-hook-form'
import Email from '../components/SignUp/Email'
import { FormValueType } from '../types/SignUpTypes'
import Password from '../components/SignUp/Password'
import PasswordCheck from '../components/SignUp/PasswordCheck'
import styles from './SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../api/user'

export default function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors, isSubmitting },
    getValues,
  } = useForm<FormValueType>({ mode: 'onChange' })

  const submitSignUp = async (data: FormValueType) => {
    const response = await signUp(data)
    if (response === 'success') {
      navigate('/signin')
    }
  }

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(data => submitSignUp(data))}>
      <Email register={register} dirtyFields={dirtyFields} errors={errors} />
      <Password register={register} dirtyFields={dirtyFields} errors={errors} />
      <PasswordCheck
        register={register}
        dirtyFields={dirtyFields}
        errors={errors}
        getValues={getValues}
      />
      <button type='submit' className={styles.submitBtn} disabled={isSubmitting}>
        회원가입
      </button>
      <Link to='/signin' className={styles.goSignIin}>
        로그인 하러 가기
      </Link>
    </form>
  )
}
