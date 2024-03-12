"use client"

import { useRouter } from 'next/navigation'
import styles from '../app/css/learnCss.module.css'
const UseRouter = () => {
    const router = useRouter();
    console.log(router)
  return (
    <div>UseRouter
    
    <h1 className={styles.mycolor}>hello</h1>
    <button onClick={()=> router.push('/admin')}>Click me</button>
    </div>
  )
}

export default UseRouter