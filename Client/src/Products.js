import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { Cart } from './components/Product/Cart';
import Axios from 'axios';
import './Products.css';
import './App.css';
// import banner from './banner.jpeg';
const searchBarStyle = {
  margin: '35px',
  position: 'center',
  size: '25px',
};

export const Products = () => {
  const [productList, setProductList] = useState([]);
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));
  let history = useHistory();

  useEffect(() => {
    Axios.get('http://localhost:3001/products/').then((response) => {
      console.log(response.data);
      console.log(response.data);
      setProductList(response.data);
    });
  }, []);
  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/products/${id}`).then((response) => {
      window.location.pathname = '/products';
    });
  };
  // // const showRecentlyLiked= () => {
  //   if (this.token != null)
  //     this.configService.getRecentlyLiked(this.token).subscribe((data) => {
  //       this.offers = data
  //     }, error => {
  //       console.log(error)
  //       this.pageError = "We encountered some error please try again later"
  //       this.showError = true;
  //     })
  // }
  const addToCart = (val) => {
    Axios.post(`http://localhost:3001/cart/`, {
      product_id: val.product_id,
      product_name: val.product_name,
      price: val.price,
      imageurl: val.imageurl,
      userId,
    })
      .then((response) => {
        toast('Added to the cart', { type: 'success' });
      })
      .catch((err) => {
        toast('Already added to the cart', { type: 'warning' });
      });
  };

  return (
    <div className="container-fluid">
    {/* <div className="alert alert-danger" *ngIf="pageError!='' && showError">
        {{pageError}}
        <button className="material-icons" style="float:right" onClick="closebar()">close</button>
    </div> */}
    <div className="row">
        {/* <!--left pane--> */}
        <div className="col-lg-3 col-md-3 col-sm-12" id="left-pane">
            <div className="d-flex flex-column">
                <div className="p-2 "><div className="btn btn-outline-primary" onClick={() =>  window.location.pathname = '/profile'}> My Profile</div></div>
                <div className="p-2 "><div className="btn btn-outline-primary" onClick={() =>  window.location.pathname = '/addOffer'}>Post an offer</div></div>
                <div className='p-2'><div className="btn btn-outline-primary" onClick={() =>  window.location.pathname = '/myOffers'}>My offers</div></div>
                <div className="p-2 "><div className="btn btn-outline-primary" 
                
                // onClick={showRecentlyLiked}
                
                >view recently liked offers</div></div>
            </div>
        </div>

        {/* <!--right pane--> */}
        <div className="col-lg-9 col-md-9 col-sm-12 " id="right-pane " style={{paddingTop:20}}>

            {/* <!-- options --> */}
            <div className="d-flex flex-row justify-content-between sub-con"   >

                {/* <!-- filter by category--> */}
                <div className="p-2 ">
                    <select className="form-control" >
                    
                     {/* (change)="onCategoryChange()" */}
                     
                        <option selected>Filter by category</option>
                        <option>Electronics</option>
                        <option>Plants</option>
                        <option>Furniture</option>
                        <option>Accessories</option>
                    </select>
                </div>

                {/* <!-- filter by top likes--> */}
                <div className="p-2 ">
                    <button className="btn btn-outline-primary" >Filter by top likes</button>
                </div>

                {/* <!-- filter by posted date--> */}
                <div className='p-2'>
                    <div className='input-group'>
                        {/* <input type='text' className='form-control' placeholder="filter by posted-date" > */}
                        <div className="input-group-append ">
                            <button className="btn btn-outline-primary" >search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- offers--> */}
            {/* <div className="row" style="width:90%;margin:auto">
                <div  className="offer-content">
                    <h6 className="card-title " style="background:rgba(7, 135, 194, 0.993);color:white;padding:10px; ">{{offer.name}}</h6>
                    <p className="card-text ">
                        <div className="d-flex flex-column ">
                            <div className="p-2 "><b>Posted on</b>: {{offer.openDate | date:'longDate'}}</div>
                            <div className="p-2 "><b>Engaged</b>: {{offer.engagedDate==null && offer.closedDate == null?'not yet':'engaged'}}
                            </div>
                            <div className="p-2"><b>Status</b>: {{offer.closedDate == null ? 'open':'closed'}}</div>
                            <div className="p-2"><b>Category:</b> {{offer.category}}</div>
                            <div className="p-2"><b>Likes:</b> {{offer.likes}}</div>
                        </div><br>
                        <a [routerLink]="['/offerDetails',offer.id]" className="btn btn-success">Open</a>
                </div>
            </div> */}
            {/* <br> */}
        </div>
    </div>
</div>
  );
};
