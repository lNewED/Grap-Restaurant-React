import { useEffect, useState, } from 'react';
import axios from 'axios';
import Card from '../component/Card';



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

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await axios.get(`${URL}/Food`,config)
                setRestaurants(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllRestaurants();
    }, []);

    return <div>
        <h1>Restaurant</h1>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {restaurants.map((restaurant) => (
        <Card restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
    
    </div>
};

export default Restaurant;