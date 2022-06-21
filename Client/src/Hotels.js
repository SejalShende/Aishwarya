import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Cart } from './components/Product/Cart';
import Axios from 'axios';
import styled from 'styled-components';
import './Products.css';
// import bannerh from './hotelb.jpg'
import './App.css';

const searchBarStyle = {
  margin: '35px',
  position: 'center',
  size: '25px',
};

export const Hotels = () => {
  const [hotelList, setHotelList] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('role'));
  console.log(admin);
  useEffect(() => {
    Axios.get('http://localhost:3001/hotels/').then((response) => {
      console.log(response.data);
      setHotelList(response.data);
    });
  }, []);

  const deleteHotel = (id) => {
    Axios.delete(`http://localhost:3001/hotels/${id}`).then((response) => {
      window.location.pathname = '/hotels';
    });
  };

  const viewHotelProducts = (id) => {
    localStorage.removeItem('hotel_name');
    localStorage.setItem('hotel_name', id);
    window.location.pathname = '/viewProducts';
  };

  return (
    <div className="container">
    {/* <div className="alert alert-danger" >{{pageError}}</div> */}
    <div className="profile-details-content">
        {/* <h1 style="font-weight: 100;">Profile</h1><br></br> */}
        <table className="table table-striped table-bordered table-light">
            <thead>
                <tr>
                    <th>Properties</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Aishwarya</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>Electronics</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>Female</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>Contact Number</td>
                    <td>987654332</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>aish16@gmail.com</td>
                </tr>
                <tr>
                    <td>Points Gained</td>
                    <td>100
                        {/* <!-- refresh button to update the points --> */}
                        {/* <button onClick="updatePoints()" className="material-icons btn btn-outline-primary">refresh</button> */}
                    </td>
                </tr>
            </tbody>
        </table>
        <br></br>
        <div  className="btn btn-primary" onClick={() =>  window.location.pathname = '/home'}>Back</div>
       
    </div>
</div>
  );
};