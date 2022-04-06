import axios from "axios";
import { React, useState, useEffect } from "react";
import "../App.css"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import {IoLocationSharp} from "react-icons/io5"


function FetchUserData() {
const [fetchUser, setfetchUser] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

 const baseUrl = "https://randomuser.me/api/";
  const fetchData = async () => {
    const users = await axios(baseUrl);

    setfetchUser(users.data.results);
    console.log(users.data.results);
  };
  const clickHandle=()=>{
    fetchData()
  }

  return <div>
 {
   fetchUser.map((item)=>{   
    //  const {picture:{large},
    //   name:{title,first,last},
    //   email,phone,
    //   location:{
    //   city,country
    //   },
    // registered:{
    //   date,age
    // }=item

     return (
  
       <div key={item.login.uuid}  className="container bg-primary w-25 h-100 text-center d-flex justify-content-center">
         <img src={item.picture.large} alt="" className="d-block p-2 w-50 border border-secondary rounded-circle" />
         <div > 
           <h3>{item.name.title} {item.name.first} {item.name.last}</h3>
         <p><AiOutlineMail/> {item.email}</p>
         <p><AiOutlinePhone/> {item.phone}</p>
         <p><IoLocationSharp/> {item.location.city} {item.location.country}</p>
         <p>{item.registered.age}</p>
         <p>{item.registered.date}</p>
         <button onClick={clickHandle}>Random User</button>
</div>

         
        





         </div>
     )
   })
 }


  </div>;
}

export default FetchUserData;
