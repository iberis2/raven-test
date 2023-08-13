import { EmailProps } from '../../types/SignUpTypes'
import styles from './Form.module.css'

const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

export default function Email({ register, dirtyFields, errors }: EmailProps) {
  const {
    onChange: emailOnChange,
    onBlur: emailOnBlur,
    name: emailName,
    ref: emailRef,
  } = register('email', {
    pattern: {
      value: emailReg,
      message: '이메일 형식이 올바르지 않습니다.',
    },
    required: '이메일은 필수값입니다.',
  })

  return (
    <label className={styles.label} htmlFor='email'>
      이메일
      <div className={styles.inputErrorBox}>
        <input
          id='email'
          type='email'
          name={emailName}
          onChange={emailOnChange}
          onBlur={emailOnBlur}
          ref={emailRef}
          placeholder='이메일을 입력해주세요'
          required
          className={styles.input}
        />
        {dirtyFields.email && errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>
    </label>
  )
}
