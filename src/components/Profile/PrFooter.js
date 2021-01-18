import _fetch from 'isomorphic-fetch';
import React,{useState,useEffect} from 'react'
import authService from '../../services/auth.service';
import StripeButton from '../Checkout/stripebutton';
import './prfooterstyles.css'


function ProfileFooter() {
    const [data,setData] = useState("");
    const user = authService.getCurrentUser();
    
    useEffect(() => {
    fetch("http://localhost:8080/api/accounts/"+user.id)
    .then((res) => res.json())
    .then((json) => setData(json))
   },[])
    // useEffect(() => {
    // UserAccountService.getAccount(user.id)
    // .then((res) => setData(res.data))
    // },[])

    return (
        <div className="fundscont">
            <div className="balancediv">
                <p>Balance: {data.balance}€</p>
            </div>
            <div className="checkout">
                <StripeButton />
            </div>
        </div>
    )
}

export default ProfileFooter;
