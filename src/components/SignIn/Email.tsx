import styles from './Label.module.css'

function Email() {
  return (
    <label htmlFor='email' className={styles.label}>
      이메일
      <input
        id='email'
        type='email'
        name='email'
        placeholder='example@example.com'
        className={styles.input}
        required
      />
    </label>
  )
}

export default Email
