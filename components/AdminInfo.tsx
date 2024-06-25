import React from 'react'

type Info = {
    username: string;
    email: string;
    age:number;
    location:string[];
    admin:string;
  }
const AdminInfo = ({username,email,age,location,admin}:Info) => {
  return (
    <div>
          <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
      </ul>
    </div>
  )
}

export default AdminInfo