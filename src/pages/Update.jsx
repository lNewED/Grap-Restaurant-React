import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

const Update = () => {
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    Img: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const {restaurantId} = useParams();
  console.log(restaurantId);
  const handleChange = (e) => {
    setRestaurants((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  useEffect(() => {
    const fetchAllRestaurants = async () => {
        try {
            const res = await axios.get(
                `${URL}/restaurant/${restaurantId}`,config
            );
            setRestaurants(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    fetchAllRestaurants();
  }, [restaurantId]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/restaurant/${restaurantId}`, restaurant, config);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 justify-cintent-center">
          <h5 className="card-header"> Add New Restaurant</h5>
          <div className="error">{error && "Something went wrong !!"}</div>
          <div className="card-body">
            <form>
              <div className="from-group">
                <label htmlFor="name">Restaurant Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Restaurant name"
                  onChange={handleChange}
                  value={restaurant.name}
                />
              </div>

              <div className="from-group">
                <label htmlFor="name">Restaurant type</label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="Restaurant type"
                  onChange={handleChange}
                  value={restaurant.type}
                />
              </div>

              <div className="from-group">
                <label htmlFor="name">Restaurant img</label>
                <input
                  type="text"
                  className="form-control"
                  name="Img"
                  placeholder="Restaurant img"
                  onChange={handleChange}
                  value={restaurant.Img}
                />
              </div>

              <Link to="" className="btn btn-warning" onClick={handleClick}>
                Update
              </Link>
              {""}
              <Link to="/" className="btn btn-danger" >
                Cancle
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
