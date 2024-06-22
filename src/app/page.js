'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '@/lib/actions';
import styles from "./page.module.css";
import { useEffect, useRef } from 'react';

export default function Home() {
  const [state, formAction] = useFormState(createUser, {message: '',})
  const { pending } = useFormStatus();

  const ref = useRef(null)
    useEffect(() => {
        if (state.message.indexOf('Created user') === 0) {
            ref.current?.reset()
            console.log(state.message)
        } else if (state.message) {
            console.log(state.message)
        }
    }, [state.message])
  return (
    <main className={styles.main}>
      <div className={styles.formHolder}>
        <div className={styles.leftPart}>
          <div>Sign Up</div>
        </div>
        <div className={styles.rightPart}>
          <form className={styles.form} action={formAction}>
            <div>
              <h2>Sign Up</h2>
            </div>
            <div className={styles.inputsHolder}>
              <input placeholder="first name" type="text" name="firstName" required/>
              <input placeholder="last name" type="text" name="lastName" required/>
            </div>
            <div className={styles.inputsHolder}>
              <input placeholder="email" type="email" name="email" required/>
              <input placeholder="gender" type="text" name="gender"/>
            </div>
            <div className={styles.inputsHolder}>
              <input placeholder="phone number" type="number" name="phoneNumber" required/>
              <input placeholder="DOB" type="date" name="date" />
            </div>
            <div className={styles.inputsHolder}>
              <input placeholder="password" type="password" name="password" required/>
              <input placeholder="confirm password" type="password" name="confirmPassword" required/>
            </div>
            <div className={styles.formButtonHolder}>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
