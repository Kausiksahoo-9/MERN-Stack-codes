import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/Kausiksahoo-9')
    .then(response=>response.json())
    .then(data=>{
      setData(data);
    })
  },[]);
  return (
    <div className='bg-gray-600 text-white m-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="pic" width={300} />
    </div>
  )
}

export default Github