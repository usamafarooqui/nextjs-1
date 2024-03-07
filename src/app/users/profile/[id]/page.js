import React from 'react'

const Profile = ({params}) => {
    console.log(params)
  return (
    <div>Profile {params.id}</div>
  )
}

export default Profile