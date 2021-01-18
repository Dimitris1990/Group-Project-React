import React from 'react';
import OrderService from "../../services/Order-Service";
import AuthService from "../../services/auth.service";
import AccountService from "../../services/UserAccount-Service";
import './usermarket.css'

const currentUser = AuthService.getCurrentUser();

class StockTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' ,
        accounts: []
    };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        AccountService.getAccount(currentUser.id).then((res) => {
          this.setState({ accounts: res.data });
        })
      }


    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase()});
    }

  setOrder(numShares,symbol,currentPrice,ordertype) {
    const data = {
      numShares: numShares,
      symbol: symbol,
      currentPrice: currentPrice,
      ordertype: ordertype
    };
    const currentUser = AuthService.getCurrentUser();
     if(this.state.accounts.balance> numShares*currentPrice && numShares>=1){
    OrderService.createOrder(currentUser.id,data);
     alert("Success!");
    }else if(numShares<1){
         alert("Invalid number of stocks");
    }else {
         alert("Insufficient Balance");
    }
}

    render() {
        const { accounts } = this.state;

        let price = this.props.stock.stockPrice;
        let volume = this.props.stock.stockVolume;
        let change = (this.props.stock.stockChange);
        let symbol = this.props.stock.stockName;
        if(symbol!=null){
        return (
            <div className="info-cont">
                <h3 className="markets-title">MARKET</h3>
                <h4 className="balance-title">Balance: {accounts.balance}€</h4>
                <div className="second-cont">
                    
                        <h3 className="price-title">Price: ${price} </h3>
                        <p className="volume-title">Volume: {volume} </p>
                        <p className="percent-title">Change(1D) {change}%</p>
                        
                        
                        <div className="btn-cont">
                            
                            <h5 className="symbol-buy">{this.props.stock.stockName}</h5>
                            <div className="third-cont">
                            <input className="buy-inp" type="number" min='1' value={this.state.value.toUpperCase()} onChange={this.handleChange} />
                            <button onClick={() => this.setOrder(this.state.value,symbol,price,0)}>BUY</button>
                            </div>
                        </div>
                    
                </div>
            </div>
        ) } else return(null)
    }

}

export default StockTable;


{/* <div className="container mt-4 mr-4">
                <h6>MARKETS</h6>
                <h6>Balance: {accounts.balance}€</h6>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <div className="col mb-4">
                        <div className="card">
                            <div className="stock-header">
                                <span className="symbol">Price: ${price} </span><p>Volume: {volume} <span className="percent">Change(1D) {change}%</span></p></div>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.stock.stockName}</h5>
                                <input type="number" min='1' value={this.state.value} onChange={this.handleChange} />
                                <button onClick={() => this.setOrder(this.state.value,symbol,price,0)}>BUY</button>
                                <p></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}