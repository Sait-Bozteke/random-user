import axios from 'axios'
import {React,useState,useEffect} from 'react'

function FetchUserData() {
  const baseUrl="https://randomuser.me/api/"
  const [fetchUser, setfetchUser] = useState([])
useEffect(() => {
 const fetchData=async()=>{
   const users=await axios(baseUrl)

setfetchUser(users)
console.log(users);
 }
fetchData()
  
}, [])


  return (
    <div>FetchUserData</div>
  )
}

export default FetchUserData