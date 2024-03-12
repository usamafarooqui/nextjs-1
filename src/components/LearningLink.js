import Link from 'next/link'
import React from 'react'

const LearningLink = () => {
    const id = 4;

  return (
    <div>Go to flah page 
    
    <div> <Link href="/admin/dashboard">Go to Admin page</Link></div>
    <h1>To another page</h1>
    <Link href={`/users/profile/${id}`}> User page</Link>
    </div>
  )
}

export default LearningLink