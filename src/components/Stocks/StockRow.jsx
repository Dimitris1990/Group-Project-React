import React from 'react';
import OrderService from "../../services/Order-Service";
import AuthService from "../../services/auth.service";

export default class StockRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }        
    }

    handleChange = (event) => {
      this.setState({ value: event.target.value });
    }

    sellStocks(numShares,symbol,currentPrice,ordertype) {
        const data = {numShares,symbol,currentPrice,ordertype};
        const currentUser = AuthService.getCurrentUser();
        if(this.props.portfolio.numShares>=numShares){
        OrderService.createOrder(currentUser.id,data);
        alert("Transaction successful");
        }else{
            alert("Insufficient amount of stocks");
        } 
      }

    render() {
        let pl = (((this.props.stockPrices[this.props.portfolio.symbol]-this.props.portfolio.avgPrice)*this.props.portfolio.numShares));
        return (
              <tr>
                <td>{this.props.portfolio.symbol}</td>
                <td>{this.props.portfolio.numShares}</td>
                <td>{this.props.portfolio.avgPrice}€</td>
                <td>{this.props.stockPrices[this.props.portfolio.symbol]}€</td>
                <td>{isNaN(pl.toFixed(2))? <span>Calculating</span> : <span>{pl.toFixed(2)}€</span>}</td>
                <td>
                    <input className="sellinput" type="number" value={this.state.value} min='1' max={this.props.portfolio.numShares} onChange={this.handleChange} />
                    <button className="sellbtn" onClick={() => this.sellStocks(this.state.value, this.props.portfolio.symbol, this.props.stockPrices[this.props.portfolio.symbol], 1)} >SELL</button>
                </td>
            </tr>
        );
    }
}

