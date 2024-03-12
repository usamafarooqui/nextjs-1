"use client"

import { useRouter } from 'next/navigation'
import styles from '../app/css/learnCss.module.css'
import Image from 'next/image';
import pic from '../../public/img.jpg'
const UseRouter = () => {
    const router = useRouter();
    console.log(router)
  return (
    <div>UseRouter
    
    <h1 className={styles.mycolor}>hello</h1>
    <button onClick={()=> router.push('/admin')}>Click me</button>
    <Image src={pic} alt='sojethin' width={200} height={300}/>
    </div>
  )
}

export default UseRouter