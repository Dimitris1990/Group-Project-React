import React,{useState} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import authService from "../../services/auth.service";

const user = authService.getCurrentUser();

const StripeButton = () => {
  const publishableKey = "pk_test_51I8sl9D4v5MDASqlCtQlXQBlWphpUSQKzn7hXfWHPRdodDXPTW3Lhyu2JlqAM67jHiDE9ZM9VNSK0WIzWZCBs0i40086wrp960";
  const [price, setPrice] = useState("");
  const stripePrice = price*1;
  
  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8080/api/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        console.log(typeof price);
        alert("payment success");
        axios
      .post("http://localhost:8080/api/accounts/"+user.id+"/deposit", {
        deposit: stripePrice
      })
      })
      .catch((error) => {
        console.log(error);
        alert("Payment failed");
      });
  };

  return (
    <>
      <input type="number" step="0.01" onChange={event => setPrice(event.target.value)}/>
      <StripeCheckout
        amount={stripePrice}
        label="Add Funds"
        name="Manges kai paizoun bala"
        description={`Your total is ${price}`}
        panelLabel={"Add Funds"}
        token={onToken}
        stripeKey={publishableKey}
        currency="EUR"
      />
    </>
  );
};

export default StripeButton;