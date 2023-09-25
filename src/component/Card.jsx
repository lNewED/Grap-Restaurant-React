import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { config } from "dotenv";




const Card = ({restaurant}) => {
  const URL = import.meta.env.VITE_CYCLIC_URL //ตั้งชื่อในไฟล์ dotENV ควรเป็นตัวใหญ่ และ ต้องขึ้นต้นด้วย VITE เพราะเรา ใช้Reacy ร่วมกับ VITE
const USERNAME = import.meta.env.VITE_CYCLIC_USERNAME
const PASSWORD = import.meta.env.VITE_CYCLIC_PASSWORD

console.log(URL);
console.log(USERNAME);
console.log(PASSWORD);


const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};
 
   const handelDelect = async () => { 
    console.log(`${URL}/Food/${restaurant.id}`);
    try {
      await axios.delete(`${URL}/Food/${restaurant.id}`,config);
      window.location.reload()
    }catch (error) {
      console.error(error);
    }
   }



    return (
        <div className="card" style={{ width: "18rem" }} key={restaurant.id}>
          <img src={restaurant.Img} alt="" className="card-img-top" />
    
          <div className="card-body">
            <h5 className="title">{restaurant.name}</h5>
            <p className="card-text">{restaurant.type}</p>
            <Link to="" className="btn btn-danger px-2" onClick={(handelDelect)}>
              Delete
            </Link>
            <Link to={`/UpdateJung/${restaurant.id}`} className="btn btn-warning px-2">
              Edit
            </Link>
          </div>
        </div>
      );
    };

export default Card ;