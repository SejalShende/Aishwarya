import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './form.css';
export const Order = () => {
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/orders/${userId}`).then((response) => {
      setOrderList(response.data);
      console.log(orderList);
    });
  }, []);

  const viewProduct = (val) => {
    localStorage.setItem('pid', val.product_id);
    window.location.pathname = '/viewFromOrders';
  };
  const cancelOrder = (val) => {
    let id = val.order_id;
    Axios.delete(`http://localhost:3001/orders/${id}`).then((response) => {
      toast('Successfully cancelled the order', { type: 'success' });
      window.location.pathname = '/orders';
    });
  };

  const rateProduct = (id) => {
    localStorage.setItem('rid', id);
    window.location.pathname = '/rateHotel';
  };
  return (
    <div className="container">
    {/* <div className="alert alert-danger" >{{pageError}}</div> */}
    <div className="offer-details-content">
        <h1>Post an Offer</h1><br>
        <form [formGroup]="addOfferForm" (ngSubmit)="onSubmit()">
            <table className="table">
                <thead>
                    <tr>
                        <th>Properties</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" formControlName="name" style="display:none">
                            <input type="text" formControlName="name" className="form-control">
                            <!-- error checking for name -->
                            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" className="alert alert-danger">

                                <div *ngIf="name?.errors?.required">
                                    name of the offer is required.
                                </div>

                                <div *ngIf="name?.errors?.minlength">
                                    name must be at least 3 characters long.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <input type="textbox" rows="2" formControlName="description" className="form-control">
                            <!-- error checking for description-->
                            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" className="alert alert-danger">

                                <div *ngIf="description?.errors?.required">
                                    Description is required.
                                </div>

                                <div *ngIf="description?.errors?.minlength">
                                    Description must be at least 10 characters long.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            <select className="form-control" formControlName="category">
                                <option>Electronics</option>
                                <option>Plants</option>
				<option>Furniture</option>
				<option>Accessories</option>
                                </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" [disabled]="!addOfferForm.valid"> Submit</button> &nbsp; &nbsp;<a className="btn btn-dark" routerLink="/main">Go back</a>
        </form>

    </div>
</div>
  );
};
