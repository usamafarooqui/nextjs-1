"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const UseRouter = () => {
    const router = useRouter();
    console.log(router)
  return (
    <div>UseRouter
    
    <h1>hello</h1>
    <button onClick={()=> router.push('/admin')}>Click me</button>
    </div>
  )
}

export default UseRouter